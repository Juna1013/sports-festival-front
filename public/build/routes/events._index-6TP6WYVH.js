import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Layout
} from "/build/_shared/chunk-PPLTGSVC.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-FYBUHZEE.js";
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

// app/routes/events._index.tsx
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/events._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/events._index.tsx"
  );
  import.meta.hot.lastModified = "1758373735347.6558";
}
function EventsIndex() {
  _s();
  const {
    events
  } = useLoaderData();
  const formatDateTime = (dateTimeString) => {
    const date = new Date(dateTimeString);
    return {
      date: date.toLocaleDateString("ja-JP"),
      time: date.toLocaleTimeString("ja-JP", {
        hour: "2-digit",
        minute: "2-digit"
      })
    };
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { title: "\u7AF6\u6280\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB", children: events.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: "\u7AF6\u6280\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB\u306E\u53D6\u5F97\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002" }, void 0, false, {
    fileName: "app/routes/events._index.tsx",
    lineNumber: 56,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/routes/events._index.tsx",
    lineNumber: 55,
    columnNumber: 30
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "overflow-x-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "min-w-full divide-y divide-gray-200", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { className: "bg-gray-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "\u7AF6\u6280\u540D" }, void 0, false, {
        fileName: "app/routes/events._index.tsx",
        lineNumber: 62,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "\u65E5\u4ED8" }, void 0, false, {
        fileName: "app/routes/events._index.tsx",
        lineNumber: 65,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "\u6642\u9593" }, void 0, false, {
        fileName: "app/routes/events._index.tsx",
        lineNumber: 68,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "\u5834\u6240" }, void 0, false, {
        fileName: "app/routes/events._index.tsx",
        lineNumber: 71,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "\u30C8\u30FC\u30CA\u30E1\u30F3\u30C8" }, void 0, false, {
        fileName: "app/routes/events._index.tsx",
        lineNumber: 74,
        columnNumber: 19
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/events._index.tsx",
      lineNumber: 61,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/events._index.tsx",
      lineNumber: 60,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { className: "bg-white divide-y divide-gray-200", children: events.map((event) => {
      const {
        date,
        time
      } = formatDateTime(event.schedule_time);
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "hover:bg-gray-50", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900", children: event.name }, void 0, false, {
          fileName: "app/routes/events._index.tsx",
          lineNumber: 86,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: date }, void 0, false, {
          fileName: "app/routes/events._index.tsx",
          lineNumber: 89,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: time }, void 0, false, {
          fileName: "app/routes/events._index.tsx",
          lineNumber: 92,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: event.location }, void 0, false, {
          fileName: "app/routes/events._index.tsx",
          lineNumber: 95,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-blue-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/tournaments/${event.id}`, className: "hover:underline", children: "\u30C8\u30FC\u30CA\u30E1\u30F3\u30C8\u8868 \u2192" }, void 0, false, {
          fileName: "app/routes/events._index.tsx",
          lineNumber: 99,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/events._index.tsx",
          lineNumber: 98,
          columnNumber: 23
        }, this)
      ] }, event.id, true, {
        fileName: "app/routes/events._index.tsx",
        lineNumber: 85,
        columnNumber: 22
      }, this);
    }) }, void 0, false, {
      fileName: "app/routes/events._index.tsx",
      lineNumber: 79,
      columnNumber: 15
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/events._index.tsx",
    lineNumber: 59,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/events._index.tsx",
    lineNumber: 58,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/routes/events._index.tsx",
    lineNumber: 57,
    columnNumber: 18
  }, this) }, void 0, false, {
    fileName: "app/routes/events._index.tsx",
    lineNumber: 54,
    columnNumber: 10
  }, this);
}
_s(EventsIndex, "xTcuS98fsVcq20se00iLm8bDBmQ=", false, function() {
  return [useLoaderData];
});
_c = EventsIndex;
var _c;
$RefreshReg$(_c, "EventsIndex");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  EventsIndex as default
};
//# sourceMappingURL=/build/routes/events._index-6TP6WYVH.js.map
