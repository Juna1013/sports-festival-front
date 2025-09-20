import { useLoaderData, Link } from "@remix-run/react";
import Layout from "~/components/Layout";
import { fetchEvents } from "~/utils/api";

export async function loader() {
  try {
    const events = await fetchEvents();
    const ballSports = events.filter(event => event.id <= 5);
    const trackEvents = events.filter(event => event.id >= 6);
    return { ballSports, trackEvents };
  } catch (error) {
    console.error('Error loading events:', error);
    return { ballSports: [], trackEvents: [] };
  }
}

export default function Index() {
  const { ballSports, trackEvents } = useLoaderData<typeof loader>();

  const getSportIcon = (name: string) => {
    const iconMap: { [key: string]: string } = {
      'バスケットボール': 'sports_basketball',
      'バレーボール': 'sports_volleyball',
      'ソフトボール': 'sports_baseball',
      'サッカー': 'sports_soccer',
      'ソフトテニス': 'sports_tennis',
      '障害物競走': 'directions_run',
      '大リレー': 'group_work',
      '借り人競争': 'search',
      '○人×脚': 'group',
      '大綱引き': 'fitness_center',
      'パン食い競争': 'restaurant'
    };
    return iconMap[name] || 'sports';
  };

  return (
    <Layout title="">
      {/* Hero Image Section - 校庭の写真用 */}
      <div className="relative w-full h-48 sm:h-56 md:h-72 lg:h-80 xl:h-96 mb-6 md:mb-8 rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-xl">
        {/* 画像プレースホルダー - 実際の校庭写真に置き換え予定 */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-sky-300 to-cyan-200 flex items-center justify-center px-4">
          <div className="text-center text-white max-w-md">
            <span className="material-icons text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-2 md:mb-4 opacity-80">
              school
            </span>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold opacity-90 mb-1 md:mb-2">
              校庭の写真がここに入ります
            </p>
            <p className="text-xs sm:text-sm md:text-base opacity-70 px-2">
              画像を追加するとこのプレースホルダーが置き換わります
            </p>
          </div>
        </div>

        {/* 画像用のimg要素（現在はコメントアウト） */}
        {/*
        <img
          src="/images/school-ground.jpg"
          alt="校庭の写真"
          className="w-full h-full object-cover"
        />
        */}

        {/* オーバーレイテキスト（画像追加時に使用可能） */}
        {/*
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            体育祭ポータル
          </h1>
        </div>
        */}
      </div>

      <div className="w-full mb-6 md:mb-8">
        <div className="bg-white/90 backdrop-blur-sm border border-white/30 rounded-xl p-4 md:p-6 shadow-xl hover:shadow-2xl hover:bg-white hover:-translate-y-1 transition-all duration-300 transform">
          <h2 className="flex items-center text-lg md:text-xl font-semibold text-gray-900 mb-3">
            <span className="material-icons text-xl md:text-2xl mr-2 md:mr-3 text-blue-600 drop-shadow-sm">schedule</span>
            競技スケジュール
          </h2>
          <p className="text-gray-700 mb-4 md:mb-6 text-xs md:text-sm leading-relaxed">
            各競技の開始時間と開催場所を確認できます。下記の球技・競技タイルからも直接トーナメント表にアクセスできます。
          </p>
          <Link
            to="/events"
            className="inline-flex items-center px-3 md:px-4 py-2 text-xs md:text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            スケジュールを見る
          </Link>
        </div>
      </div>

      {/* 球技種目 */}
      <div data-section="sports-ball" className="bg-white/90 backdrop-blur-sm border border-white/30 rounded-xl p-6 shadow-xl mb-8">
        <h2 className="flex items-center text-xl font-semibold text-gray-900 mb-6">
          <span className="material-icons text-2xl mr-3 text-amber-600 drop-shadow-sm">sports_basketball</span>
          球技種目
        </h2>

        {ballSports.length === 0 ? (
          <div className="text-center text-gray-500 py-8">
            <p>球技種目の情報を読み込み中...</p>
          </div>
        ) : (
          <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {ballSports.map((sport) => (
              <Link
                key={sport.id}
                to={`/tournaments/${sport.id}`}
                className="group"
              >
                <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group-hover:border-amber-300">
                  {/* アイコンエリア */}
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 group-hover:from-amber-200 group-hover:to-orange-200 transition-all duration-300">
                    <span className={`material-icons text-3xl text-amber-600 group-hover:text-amber-700 group-hover:scale-110 transition-all duration-300`}>
                      {getSportIcon(sport.name)}
                    </span>
                  </div>

                  {/* 種目情報 */}
                  <div className="text-center space-y-2">
                    <h3 className="font-semibold text-gray-900 text-sm md:text-base group-hover:text-amber-700 transition-colors duration-300">
                      {sport.name}
                    </h3>
                    <div className="text-xs text-gray-600 space-y-1">
                      <p>🕐 {new Date(sport.schedule_time).toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit' })}</p>
                      <p>📍 {sport.location}</p>
                    </div>
                    <div className="pt-2">
                      <span className="text-xs text-amber-600 font-medium group-hover:text-amber-700">
                        トーナメント表 →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* 競技種目 */}
      <div data-section="sports-track" className="bg-white/90 backdrop-blur-sm border border-white/30 rounded-xl p-6 shadow-xl mb-8">
        <h2 className="flex items-center text-xl font-semibold text-gray-900 mb-6">
          <span className="material-icons text-2xl mr-3 text-green-600 drop-shadow-sm">directions_run</span>
          競技種目
        </h2>

        {trackEvents.length === 0 ? (
          <div className="text-center text-gray-500 py-8">
            <p>競技種目の情報を読み込み中...</p>
          </div>
        ) : (
          <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {trackEvents.map((sport) => (
              <Link
                key={sport.id}
                to={`/tournaments/${sport.id}`}
                className="group"
              >
                <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group-hover:border-green-300">
                  {/* アイコンエリア */}
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-100 to-emerald-100 group-hover:from-green-200 group-hover:to-emerald-200 transition-all duration-300">
                    <span className={`material-icons text-3xl text-green-600 group-hover:text-green-700 group-hover:scale-110 transition-all duration-300`}>
                      {getSportIcon(sport.name)}
                    </span>
                  </div>

                  {/* 種目情報 */}
                  <div className="text-center space-y-2">
                    <h3 className="font-semibold text-gray-900 text-sm md:text-base group-hover:text-green-700 transition-colors duration-300">
                      {sport.name}
                    </h3>
                    <div className="text-xs text-gray-600 space-y-1">
                      <p>🕐 {new Date(sport.schedule_time).toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit' })}</p>
                      <p>📍 {sport.location}</p>
                    </div>
                    <div className="pt-2">
                      <span className="text-xs text-green-600 font-medium group-hover:text-green-700">
                        トーナメント表 →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <div data-section="access" className="bg-white/90 backdrop-blur-sm border border-white/30 rounded-xl p-4 md:p-6 shadow-xl">
        <h2 className="flex items-center text-lg md:text-xl font-semibold text-gray-900 mb-4">
          <span className="material-icons text-xl md:text-2xl mr-2 md:mr-3 text-red-600 drop-shadow-sm">location_on</span>
          アクセス・会場案内
        </h2>

        {/* Google Maps 埋め込みエリア */}
        <div className="mb-4 rounded-lg overflow-hidden shadow-md">
          {/* Google Maps プレースホルダー */}
          <div className="w-full h-48 sm:h-56 md:h-64 bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center border-2 border-dashed border-gray-300">
            <div className="text-center text-gray-600 px-4">
              <span className="material-icons text-3xl md:text-4xl mb-2 text-gray-500">map</span>
              <p className="text-xs md:text-sm font-medium">Google Maps がここに表示されます</p>
              <p className="text-xs opacity-70 mt-1 hidden sm:block">実際のマップを埋め込む際はこのプレースホルダーを置き換えてください</p>
            </div>
          </div>

          {/* 実際のGoogle Maps iframe（コメントアウト） */}
          {/*
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.0...."
            width="100%"
            height="256"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="学校の場所"
          ></iframe>
          */}
        </div>

        {/* アクセス情報 */}
        <div className="space-y-3 md:space-y-4">
          <div className="flex items-start text-xs md:text-sm text-gray-700">
            <span className="material-icons text-base md:text-lg mr-2 md:mr-3 mt-0.5 text-red-500 flex-shrink-0">directions_transit</span>
            <div className="min-w-0 flex-1">
              <p className="font-medium">電車でお越しの場合</p>
              <p className="text-xs text-gray-600 mt-1">○○駅から徒歩10分</p>
            </div>
          </div>
          <div className="flex items-start text-xs md:text-sm text-gray-700">
            <span className="material-icons text-base md:text-lg mr-2 md:mr-3 mt-0.5 text-blue-500 flex-shrink-0">directions_car</span>
            <div className="min-w-0 flex-1">
              <p className="font-medium">お車でお越しの場合</p>
              <p className="text-xs text-gray-600 mt-1">校内駐車場をご利用ください</p>
            </div>
          </div>
          <div className="flex items-start text-xs md:text-sm text-gray-700">
            <span className="material-icons text-base md:text-lg mr-2 md:mr-3 mt-0.5 text-green-500 flex-shrink-0">info</span>
            <div className="min-w-0 flex-1">
              <p className="font-medium">注意事項</p>
              <p className="text-xs text-gray-600 mt-1">当日は混雑が予想されます。公共交通機関のご利用をお勧めします</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
