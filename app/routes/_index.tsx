import { Link } from "@remix-run/react";
import Layout from "~/components/Layout";

export default function Index() {
  return (
    <Layout title="ホーム">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:shadow-lg hover:bg-white/90 transition-all duration-300">
          <h2 className="flex items-center text-xl font-semibold text-gray-900 mb-3">
            <span className="material-icons text-2xl mr-3 text-blue-600">schedule</span>
            競技スケジュール
          </h2>
          <p className="text-gray-700 mb-6 text-sm leading-relaxed">
            各競技の開始時間と開催場所を確認できます。
          </p>
          <Link
            to="/events"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors shadow-md"
          >
            スケジュールを見る
          </Link>
        </div>

        <div className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:shadow-lg hover:bg-white/90 transition-all duration-300">
          <h2 className="flex items-center text-xl font-semibold text-gray-900 mb-3">
            <span className="material-icons text-2xl mr-3 text-amber-600">emoji_events</span>
            トーナメント表
          </h2>
          <p className="text-gray-700 mb-6 text-sm leading-relaxed">
            各競技のトーナメント進行状況を確認できます。
          </p>
          <Link
            to="/events"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white/90 border border-gray-300 hover:bg-white rounded-md transition-colors shadow-md"
          >
            トーナメントを見る
          </Link>
        </div>
      </div>

      <div className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-lg p-6 shadow-md">
        <h2 className="flex items-center text-xl font-semibold text-gray-900 mb-4">
          <span className="material-icons text-2xl mr-3 text-green-600">campaign</span>
          お知らせ
        </h2>
        <ul className="space-y-3">
          <li className="flex items-start text-sm text-gray-700">
            <span className="material-icons text-lg mr-3 mt-0.5 text-blue-500">info</span>
            雨天時の競技変更については、当日朝に発表します
          </li>
          <li className="flex items-start text-sm text-gray-700">
            <span className="material-icons text-lg mr-3 mt-0.5 text-blue-500">update</span>
            競技結果は随時更新されます
          </li>
          <li className="flex items-start text-sm text-gray-700">
            <span className="material-icons text-lg mr-3 mt-0.5 text-blue-500">groups</span>
            応援は各チームカラーの服装でお願いします
          </li>
        </ul>
      </div>
    </Layout>
  );
}
