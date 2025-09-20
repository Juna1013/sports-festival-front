import {
  Layout
} from "/build/_shared/chunk-33KTQ6TO.js";
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
  import.meta.hot.lastModified = "1758377407174.0898";
}
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { title: "\u30DB\u30FC\u30E0", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid md:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white/80 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:shadow-lg hover:bg-white/90 transition-all duration-300", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "flex items-center text-xl font-semibold text-gray-900 mb-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "material-icons text-2xl mr-3 text-blue-600", children: "schedule" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 28,
            columnNumber: 13
          }, this),
          "\u7AF6\u6280\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB"
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 27,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-700 mb-6 text-sm leading-relaxed", children: "\u5404\u7AF6\u6280\u306E\u958B\u59CB\u6642\u9593\u3068\u958B\u50AC\u5834\u6240\u3092\u78BA\u8A8D\u3067\u304D\u307E\u3059\u3002" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 31,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/events", className: "inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors shadow-md", children: "\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB\u3092\u898B\u308B" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 34,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white/80 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:shadow-lg hover:bg-white/90 transition-all duration-300", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "flex items-center text-xl font-semibold text-gray-900 mb-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "material-icons text-2xl mr-3 text-amber-600", children: "emoji_events" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 41,
            columnNumber: 13
          }, this),
          "\u30C8\u30FC\u30CA\u30E1\u30F3\u30C8\u8868"
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 40,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-700 mb-6 text-sm leading-relaxed", children: "\u5404\u7AF6\u6280\u306E\u30C8\u30FC\u30CA\u30E1\u30F3\u30C8\u9032\u884C\u72B6\u6CC1\u3092\u78BA\u8A8D\u3067\u304D\u307E\u3059\u3002" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 44,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/events", className: "inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white/90 border border-gray-300 hover:bg-white rounded-md transition-colors shadow-md", children: "\u30C8\u30FC\u30CA\u30E1\u30F3\u30C8\u3092\u898B\u308B" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 47,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white/80 backdrop-blur-sm border border-white/20 rounded-lg p-6 shadow-md", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "flex items-center text-xl font-semibold text-gray-900 mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "material-icons text-2xl mr-3 text-green-600", children: "campaign" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 55,
          columnNumber: 11
        }, this),
        "\u304A\u77E5\u3089\u305B"
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "space-y-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "flex items-start text-sm text-gray-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "material-icons text-lg mr-3 mt-0.5 text-blue-500", children: "info" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 60,
            columnNumber: 13
          }, this),
          "\u96E8\u5929\u6642\u306E\u7AF6\u6280\u5909\u66F4\u306B\u3064\u3044\u3066\u306F\u3001\u5F53\u65E5\u671D\u306B\u767A\u8868\u3057\u307E\u3059"
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 59,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "flex items-start text-sm text-gray-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "material-icons text-lg mr-3 mt-0.5 text-blue-500", children: "update" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 64,
            columnNumber: 13
          }, this),
          "\u7AF6\u6280\u7D50\u679C\u306F\u968F\u6642\u66F4\u65B0\u3055\u308C\u307E\u3059"
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 63,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "flex items-start text-sm text-gray-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "material-icons text-lg mr-3 mt-0.5 text-blue-500", children: "groups" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 68,
            columnNumber: 13
          }, this),
          "\u5FDC\u63F4\u306F\u5404\u30C1\u30FC\u30E0\u30AB\u30E9\u30FC\u306E\u670D\u88C5\u3067\u304A\u9858\u3044\u3057\u307E\u3059"
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 67,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 53,
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
//# sourceMappingURL=/build/routes/_index-PZ2V5INQ.js.map
