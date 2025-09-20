import { Link } from "@remix-run/react";

export default function Header() {
  return (
    <header className="border-b border-white/20 bg-transparent backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center text-xl font-semibold text-gray-900 hover:text-gray-700 transition-colors">
            <span className="material-icons text-4xl mr-2 text-blue-600">sports</span>
          </Link>
          <nav className="flex space-x-8">
            <Link
              to="/"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors border-b-2 border-transparent hover:border-blue-400"
            >
              ホーム
            </Link>
            <Link
              to="/events"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors border-b-2 border-transparent hover:border-blue-400"
            >
              競技スケジュール
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}