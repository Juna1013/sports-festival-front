import { Link } from "@remix-run/react";
import Layout from "~/components/Layout";

export default function Index() {
  return (
    <Layout title="ホーム">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="card">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            📅 競技スケジュール
          </h2>
          <p className="text-gray-600 mb-6">
            各競技の開始時間と開催場所を確認できます。
          </p>
          <Link to="/events" className="btn-primary">
            スケジュールを見る
          </Link>
        </div>
        
        <div className="card">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            🏆 トーナメント表
          </h2>
          <p className="text-gray-600 mb-6">
            各競技のトーナメント進行状況を確認できます。
          </p>
          <Link to="/events" className="btn-secondary">
            トーナメントを見る
          </Link>
        </div>
      </div>
      
      <div className="mt-12 card">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          🎯 お知らせ
        </h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            雨天時の競技変更については、当日朝に発表します
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            競技結果は随時更新されます
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            応援は各チームカラーの服装でお願いします
          </li>
        </ul>
      </div>
    </Layout>
  );
}
