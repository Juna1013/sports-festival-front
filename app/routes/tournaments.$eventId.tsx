import { json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import type { LoaderFunctionArgs } from "@remix-run/node";
import Layout from "~/components/Layout";
import { fetchTournament, type Tournament } from "~/utils/api";

export async function loader({ params }: LoaderFunctionArgs) {
  const eventId = parseInt(params.eventId || '');
  
  if (isNaN(eventId)) {
    throw new Response("Invalid event ID", { status: 400 });
  }

  try {
    const tournamentData = await fetchTournament(eventId);
    return json({ tournamentData });
  } catch (error) {
    console.error('Error loading tournament:', error);
    throw new Response("Tournament not found", { status: 404 });
  }
}

export default function TournamentPage() {
  const { tournamentData } = useLoaderData<typeof loader>();
  const { event, tournaments } = tournamentData;

  const getTeamColor = (team: string) => {
    const colors: { [key: string]: string } = {
      '赤組': 'bg-red-100 text-red-800 border-red-300',
      '青組': 'bg-blue-100 text-blue-800 border-blue-300',
      '黄組': 'bg-yellow-100 text-yellow-800 border-yellow-300',
      '緑組': 'bg-green-100 text-green-800 border-green-300',
    };
    return colors[team] || 'bg-gray-100 text-gray-800 border-gray-300';
  };

  const renderMatch = (tournament: Tournament) => {
    return (
      <div key={tournament.id} className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-lg p-4 hover:shadow-lg hover:bg-white/90 transition-all duration-300">
        <div className="text-sm font-medium text-gray-600 mb-3">
          {tournament.round}
        </div>

        <div className="space-y-2">
          <div className={`px-3 py-2 rounded border ${getTeamColor(tournament.team_a)} ${
            tournament.winner === tournament.team_a ? 'ring-2 ring-yellow-400' : ''
          }`}>
            <div className="flex justify-between items-center">
              <span className="font-medium">{tournament.team_a}</span>
              {tournament.winner === tournament.team_a && (
                <span className="material-icons text-yellow-600">emoji_events</span>
              )}
            </div>
          </div>

          <div className="text-center text-gray-400 text-sm">VS</div>

          <div className={`px-3 py-2 rounded border ${getTeamColor(tournament.team_b)} ${
            tournament.winner === tournament.team_b ? 'ring-2 ring-yellow-400' : ''
          }`}>
            <div className="flex justify-between items-center">
              <span className="font-medium">{tournament.team_b}</span>
              {tournament.winner === tournament.team_b && (
                <span className="material-icons text-yellow-600">emoji_events</span>
              )}
            </div>
          </div>
        </div>

        <div className="mt-3 text-center">
          {tournament.winner ? (
            <span className="text-sm text-green-600 font-medium">
              勝者: {tournament.winner}
            </span>
          ) : (
            <span className="text-sm text-gray-500">
              未決定
            </span>
          )}
        </div>
      </div>
    );
  };

  return (
    <Layout title={`${event.name} - トーナメント表`}>
      <div className="mb-6">
        <Link
          to="/events"
          className="text-blue-600 hover:text-blue-800 text-sm hover:underline transition-colors"
        >
          ← 競技スケジュールに戻る
        </Link>
      </div>

      {tournaments.length === 0 ? (
        <div className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-center shadow-md">
          <p className="text-gray-700 text-sm">この競技のトーナメント情報はありません。</p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tournaments.map(renderMatch)}
        </div>
      )}

      <div className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-lg p-6 shadow-md">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">説明</h3>
        <ul className="space-y-2">
          <li className="flex items-start text-sm text-gray-700">
            <span className="material-icons text-lg mr-3 mt-0.5 text-blue-500">emoji_events</span>
            トロフィーマークは勝者を表します
          </li>
          <li className="flex items-start text-sm text-gray-700">
            <span className="material-icons text-lg mr-3 mt-0.5 text-blue-500">schedule</span>
            「未決定」は今後試合が行われる予定です
          </li>
          <li className="flex items-start text-sm text-gray-700">
            <span className="material-icons text-lg mr-3 mt-0.5 text-blue-500">update</span>
            結果は随時更新されます
          </li>
        </ul>
      </div>
    </Layout>
  );
}
