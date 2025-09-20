import {
  Layout
} from "/build/_shared/chunk-JTW6BXBA.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-S3VR4VJ3.js";
import {
  createHotContext
} from "/build/_shared/chunk-WMDNZPIO.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/_index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.tsx"
  );
  import.meta.hot.lastModified = "1758409688211.1187";
}
function Index() {
  _s();
  const {
    ballSports,
    trackEvents
  } = useLoaderData();
  const getSportIcon = (name) => {
    const iconMap = {
      "\u30D0\u30B9\u30B1\u30C3\u30C8\u30DC\u30FC\u30EB": "sports_basketball",
      "\u30D0\u30EC\u30FC\u30DC\u30FC\u30EB": "sports_volleyball",
      "\u30BD\u30D5\u30C8\u30DC\u30FC\u30EB": "sports_baseball",
      "\u30B5\u30C3\u30AB\u30FC": "sports_soccer",
      "\u30BD\u30D5\u30C8\u30C6\u30CB\u30B9": "sports_tennis",
      "\u969C\u5BB3\u7269\u7AF6\u8D70": "directions_run",
      "\u5927\u30EA\u30EC\u30FC": "group_work",
      "\u501F\u308A\u4EBA\u7AF6\u4E89": "search",
      "\u25CB\u4EBA\xD7\u811A": "group",
      "\u5927\u7DB1\u5F15\u304D": "fitness_center",
      "\u30D1\u30F3\u98DF\u3044\u7AF6\u4E89": "restaurant"
    };
    return iconMap[name] || "sports";
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { title: "", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative w-full h-48 sm:h-56 md:h-72 lg:h-80 xl:h-96 mb-6 md:mb-8 rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-gradient-to-br from-blue-400 via-sky-300 to-cyan-200 flex items-center justify-center px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center text-white max-w-md", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "material-icons text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-2 md:mb-4 opacity-80", children: "school" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 70,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-base sm:text-lg md:text-xl lg:text-2xl font-semibold opacity-90 mb-1 md:mb-2", children: "\u6821\u5EAD\u306E\u5199\u771F\u304C\u3053\u3053\u306B\u5165\u308A\u307E\u3059" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 73,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs sm:text-sm md:text-base opacity-70 px-2", children: "\u753B\u50CF\u3092\u8FFD\u52A0\u3059\u308B\u3068\u3053\u306E\u30D7\u30EC\u30FC\u30B9\u30DB\u30EB\u30C0\u30FC\u304C\u7F6E\u304D\u63DB\u308F\u308A\u307E\u3059" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 76,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 69,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 68,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 66,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full mb-6 md:mb-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white/90 backdrop-blur-sm border border-white/30 rounded-xl p-4 md:p-6 shadow-xl hover:shadow-2xl hover:bg-white hover:-translate-y-1 transition-all duration-300 transform", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "flex items-center text-lg md:text-xl font-semibold text-gray-900 mb-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "material-icons text-xl md:text-2xl mr-2 md:mr-3 text-blue-600 drop-shadow-sm", children: "schedule" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 104,
          columnNumber: 13
        }, this),
        "\u7AF6\u6280\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB"
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 103,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-700 mb-4 md:mb-6 text-xs md:text-sm leading-relaxed", children: "\u5404\u7AF6\u6280\u306E\u958B\u59CB\u6642\u9593\u3068\u958B\u50AC\u5834\u6240\u3092\u78BA\u8A8D\u3067\u304D\u307E\u3059\u3002\u4E0B\u8A18\u306E\u7403\u6280\u30FB\u7AF6\u6280\u30BF\u30A4\u30EB\u304B\u3089\u3082\u76F4\u63A5\u30C8\u30FC\u30CA\u30E1\u30F3\u30C8\u8868\u306B\u30A2\u30AF\u30BB\u30B9\u3067\u304D\u307E\u3059\u3002" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 107,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/events", className: "inline-flex items-center px-3 md:px-4 py-2 text-xs md:text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl", children: "\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB\u3092\u898B\u308B" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 110,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 102,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 101,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { "data-section": "sports-ball", className: "bg-white/90 backdrop-blur-sm border border-white/30 rounded-xl p-6 shadow-xl mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "flex items-center text-xl font-semibold text-gray-900 mb-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "material-icons text-2xl mr-3 text-amber-600 drop-shadow-sm", children: "sports_basketball" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 119,
          columnNumber: 11
        }, this),
        "\u7403\u6280\u7A2E\u76EE"
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 118,
        columnNumber: 9
      }, this),
      ballSports.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center text-gray-500 py-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "\u7403\u6280\u7A2E\u76EE\u306E\u60C5\u5831\u3092\u8AAD\u307F\u8FBC\u307F\u4E2D..." }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 124,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 123,
        columnNumber: 36
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5", children: ballSports.map((sport) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/tournaments/${sport.id}`, className: "group", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white border border-gray-200 rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group-hover:border-amber-300", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 group-hover:from-amber-200 group-hover:to-orange-200 transition-all duration-300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `material-icons text-3xl text-amber-600 group-hover:text-amber-700 group-hover:scale-110 transition-all duration-300`, children: getSportIcon(sport.name) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 130,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 129,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center space-y-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-semibold text-gray-900 text-sm md:text-base group-hover:text-amber-700 transition-colors duration-300", children: sport.name }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 137,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs text-gray-600 space-y-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
              "\u{1F550} ",
              new Date(sport.schedule_time).toLocaleTimeString("ja-JP", {
                hour: "2-digit",
                minute: "2-digit"
              })
            ] }, void 0, true, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 141,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
              "\u{1F4CD} ",
              sport.location
            ] }, void 0, true, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 145,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 140,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs text-amber-600 font-medium group-hover:text-amber-700", children: "\u30C8\u30FC\u30CA\u30E1\u30F3\u30C8\u8868 \u2192" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 148,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 147,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 136,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 127,
        columnNumber: 17
      }, this) }, sport.id, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 126,
        columnNumber: 38
      }, this)) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 125,
        columnNumber: 20
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 117,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { "data-section": "sports-track", className: "bg-white/90 backdrop-blur-sm border border-white/30 rounded-xl p-6 shadow-xl mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "flex items-center text-xl font-semibold text-gray-900 mb-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "material-icons text-2xl mr-3 text-green-600 drop-shadow-sm", children: "directions_run" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 161,
          columnNumber: 11
        }, this),
        "\u7AF6\u6280\u7A2E\u76EE"
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 160,
        columnNumber: 9
      }, this),
      trackEvents.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center text-gray-500 py-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "\u7AF6\u6280\u7A2E\u76EE\u306E\u60C5\u5831\u3092\u8AAD\u307F\u8FBC\u307F\u4E2D..." }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 166,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 165,
        columnNumber: 37
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6", children: trackEvents.map((sport) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/tournaments/${sport.id}`, className: "group", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white border border-gray-200 rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group-hover:border-green-300", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-100 to-emerald-100 group-hover:from-green-200 group-hover:to-emerald-200 transition-all duration-300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `material-icons text-3xl text-green-600 group-hover:text-green-700 group-hover:scale-110 transition-all duration-300`, children: getSportIcon(sport.name) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 172,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 171,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center space-y-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-semibold text-gray-900 text-sm md:text-base group-hover:text-green-700 transition-colors duration-300", children: sport.name }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 179,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs text-gray-600 space-y-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
              "\u{1F550} ",
              new Date(sport.schedule_time).toLocaleTimeString("ja-JP", {
                hour: "2-digit",
                minute: "2-digit"
              })
            ] }, void 0, true, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 183,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
              "\u{1F4CD} ",
              sport.location
            ] }, void 0, true, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 187,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 182,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs text-green-600 font-medium group-hover:text-green-700", children: "\u30C8\u30FC\u30CA\u30E1\u30F3\u30C8\u8868 \u2192" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 190,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 189,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 178,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 169,
        columnNumber: 17
      }, this) }, sport.id, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 168,
        columnNumber: 39
      }, this)) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 167,
        columnNumber: 20
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 159,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { "data-section": "access", className: "bg-white/90 backdrop-blur-sm border border-white/30 rounded-xl p-4 md:p-6 shadow-xl", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "flex items-center text-lg md:text-xl font-semibold text-gray-900 mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "material-icons text-xl md:text-2xl mr-2 md:mr-3 text-red-600 drop-shadow-sm", children: "location_on" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 202,
          columnNumber: 11
        }, this),
        "\u30A2\u30AF\u30BB\u30B9\u30FB\u4F1A\u5834\u6848\u5185"
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 201,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4 rounded-lg overflow-hidden shadow-md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-48 sm:h-56 md:h-64 bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center border-2 border-dashed border-gray-300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center text-gray-600 px-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "material-icons text-3xl md:text-4xl mb-2 text-gray-500", children: "map" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 211,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs md:text-sm font-medium", children: "Google Maps \u304C\u3053\u3053\u306B\u8868\u793A\u3055\u308C\u307E\u3059" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 212,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs opacity-70 mt-1 hidden sm:block", children: "\u5B9F\u969B\u306E\u30DE\u30C3\u30D7\u3092\u57CB\u3081\u8FBC\u3080\u969B\u306F\u3053\u306E\u30D7\u30EC\u30FC\u30B9\u30DB\u30EB\u30C0\u30FC\u3092\u7F6E\u304D\u63DB\u3048\u3066\u304F\u3060\u3055\u3044" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 213,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 210,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 209,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 207,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-3 md:space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start text-xs md:text-sm text-gray-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "material-icons text-base md:text-lg mr-2 md:mr-3 mt-0.5 text-red-500 flex-shrink-0", children: "directions_transit" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 235,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-medium", children: "\u96FB\u8ECA\u3067\u304A\u8D8A\u3057\u306E\u5834\u5408" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 237,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs text-gray-600 mt-1", children: "\u25CB\u25CB\u99C5\u304B\u3089\u5F92\u6B6910\u5206" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 238,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 236,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 234,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start text-xs md:text-sm text-gray-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "material-icons text-base md:text-lg mr-2 md:mr-3 mt-0.5 text-blue-500 flex-shrink-0", children: "directions_car" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 242,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-medium", children: "\u304A\u8ECA\u3067\u304A\u8D8A\u3057\u306E\u5834\u5408" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 244,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs text-gray-600 mt-1", children: "\u6821\u5185\u99D0\u8ECA\u5834\u3092\u3054\u5229\u7528\u304F\u3060\u3055\u3044" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 245,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 243,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 241,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start text-xs md:text-sm text-gray-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "material-icons text-base md:text-lg mr-2 md:mr-3 mt-0.5 text-green-500 flex-shrink-0", children: "info" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 249,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-medium", children: "\u6CE8\u610F\u4E8B\u9805" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 251,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs text-gray-600 mt-1", children: "\u5F53\u65E5\u306F\u6DF7\u96D1\u304C\u4E88\u60F3\u3055\u308C\u307E\u3059\u3002\u516C\u5171\u4EA4\u901A\u6A5F\u95A2\u306E\u3054\u5229\u7528\u3092\u304A\u52E7\u3081\u3057\u307E\u3059" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 252,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 250,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 248,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 233,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 200,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 64,
    columnNumber: 10
  }, this);
}
_s(Index, "TxHnl8Lai7bOEMJNwCK0Fvq7XcE=", false, function() {
  return [useLoaderData];
});
_c = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default
};
//# sourceMappingURL=/build/routes/_index-GW4DF5OB.js.map
