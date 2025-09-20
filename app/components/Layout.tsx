import { Link } from "@remix-run/react";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

export default function Layout({ children, title = "体育祭ポータル" }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <Link to="/" className="text-2xl font-bold">
              🏃‍♂️ 体育祭ポータル
            </Link>
            <nav className="space-x-4">
              <Link to="/" className="hover:text-blue-200 transition duration-200">
                ホーム
              </Link>
              <Link to="/events" className="hover:text-blue-200 transition duration-200">
                競技スケジュール
              </Link>
            </nav>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">{title}</h1>
        {children}
      </main>
      
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 体育祭ポータル</p>
        </div>
      </footer>
    </div>
  );
}
