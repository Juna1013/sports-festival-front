import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Layout
} from "/build/_shared/chunk-33KTQ6TO.js";
import {
  Link,
  useLoaderData
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

// app/routes/tournaments.$eventId.tsx
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/tournaments.$eventId.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/tournaments.$eventId.tsx"
  );
  import.meta.hot.lastModified = "1758377427948.5767";
}
function TournamentPage() {
  _s();
  const {
    tournamentData
  } = useLoaderData();
  const {
    event,
    tournaments
  } = tournamentData;
  const getTeamColor = (team) => {
    const colors = {
      "\u8D64\u7D44": "bg-red-100 text-red-800 border-red-300",
      "\u9752\u7D44": "bg-blue-100 text-blue-800 border-blue-300",
      "\u9EC4\u7D44": "bg-yellow-100 text-yellow-800 border-yellow-300",
      "\u7DD1\u7D44": "bg-green-100 text-green-800 border-green-300"
    };
    return colors[team] || "bg-gray-100 text-gray-800 border-gray-300";
  };
  const renderMatch = (tournament) => {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white/80 backdrop-blur-sm border border-white/20 rounded-lg p-4 hover:shadow-lg hover:bg-white/90 transition-all duration-300", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm font-medium text-gray-600 mb-3", children: tournament.round }, void 0, false, {
        fileName: "app/routes/tournaments.$eventId.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `px-3 py-2 rounded border ${getTeamColor(tournament.team_a)} ${tournament.winner === tournament.team_a ? "ring-2 ring-yellow-400" : ""}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-medium", children: tournament.team_a }, void 0, false, {
            fileName: "app/routes/tournaments.$eventId.tsx",
            lineNumber: 74,
            columnNumber: 15
          }, this),
          tournament.winner === tournament.team_a && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "material-icons text-yellow-600", children: "emoji_events" }, void 0, false, {
            fileName: "app/routes/tournaments.$eventId.tsx",
            lineNumber: 75,
            columnNumber: 59
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/tournaments.$eventId.tsx",
          lineNumber: 73,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/tournaments.$eventId.tsx",
          lineNumber: 72,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center text-gray-400 text-sm", children: "VS" }, void 0, false, {
          fileName: "app/routes/tournaments.$eventId.tsx",
          lineNumber: 79,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `px-3 py-2 rounded border ${getTeamColor(tournament.team_b)} ${tournament.winner === tournament.team_b ? "ring-2 ring-yellow-400" : ""}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-medium", children: tournament.team_b }, void 0, false, {
            fileName: "app/routes/tournaments.$eventId.tsx",
            lineNumber: 83,
            columnNumber: 15
          }, this),
          tournament.winner === tournament.team_b && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "material-icons text-yellow-600", children: "emoji_events" }, void 0, false, {
            fileName: "app/routes/tournaments.$eventId.tsx",
            lineNumber: 84,
            columnNumber: 59
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/tournaments.$eventId.tsx",
          lineNumber: 82,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/tournaments.$eventId.tsx",
          lineNumber: 81,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/tournaments.$eventId.tsx",
        lineNumber: 71,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3 text-center", children: tournament.winner ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm text-green-600 font-medium", children: [
        "\u52DD\u8005: ",
        tournament.winner
      ] }, void 0, true, {
        fileName: "app/routes/tournaments.$eventId.tsx",
        lineNumber: 90,
        columnNumber: 32
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm text-gray-500", children: "\u672A\u6C7A\u5B9A" }, void 0, false, {
        fileName: "app/routes/tournaments.$eventId.tsx",
        lineNumber: 92,
        columnNumber: 23
      }, this) }, void 0, false, {
        fileName: "app/routes/tournaments.$eventId.tsx",
        lineNumber: 89,
        columnNumber: 9
      }, this)
    ] }, tournament.id, true, {
      fileName: "app/routes/tournaments.$eventId.tsx",
      lineNumber: 66,
      columnNumber: 12
    }, this);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { title: `${event.name} - \u30C8\u30FC\u30CA\u30E1\u30F3\u30C8\u8868`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/events", className: "text-blue-600 hover:text-blue-800 text-sm hover:underline transition-colors", children: "\u2190 \u7AF6\u6280\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB\u306B\u623B\u308B" }, void 0, false, {
      fileName: "app/routes/tournaments.$eventId.tsx",
      lineNumber: 100,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/tournaments.$eventId.tsx",
      lineNumber: 99,
      columnNumber: 7
    }, this),
    tournaments.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white/80 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-center shadow-md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-700 text-sm", children: "\u3053\u306E\u7AF6\u6280\u306E\u30C8\u30FC\u30CA\u30E1\u30F3\u30C8\u60C5\u5831\u306F\u3042\u308A\u307E\u305B\u3093\u3002" }, void 0, false, {
      fileName: "app/routes/tournaments.$eventId.tsx",
      lineNumber: 106,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/tournaments.$eventId.tsx",
      lineNumber: 105,
      columnNumber: 35
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: tournaments.map(renderMatch) }, void 0, false, {
      fileName: "app/routes/tournaments.$eventId.tsx",
      lineNumber: 107,
      columnNumber: 18
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white/80 backdrop-blur-sm border border-white/20 rounded-lg p-6 shadow-md", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold text-gray-900 mb-4", children: "\u8AAC\u660E" }, void 0, false, {
        fileName: "app/routes/tournaments.$eventId.tsx",
        lineNumber: 112,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "flex items-start text-sm text-gray-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "material-icons text-lg mr-3 mt-0.5 text-blue-500", children: "emoji_events" }, void 0, false, {
            fileName: "app/routes/tournaments.$eventId.tsx",
            lineNumber: 115,
            columnNumber: 13
          }, this),
          "\u30C8\u30ED\u30D5\u30A3\u30FC\u30DE\u30FC\u30AF\u306F\u52DD\u8005\u3092\u8868\u3057\u307E\u3059"
        ] }, void 0, true, {
          fileName: "app/routes/tournaments.$eventId.tsx",
          lineNumber: 114,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "flex items-start text-sm text-gray-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "material-icons text-lg mr-3 mt-0.5 text-blue-500", children: "schedule" }, void 0, false, {
            fileName: "app/routes/tournaments.$eventId.tsx",
            lineNumber: 119,
            columnNumber: 13
          }, this),
          "\u300C\u672A\u6C7A\u5B9A\u300D\u306F\u4ECA\u5F8C\u8A66\u5408\u304C\u884C\u308F\u308C\u308B\u4E88\u5B9A\u3067\u3059"
        ] }, void 0, true, {
          fileName: "app/routes/tournaments.$eventId.tsx",
          lineNumber: 118,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "flex items-start text-sm text-gray-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "material-icons text-lg mr-3 mt-0.5 text-blue-500", children: "update" }, void 0, false, {
            fileName: "app/routes/tournaments.$eventId.tsx",
            lineNumber: 123,
            columnNumber: 13
          }, this),
          "\u7D50\u679C\u306F\u968F\u6642\u66F4\u65B0\u3055\u308C\u307E\u3059"
        ] }, void 0, true, {
          fileName: "app/routes/tournaments.$eventId.tsx",
          lineNumber: 122,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/tournaments.$eventId.tsx",
        lineNumber: 113,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/tournaments.$eventId.tsx",
      lineNumber: 111,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/tournaments.$eventId.tsx",
    lineNumber: 98,
    columnNumber: 10
  }, this);
}
_s(TournamentPage, "aKIHuxp7UK+P2lsClJg6EOyKDzU=", false, function() {
  return [useLoaderData];
});
_c = TournamentPage;
var _c;
$RefreshReg$(_c, "TournamentPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  TournamentPage as default
};
//# sourceMappingURL=/build/routes/tournaments.$eventId-WGC4HZZD.js.map
