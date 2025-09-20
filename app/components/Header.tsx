import { Link, useLocation } from "@remix-run/react";
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // スクロール状態を監視
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "スケジュール", href: "/events", icon: "schedule" },
    { name: "球技", href: "#sports-ball", icon: "sports_basketball", isSection: true },
    { name: "競技", href: "#sports-track", icon: "directions_run", isSection: true },
    { name: "アクセス", href: "#access", icon: "location_on", isSection: true }
  ];

  const handleSectionClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href === '#sports-ball' ? '[data-section="sports-ball"]' :
                                           href === '#sports-track' ? '[data-section="sports-track"]' :
                                           href === '#access' ? '[data-section="access"]' : href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-3 md:p-4">
      <div
        className={`
          flex justify-between items-center max-w-6xl mx-auto px-4 md:px-6 py-3 md:py-4
          rounded-xl md:rounded-2xl transition-all duration-300 ease-in-out
          ${isScrolled
            ? 'bg-white/90 backdrop-blur-lg shadow-xl border border-white/60'
            : 'bg-white/80 backdrop-blur-md shadow-lg border border-white/50'
          }
        `}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <span className={`
            material-icons text-blue-600 transition-all duration-300 group-hover:text-blue-700 group-hover:scale-105
            ${isScrolled ? 'text-4xl md:text-5xl' : 'text-5xl md:text-6xl'}
          `}>
            sports
          </span>
          <div className={`
            ml-2 md:ml-3 transition-all duration-300
            ${isScrolled ? 'opacity-80' : 'opacity-100'}
          `}>
            <h1 className={`
              font-bold text-gray-800 leading-tight
              ${isScrolled ? 'text-sm md:text-base' : 'text-base md:text-lg'}
            `}>
              体育祭
            </h1>
            <p className={`
              text-gray-600 leading-tight
              ${isScrolled ? 'text-xs hidden md:block' : 'text-xs md:text-sm'}
            `}>
              ポータル
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="flex space-x-3 md:space-x-6">
          {navItems.map((item, index) => (
            item.isSection ? (
              <button
                key={item.name}
                onClick={() => handleSectionClick(item.href)}
                className={`
                  relative text-gray-700 hover:text-blue-600 transition-all duration-300
                  font-medium py-2 px-2 md:px-3 group text-xs md:text-sm flex items-center
                  ${isScrolled ? 'text-gray-800' : 'text-gray-700'}
                `}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <span className="material-icons text-sm md:text-base mr-1 md:mr-1.5">{item.icon}</span>
                <span className="hidden sm:inline">{item.name}</span>
                <span className={`
                  absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400
                  transition-all duration-300 w-0 group-hover:w-full
                `}></span>
              </button>
            ) : (
              <Link
                key={item.name}
                to={item.href}
                className={`
                  relative text-gray-700 hover:text-blue-600 transition-all duration-300
                  font-medium py-2 px-2 md:px-3 group text-xs md:text-sm flex items-center
                  ${isScrolled ? 'text-gray-800' : 'text-gray-700'}
                  ${location.pathname === item.href ? 'text-blue-600' : ''}
                `}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <span className="material-icons text-sm md:text-base mr-1 md:mr-1.5">{item.icon}</span>
                <span className="hidden sm:inline">{item.name}</span>
                <span className={`
                  absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400
                  transition-all duration-300
                  ${location.pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'}
                `}></span>
              </Link>
            )
          ))}
        </nav>
      </div>
    </header>
  );
}