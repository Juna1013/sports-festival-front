import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

export default function Layout({ children, title = "体育祭ポータル" }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-blue-50 to-cyan-100 flex flex-col">
      <Header />

      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">{title}</h1>
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
}
