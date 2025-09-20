import { Link } from "@remix-run/react";
import Layout from "~/components/Layout";

export default function Index() {
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
            各競技の開始時間と開催場所を確認できます。
          </p>
          <Link
            to="/events"
            className="inline-flex items-center px-3 md:px-4 py-2 text-xs md:text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            スケジュールを見る
          </Link>
        </div>
      </div>

      {/* 球技種目ギャラリー */}
      <div data-section="sports-ball" className="bg-white/90 backdrop-blur-sm border border-white/30 rounded-xl p-6 shadow-xl mb-8">
        <h2 className="flex items-center text-xl font-semibold text-gray-900 mb-6">
          <span className="material-icons text-2xl mr-3 text-amber-600 drop-shadow-sm">sports_basketball</span>
          球技種目
        </h2>

        <div className="relative overflow-hidden">
          {/* 横スクロールコンテナ - 無限ループ */}
          <div className="flex gap-3 md:gap-4 scroll-container auto-scroll">
            {/* 球技カード - 2回繰り返してループ効果 */}
            {[...Array(2)].map((_, arrayIndex) =>
              [
                { name: "バスケットボール", description: "チーム戦での熱い戦いが繰り広げられます", icon: "sports_basketball" },
                { name: "サッカー", description: "グラウンドを駆け抜ける白熱した試合", icon: "sports_soccer" },
                { name: "バレーボール", description: "ネットを挟んでのパワフルな攻防", icon: "sports_volleyball" },
                { name: "ドッジボール", description: "俊敏性と戦略が求められる人気競技", icon: "sports_handball" },
                { name: "テニス", description: "個人戦での技術と集中力の勝負", icon: "sports_tennis" }
              ].map((sport, index) => (
                <div key={`${sport.name}-${arrayIndex}-${index}`} className="flex-none w-56 sm:w-64 md:w-72">
                  <div className="bg-white border border-gray-200 rounded-xl p-3 md:p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">

                    {/* 写真エリア - プレースホルダー */}
                    <div className="relative w-full h-32 sm:h-36 md:h-40 mb-3 md:mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-blue-100 to-cyan-100">
                      <div className="absolute inset-0 flex items-center justify-center border-2 border-dashed border-gray-300">
                        <div className="text-center text-gray-500">
                          <span className={`material-icons text-3xl md:text-4xl mb-1 md:mb-2`}>{sport.icon}</span>
                          <p className="text-xs font-medium">{sport.name}の写真</p>
                          <p className="text-xs opacity-70 hidden sm:block">画像追加予定</p>
                        </div>
                      </div>

                      {/* 実際の画像（コメントアウト） */}
                      {/*
                      <img
                        src={`/images/sports/${sport.name.toLowerCase()}.jpg`}
                        alt={`${sport.name}の様子`}
                        className="w-full h-full object-cover"
                      />
                      */}
                    </div>

                    {/* 種目情報 */}
                    <div className="space-y-2">
                      <h3 className="font-semibold text-gray-900 text-base md:text-lg">{sport.name}</h3>
                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed line-clamp-2">{sport.description}</p>
                      <div className="flex items-center justify-between pt-1 md:pt-2">
                        <span className="text-xs text-blue-600 font-medium">詳細を見る →</span>
                        <span className={`material-icons text-base md:text-lg text-gray-400`}>{sport.icon}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* 競技種目ギャラリー */}
      <div data-section="sports-track" className="bg-white/90 backdrop-blur-sm border border-white/30 rounded-xl p-6 shadow-xl mb-8">
        <h2 className="flex items-center text-xl font-semibold text-gray-900 mb-6">
          <span className="material-icons text-2xl mr-3 text-green-600 drop-shadow-sm">directions_run</span>
          競技種目
        </h2>

        <div className="relative overflow-hidden">
          {/* 横スクロールコンテナ - 無限ループ */}
          <div className="flex gap-3 md:gap-4 scroll-container auto-scroll">
            {/* 競技カード - 2回繰り返してループ効果 */}
            {[...Array(2)].map((_, arrayIndex) =>
              [
                { name: "100m走", description: "短距離走の王道、瞬発力とスピードの競技", icon: "directions_run" },
                { name: "リレー", description: "チームワークが勝負を分ける団体競技", icon: "group_work" },
                { name: "走り幅跳び", description: "助走からのジャンプで距離を競う", icon: "sports" },
                { name: "綱引き", description: "力と息を合わせたチーム戦", icon: "fitness_center" },
                { name: "騎馬戦", description: "伝統的な体育祭の花形競技", icon: "groups" }
              ].map((sport, index) => (
                <div key={`${sport.name}-${arrayIndex}-${index}`} className="flex-none w-56 sm:w-64 md:w-72">
                  <div className="bg-white border border-gray-200 rounded-xl p-3 md:p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">

                    {/* 写真エリア - プレースホルダー */}
                    <div className="relative w-full h-32 sm:h-36 md:h-40 mb-3 md:mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-green-100 to-emerald-100">
                      <div className="absolute inset-0 flex items-center justify-center border-2 border-dashed border-gray-300">
                        <div className="text-center text-gray-500">
                          <span className={`material-icons text-3xl md:text-4xl mb-1 md:mb-2`}>{sport.icon}</span>
                          <p className="text-xs font-medium">{sport.name}の写真</p>
                          <p className="text-xs opacity-70 hidden sm:block">画像追加予定</p>
                        </div>
                      </div>

                      {/* 実際の画像（コメントアウト） */}
                      {/*
                      <img
                        src={`/images/sports/${sport.name.toLowerCase()}.jpg`}
                        alt={`${sport.name}の様子`}
                        className="w-full h-full object-cover"
                      />
                      */}
                    </div>

                    {/* 種目情報 */}
                    <div className="space-y-2">
                      <h3 className="font-semibold text-gray-900 text-base md:text-lg">{sport.name}</h3>
                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed line-clamp-2">{sport.description}</p>
                      <div className="flex items-center justify-between pt-1 md:pt-2">
                        <span className="text-xs text-green-600 font-medium">詳細を見る →</span>
                        <span className={`material-icons text-base md:text-lg text-gray-400`}>{sport.icon}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
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
