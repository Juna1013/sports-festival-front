import { Link } from "@remix-run/react";

export default function Footer() {
  const footerLinks = [
    { name: "ホーム", href: "/" },
    { name: "競技スケジュール", href: "/events" },
    { name: "トーナメント表", href: "/tournaments" }
  ];

  return (
    <footer className="bg-slate-900 text-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8">
          {/* メインコンテンツエリア */}
          <div className="grid md:grid-cols-2 gap-8">

            {/* ブランドセクション */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="material-icons text-3xl text-blue-400">sports</span>
                <h3 className="text-xl font-bold text-white">体育祭ポータル</h3>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                学校の体育祭に関する全ての情報をお届けします。競技スケジュールからトーナメント結果まで、リアルタイムで更新中です。
              </p>
            </div>

            {/* ナビゲーションリンク */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white border-b border-slate-700 pb-2">
                サイトナビゲーション
              </h4>
              <nav className="space-y-3">
                {footerLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="flex items-center text-slate-300 hover:text-blue-400 transition-colors duration-300 group"
                  >
                    <span className="material-icons text-sm mr-2 group-hover:translate-x-1 transition-transform duration-300">
                      chevron_right
                    </span>
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* 下部ボーダーライン */}
          <div className="border-t border-slate-700 mt-8 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-slate-400">
                &copy; 2024 体育祭ポータル. All rights reserved.
              </p>
              <div className="flex items-center space-x-4 text-xs text-slate-500">
                <span>最終更新: 2024年12月</span>
                <span>•</span>
                <span>リアルタイム更新中</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}