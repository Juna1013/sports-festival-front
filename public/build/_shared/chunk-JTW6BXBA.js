import {
  Link,
  useLocation
} from "/build/_shared/chunk-S3VR4VJ3.js";
import {
  createHotContext
} from "/build/_shared/chunk-WMDNZPIO.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/Header.tsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Header.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Header.tsx"
  );
  import.meta.hot.lastModified = "1758409425519.9712";
}
function Header() {
  _s();
  const [isScrolled, setIsScrolled] = (0, import_react2.useState)(false);
  const location = useLocation();
  (0, import_react2.useEffect)(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navItems = [{
    name: "\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB",
    href: "/events",
    icon: "schedule"
  }, {
    name: "\u7403\u6280",
    href: "#sports-ball",
    icon: "sports_basketball",
    isSection: true
  }, {
    name: "\u7AF6\u6280",
    href: "#sports-track",
    icon: "directions_run",
    isSection: true
  }, {
    name: "\u30A2\u30AF\u30BB\u30B9",
    href: "#access",
    icon: "location_on",
    isSection: true
  }];
  const handleSectionClick = (href) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href === "#sports-ball" ? '[data-section="sports-ball"]' : href === "#sports-track" ? '[data-section="sports-track"]' : href === "#access" ? '[data-section="access"]' : href);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth"
        });
      }
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "fixed top-0 left-0 right-0 z-50 p-3 md:p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `
          flex justify-between items-center max-w-6xl mx-auto px-4 md:px-6 py-3 md:py-4
          rounded-xl md:rounded-2xl transition-all duration-300 ease-in-out
          ${isScrolled ? "bg-white/90 backdrop-blur-lg shadow-xl border border-white/60" : "bg-white/80 backdrop-blur-md shadow-lg border border-white/50"}
        `, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "flex items-center group", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `
            material-icons text-blue-600 transition-all duration-300 group-hover:text-blue-700 group-hover:scale-105
            ${isScrolled ? "text-4xl md:text-5xl" : "text-5xl md:text-6xl"}
          `, children: "sports" }, void 0, false, {
        fileName: "app/components/Header.tsx",
        lineNumber: 76,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `
            ml-2 md:ml-3 transition-all duration-300
            ${isScrolled ? "opacity-80" : "opacity-100"}
          `, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: `
              font-bold text-gray-800 leading-tight
              ${isScrolled ? "text-sm md:text-base" : "text-base md:text-lg"}
            `, children: "\u4F53\u80B2\u796D" }, void 0, false, {
          fileName: "app/components/Header.tsx",
          lineNumber: 86,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: `
              text-gray-600 leading-tight
              ${isScrolled ? "text-xs hidden md:block" : "text-xs md:text-sm"}
            `, children: "\u30DD\u30FC\u30BF\u30EB" }, void 0, false, {
          fileName: "app/components/Header.tsx",
          lineNumber: 92,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Header.tsx",
        lineNumber: 82,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Header.tsx",
      lineNumber: 75,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "flex space-x-3 md:space-x-6", children: navItems.map((item, index) => item.isSection ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => handleSectionClick(item.href), className: `
                  relative text-gray-700 hover:text-blue-600 transition-all duration-300
                  font-medium py-2 px-2 md:px-3 group text-xs md:text-sm flex items-center
                  ${isScrolled ? "text-gray-800" : "text-gray-700"}
                `, style: {
      animationDelay: `${index * 0.1}s`
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "material-icons text-sm md:text-base mr-1 md:mr-1.5", children: item.icon }, void 0, false, {
        fileName: "app/components/Header.tsx",
        lineNumber: 110,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "hidden sm:inline", children: item.name }, void 0, false, {
        fileName: "app/components/Header.tsx",
        lineNumber: 111,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `
                  absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400
                  transition-all duration-300 w-0 group-hover:w-full
                ` }, void 0, false, {
        fileName: "app/components/Header.tsx",
        lineNumber: 112,
        columnNumber: 17
      }, this)
    ] }, item.name, true, {
      fileName: "app/components/Header.tsx",
      lineNumber: 103,
      columnNumber: 59
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: item.href, className: `
                  relative text-gray-700 hover:text-blue-600 transition-all duration-300
                  font-medium py-2 px-2 md:px-3 group text-xs md:text-sm flex items-center
                  ${isScrolled ? "text-gray-800" : "text-gray-700"}
                  ${location.pathname === item.href ? "text-blue-600" : ""}
                `, style: {
      animationDelay: `${index * 0.1}s`
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "material-icons text-sm md:text-base mr-1 md:mr-1.5", children: item.icon }, void 0, false, {
        fileName: "app/components/Header.tsx",
        lineNumber: 124,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "hidden sm:inline", children: item.name }, void 0, false, {
        fileName: "app/components/Header.tsx",
        lineNumber: 125,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `
                  absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400
                  transition-all duration-300
                  ${location.pathname === item.href ? "w-full" : "w-0 group-hover:w-full"}
                ` }, void 0, false, {
        fileName: "app/components/Header.tsx",
        lineNumber: 126,
        columnNumber: 17
      }, this)
    ] }, item.name, true, {
      fileName: "app/components/Header.tsx",
      lineNumber: 116,
      columnNumber: 27
    }, this)) }, void 0, false, {
      fileName: "app/components/Header.tsx",
      lineNumber: 102,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Header.tsx",
    lineNumber: 69,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Header.tsx",
    lineNumber: 68,
    columnNumber: 10
  }, this);
}
_s(Header, "yh2qMW6STe/jFzV/bMwmIXRJu3w=", false, function() {
  return [useLocation];
});
_c = Header;
var _c;
$RefreshReg$(_c, "Header");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Footer.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Footer.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Footer.tsx"
  );
  import.meta.hot.lastModified = "1758379214018.7139";
}
function Footer() {
  const footerLinks = [{
    name: "\u30DB\u30FC\u30E0",
    href: "/"
  }, {
    name: "\u7AF6\u6280\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB",
    href: "/events"
  }, {
    name: "\u30C8\u30FC\u30CA\u30E1\u30F3\u30C8\u8868",
    href: "/tournaments"
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("footer", { className: "bg-slate-900 text-white mt-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "py-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid md:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center space-x-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "material-icons text-3xl text-blue-400", children: "sports" }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 42,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-xl font-bold text-white", children: "\u4F53\u80B2\u796D\u30DD\u30FC\u30BF\u30EB" }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 43,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 41,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-slate-300 text-sm leading-relaxed", children: "\u5B66\u6821\u306E\u4F53\u80B2\u796D\u306B\u95A2\u3059\u308B\u5168\u3066\u306E\u60C5\u5831\u3092\u304A\u5C4A\u3051\u3057\u307E\u3059\u3002\u7AF6\u6280\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB\u304B\u3089\u30C8\u30FC\u30CA\u30E1\u30F3\u30C8\u7D50\u679C\u307E\u3067\u3001\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u3067\u66F4\u65B0\u4E2D\u3067\u3059\u3002" }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 45,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 40,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h4", { className: "text-lg font-semibold text-white border-b border-slate-700 pb-2", children: "\u30B5\u30A4\u30C8\u30CA\u30D3\u30B2\u30FC\u30B7\u30E7\u30F3" }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 52,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("nav", { className: "space-y-3", children: footerLinks.map((link) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: link.href, className: "flex items-center text-slate-300 hover:text-blue-400 transition-colors duration-300 group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "material-icons text-sm mr-2 group-hover:translate-x-1 transition-transform duration-300", children: "chevron_right" }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 57,
            columnNumber: 21
          }, this),
          link.name
        ] }, link.name, true, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 56,
          columnNumber: 42
        }, this)) }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 55,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 51,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 37,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "border-t border-slate-700 mt-8 pt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-sm text-slate-400", children: "\xA9 2024 \u4F53\u80B2\u796D\u30DD\u30FC\u30BF\u30EB. All rights reserved." }, void 0, false, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 69,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center space-x-4 text-xs text-slate-500", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: "\u6700\u7D42\u66F4\u65B0: 2024\u5E7412\u6708" }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 73,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: "\u2022" }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 74,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: "\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u66F4\u65B0\u4E2D" }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 75,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 72,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 68,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 67,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 35,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 34,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 33,
    columnNumber: 10
  }, this);
}
_c2 = Footer;
var _c2;
$RefreshReg$(_c2, "Footer");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Layout.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Layout.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Layout.tsx"
  );
  import.meta.hot.lastModified = "1758378454522.224";
}
function Layout({
  children,
  title = "\u4F53\u80B2\u796D\u30DD\u30FC\u30BF\u30EB"
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "min-h-screen bg-gradient-to-br from-sky-100 via-blue-50 to-cyan-100 flex flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Header, {}, void 0, false, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("main", { className: "flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "space-y-8", children: [
      title && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: "text-4xl font-bold text-gray-900 tracking-tight", children: title }, void 0, false, {
        fileName: "app/components/Layout.tsx",
        lineNumber: 32,
        columnNumber: 21
      }, this),
      children
    ] }, void 0, true, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Footer, {}, void 0, false, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
}
_c3 = Layout;
var _c3;
$RefreshReg$(_c3, "Layout");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Layout
};
//# sourceMappingURL=/build/_shared/chunk-JTW6BXBA.js.map
