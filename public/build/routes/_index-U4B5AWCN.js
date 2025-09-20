import {
  Layout
} from "/build/_shared/chunk-KNFBFO7B.js";
import {
  Link
} from "/build/_shared/chunk-6XMTRBRU.js";
import {
  createHotContext
} from "/build/_shared/chunk-KMHXRZOJ.js";
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
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.tsx"
  );
  import.meta.hot.lastModified = "1758379310514.6692";
}
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { title: "", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative w-full h-48 sm:h-56 md:h-72 lg:h-80 xl:h-96 mb-6 md:mb-8 rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-gradient-to-br from-blue-400 via-sky-300 to-cyan-200 flex items-center justify-center px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center text-white max-w-md", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "material-icons text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-2 md:mb-4 opacity-80", children: "school" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 30,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-base sm:text-lg md:text-xl lg:text-2xl font-semibold opacity-90 mb-1 md:mb-2", children: "\u6821\u5EAD\u306E\u5199\u771F\u304C\u3053\u3053\u306B\u5165\u308A\u307E\u3059" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 33,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs sm:text-sm md:text-base opacity-70 px-2", children: "\u753B\u50CF\u3092\u8FFD\u52A0\u3059\u308B\u3068\u3053\u306E\u30D7\u30EC\u30FC\u30B9\u30DB\u30EB\u30C0\u30FC\u304C\u7F6E\u304D\u63DB\u308F\u308A\u307E\u3059" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 36,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 29,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 28,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full mb-6 md:mb-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white/90 backdrop-blur-sm border border-white/30 rounded-xl p-4 md:p-6 shadow-xl hover:shadow-2xl hover:bg-white hover:-translate-y-1 transition-all duration-300 transform", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "flex items-center text-lg md:text-xl font-semibold text-gray-900 mb-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "material-icons text-xl md:text-2xl mr-2 md:mr-3 text-blue-600 drop-shadow-sm", children: "schedule" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 64,
          columnNumber: 13
        }, this),
        "\u7AF6\u6280\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB"
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 63,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-700 mb-4 md:mb-6 text-xs md:text-sm leading-relaxed", children: "\u5404\u7AF6\u6280\u306E\u958B\u59CB\u6642\u9593\u3068\u958B\u50AC\u5834\u6240\u3092\u78BA\u8A8D\u3067\u304D\u307E\u3059\u3002" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 67,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/events", className: "inline-flex items-center px-3 md:px-4 py-2 text-xs md:text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl", children: "\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB\u3092\u898B\u308B" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 70,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 62,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 61,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { "data-section": "sports-ball", className: "bg-white/90 backdrop-blur-sm border border-white/30 rounded-xl p-6 shadow-xl mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "flex items-center text-xl font-semibold text-gray-900 mb-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "material-icons text-2xl mr-3 text-amber-600 drop-shadow-sm", children: "sports_basketball" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 79,
          columnNumber: 11
        }, this),
        "\u7403\u6280\u7A2E\u76EE"
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 78,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-3 md:gap-4 scroll-container auto-scroll", children: [...Array(2)].map((_, arrayIndex) => [{
        name: "\u30D0\u30B9\u30B1\u30C3\u30C8\u30DC\u30FC\u30EB",
        description: "\u30C1\u30FC\u30E0\u6226\u3067\u306E\u71B1\u3044\u6226\u3044\u304C\u7E70\u308A\u5E83\u3052\u3089\u308C\u307E\u3059",
        icon: "sports_basketball"
      }, {
        name: "\u30B5\u30C3\u30AB\u30FC",
        description: "\u30B0\u30E9\u30A6\u30F3\u30C9\u3092\u99C6\u3051\u629C\u3051\u308B\u767D\u71B1\u3057\u305F\u8A66\u5408",
        icon: "sports_soccer"
      }, {
        name: "\u30D0\u30EC\u30FC\u30DC\u30FC\u30EB",
        description: "\u30CD\u30C3\u30C8\u3092\u631F\u3093\u3067\u306E\u30D1\u30EF\u30D5\u30EB\u306A\u653B\u9632",
        icon: "sports_volleyball"
      }, {
        name: "\u30C9\u30C3\u30B8\u30DC\u30FC\u30EB",
        description: "\u4FCA\u654F\u6027\u3068\u6226\u7565\u304C\u6C42\u3081\u3089\u308C\u308B\u4EBA\u6C17\u7AF6\u6280",
        icon: "sports_handball"
      }, {
        name: "\u30C6\u30CB\u30B9",
        description: "\u500B\u4EBA\u6226\u3067\u306E\u6280\u8853\u3068\u96C6\u4E2D\u529B\u306E\u52DD\u8CA0",
        icon: "sports_tennis"
      }].map((sport, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-none w-56 sm:w-64 md:w-72", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white border border-gray-200 rounded-xl p-3 md:p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative w-full h-32 sm:h-36 md:h-40 mb-3 md:mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-blue-100 to-cyan-100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 flex items-center justify-center border-2 border-dashed border-gray-300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center text-gray-500", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `material-icons text-3xl md:text-4xl mb-1 md:mb-2`, children: sport.icon }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 114,
            columnNumber: 27
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs font-medium", children: [
            sport.name,
            "\u306E\u5199\u771F"
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 115,
            columnNumber: 27
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs opacity-70 hidden sm:block", children: "\u753B\u50CF\u8FFD\u52A0\u4E88\u5B9A" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 116,
            columnNumber: 27
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 113,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 112,
          columnNumber: 23
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 111,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-semibold text-gray-900 text-base md:text-lg", children: sport.name }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 132,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs md:text-sm text-gray-600 leading-relaxed line-clamp-2", children: sport.description }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 133,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between pt-1 md:pt-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs text-blue-600 font-medium", children: "\u8A73\u7D30\u3092\u898B\u308B \u2192" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 135,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `material-icons text-base md:text-lg text-gray-400`, children: sport.icon }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 136,
              columnNumber: 25
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 134,
            columnNumber: 23
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 131,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 108,
        columnNumber: 19
      }, this) }, `${sport.name}-${arrayIndex}-${index}`, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 107,
        columnNumber: 36
      }, this))) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 85,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 83,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 77,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { "data-section": "sports-track", className: "bg-white/90 backdrop-blur-sm border border-white/30 rounded-xl p-6 shadow-xl mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "flex items-center text-xl font-semibold text-gray-900 mb-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "material-icons text-2xl mr-3 text-green-600 drop-shadow-sm", children: "directions_run" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 148,
          columnNumber: 11
        }, this),
        "\u7AF6\u6280\u7A2E\u76EE"
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 147,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-3 md:gap-4 scroll-container auto-scroll", children: [...Array(2)].map((_, arrayIndex) => [{
        name: "100m\u8D70",
        description: "\u77ED\u8DDD\u96E2\u8D70\u306E\u738B\u9053\u3001\u77AC\u767A\u529B\u3068\u30B9\u30D4\u30FC\u30C9\u306E\u7AF6\u6280",
        icon: "directions_run"
      }, {
        name: "\u30EA\u30EC\u30FC",
        description: "\u30C1\u30FC\u30E0\u30EF\u30FC\u30AF\u304C\u52DD\u8CA0\u3092\u5206\u3051\u308B\u56E3\u4F53\u7AF6\u6280",
        icon: "group_work"
      }, {
        name: "\u8D70\u308A\u5E45\u8DF3\u3073",
        description: "\u52A9\u8D70\u304B\u3089\u306E\u30B8\u30E3\u30F3\u30D7\u3067\u8DDD\u96E2\u3092\u7AF6\u3046",
        icon: "sports"
      }, {
        name: "\u7DB1\u5F15\u304D",
        description: "\u529B\u3068\u606F\u3092\u5408\u308F\u305B\u305F\u30C1\u30FC\u30E0\u6226",
        icon: "fitness_center"
      }, {
        name: "\u9A0E\u99AC\u6226",
        description: "\u4F1D\u7D71\u7684\u306A\u4F53\u80B2\u796D\u306E\u82B1\u5F62\u7AF6\u6280",
        icon: "groups"
      }].map((sport, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-none w-56 sm:w-64 md:w-72", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white border border-gray-200 rounded-xl p-3 md:p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative w-full h-32 sm:h-36 md:h-40 mb-3 md:mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-green-100 to-emerald-100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 flex items-center justify-center border-2 border-dashed border-gray-300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center text-gray-500", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `material-icons text-3xl md:text-4xl mb-1 md:mb-2`, children: sport.icon }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 183,
            columnNumber: 27
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs font-medium", children: [
            sport.name,
            "\u306E\u5199\u771F"
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 184,
            columnNumber: 27
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs opacity-70 hidden sm:block", children: "\u753B\u50CF\u8FFD\u52A0\u4E88\u5B9A" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 185,
            columnNumber: 27
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 182,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 181,
          columnNumber: 23
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 180,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-semibold text-gray-900 text-base md:text-lg", children: sport.name }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 201,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs md:text-sm text-gray-600 leading-relaxed line-clamp-2", children: sport.description }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 202,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between pt-1 md:pt-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs text-green-600 font-medium", children: "\u8A73\u7D30\u3092\u898B\u308B \u2192" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 204,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `material-icons text-base md:text-lg text-gray-400`, children: sport.icon }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 205,
              columnNumber: 25
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 203,
            columnNumber: 23
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 200,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 177,
        columnNumber: 19
      }, this) }, `${sport.name}-${arrayIndex}-${index}`, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 176,
        columnNumber: 36
      }, this))) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 154,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 152,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 146,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { "data-section": "access", className: "bg-white/90 backdrop-blur-sm border border-white/30 rounded-xl p-4 md:p-6 shadow-xl", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "flex items-center text-lg md:text-xl font-semibold text-gray-900 mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "material-icons text-xl md:text-2xl mr-2 md:mr-3 text-red-600 drop-shadow-sm", children: "location_on" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 216,
          columnNumber: 11
        }, this),
        "\u30A2\u30AF\u30BB\u30B9\u30FB\u4F1A\u5834\u6848\u5185"
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 215,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4 rounded-lg overflow-hidden shadow-md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-48 sm:h-56 md:h-64 bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center border-2 border-dashed border-gray-300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center text-gray-600 px-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "material-icons text-3xl md:text-4xl mb-2 text-gray-500", children: "map" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 225,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs md:text-sm font-medium", children: "Google Maps \u304C\u3053\u3053\u306B\u8868\u793A\u3055\u308C\u307E\u3059" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 226,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs opacity-70 mt-1 hidden sm:block", children: "\u5B9F\u969B\u306E\u30DE\u30C3\u30D7\u3092\u57CB\u3081\u8FBC\u3080\u969B\u306F\u3053\u306E\u30D7\u30EC\u30FC\u30B9\u30DB\u30EB\u30C0\u30FC\u3092\u7F6E\u304D\u63DB\u3048\u3066\u304F\u3060\u3055\u3044" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 227,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 224,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 223,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 221,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-3 md:space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start text-xs md:text-sm text-gray-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "material-icons text-base md:text-lg mr-2 md:mr-3 mt-0.5 text-red-500 flex-shrink-0", children: "directions_transit" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 249,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-medium", children: "\u96FB\u8ECA\u3067\u304A\u8D8A\u3057\u306E\u5834\u5408" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 251,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs text-gray-600 mt-1", children: "\u25CB\u25CB\u99C5\u304B\u3089\u5F92\u6B6910\u5206" }, void 0, false, {
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
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start text-xs md:text-sm text-gray-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "material-icons text-base md:text-lg mr-2 md:mr-3 mt-0.5 text-blue-500 flex-shrink-0", children: "directions_car" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 256,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-medium", children: "\u304A\u8ECA\u3067\u304A\u8D8A\u3057\u306E\u5834\u5408" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 258,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs text-gray-600 mt-1", children: "\u6821\u5185\u99D0\u8ECA\u5834\u3092\u3054\u5229\u7528\u304F\u3060\u3055\u3044" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 259,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 257,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 255,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start text-xs md:text-sm text-gray-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "material-icons text-base md:text-lg mr-2 md:mr-3 mt-0.5 text-green-500 flex-shrink-0", children: "info" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 263,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-medium", children: "\u6CE8\u610F\u4E8B\u9805" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 265,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs text-gray-600 mt-1", children: "\u5F53\u65E5\u306F\u6DF7\u96D1\u304C\u4E88\u60F3\u3055\u308C\u307E\u3059\u3002\u516C\u5171\u4EA4\u901A\u6A5F\u95A2\u306E\u3054\u5229\u7528\u3092\u304A\u52E7\u3081\u3057\u307E\u3059" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 266,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 264,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 262,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 247,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 214,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}
_c = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default
};
//# sourceMappingURL=/build/routes/_index-U4B5AWCN.js.map
