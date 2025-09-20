var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = {};
__export(entry_server_node_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import * as isbotModule from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsx } from "react/jsx-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isBotRequest(request.headers.get("user-agent")) || remixContext.isSpaMode ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function isBotRequest(userAgent) {
  return userAgent ? "isbot" in isbotModule && typeof isbotModule.isbot == "function" ? isbotModule.isbot(userAgent) : "default" in isbotModule && typeof isbotModule.default == "function" ? isbotModule.default(userAgent) : !1 : !1;
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";

// app/tailwind.css?url
var tailwind_default = "/build/_assets/tailwind-EGIB4QOK.css?url";

// app/root.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var links = () => [
  { rel: "stylesheet", href: tailwind_default },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous"
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
  }
];
function App() {
  return /* @__PURE__ */ jsxs("html", { lang: "ja", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx2("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx2("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx2(Meta, {}),
      /* @__PURE__ */ jsx2(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { children: [
      /* @__PURE__ */ jsx2(Outlet, {}),
      /* @__PURE__ */ jsx2(ScrollRestoration, {}),
      /* @__PURE__ */ jsx2(Scripts, {}),
      /* @__PURE__ */ jsx2(LiveReload, {})
    ] })
  ] });
}

// app/routes/tournaments.$eventId.tsx
var tournaments_eventId_exports = {};
__export(tournaments_eventId_exports, {
  default: () => TournamentPage,
  loader: () => loader
});
import { json } from "@remix-run/node";
import { useLoaderData, Link as Link2 } from "@remix-run/react";

// app/components/Layout.tsx
import { Link } from "@remix-run/react";
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
function Layout({ children, title = "\u4F53\u80B2\u796D\u30DD\u30FC\u30BF\u30EB" }) {
  return /* @__PURE__ */ jsxs2("div", { className: "min-h-screen bg-gray-50", children: [
    /* @__PURE__ */ jsx3("header", { className: "bg-blue-600 text-white shadow-lg", children: /* @__PURE__ */ jsx3("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs2("div", { className: "flex justify-between items-center py-6", children: [
      /* @__PURE__ */ jsx3(Link, { to: "/", className: "text-2xl font-bold", children: "\u{1F3C3}\u200D\u2642\uFE0F \u4F53\u80B2\u796D\u30DD\u30FC\u30BF\u30EB" }),
      /* @__PURE__ */ jsxs2("nav", { className: "space-x-4", children: [
        /* @__PURE__ */ jsx3(Link, { to: "/", className: "hover:text-blue-200 transition duration-200", children: "\u30DB\u30FC\u30E0" }),
        /* @__PURE__ */ jsx3(Link, { to: "/events", className: "hover:text-blue-200 transition duration-200", children: "\u7AF6\u6280\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxs2("main", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [
      /* @__PURE__ */ jsx3("h1", { className: "text-3xl font-bold text-gray-900 mb-8", children: title }),
      children
    ] }),
    /* @__PURE__ */ jsx3("footer", { className: "bg-gray-800 text-white py-8 mt-16", children: /* @__PURE__ */ jsx3("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: /* @__PURE__ */ jsx3("p", { children: "\xA9 2024 \u4F53\u80B2\u796D\u30DD\u30FC\u30BF\u30EB" }) }) })
  ] });
}

// app/utils/api.ts
var API_BASE_URL = "postgresql://admin:plwbPNN7U40O0GXBtcqNAKCkdFXY4Vi0@dpg-d37a40ogjchc73c3qn0g-a/sportsdb_t8bw";
async function fetchEvents() {
  let response = await fetch(`${API_BASE_URL}/events`);
  if (!response.ok)
    throw new Error("Failed to fetch events");
  return response.json();
}
async function fetchTournament(eventId) {
  let response = await fetch(`${API_BASE_URL}/tournaments/${eventId}`);
  if (!response.ok)
    throw new Error("Failed to fetch tournament");
  return response.json();
}

// app/routes/tournaments.$eventId.tsx
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
async function loader({ params }) {
  let eventId = parseInt(params.eventId || "");
  if (isNaN(eventId))
    throw new Response("Invalid event ID", { status: 400 });
  try {
    let tournamentData = await fetchTournament(eventId);
    return json({ tournamentData });
  } catch (error) {
    throw console.error("Error loading tournament:", error), new Response("Tournament not found", { status: 404 });
  }
}
function TournamentPage() {
  let { tournamentData } = useLoaderData(), { event, tournaments } = tournamentData, getTeamColor = (team) => ({
    \u8D64\u7D44: "bg-red-100 text-red-800 border-red-300",
    \u9752\u7D44: "bg-blue-100 text-blue-800 border-blue-300",
    \u9EC4\u7D44: "bg-yellow-100 text-yellow-800 border-yellow-300",
    \u7DD1\u7D44: "bg-green-100 text-green-800 border-green-300"
  })[team] || "bg-gray-100 text-gray-800 border-gray-300", renderMatch = (tournament) => /* @__PURE__ */ jsxs3("div", { className: "border rounded-lg p-4 bg-white shadow-sm", children: [
    /* @__PURE__ */ jsx4("div", { className: "text-sm font-medium text-gray-600 mb-3", children: tournament.round }),
    /* @__PURE__ */ jsxs3("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsx4("div", { className: `px-3 py-2 rounded border ${getTeamColor(tournament.team_a)} ${tournament.winner === tournament.team_a ? "ring-2 ring-yellow-400" : ""}`, children: /* @__PURE__ */ jsxs3("div", { className: "flex justify-between items-center", children: [
        /* @__PURE__ */ jsx4("span", { className: "font-medium", children: tournament.team_a }),
        tournament.winner === tournament.team_a && /* @__PURE__ */ jsx4("span", { className: "text-yellow-600", children: "\u{1F451}" })
      ] }) }),
      /* @__PURE__ */ jsx4("div", { className: "text-center text-gray-400 text-sm", children: "VS" }),
      /* @__PURE__ */ jsx4("div", { className: `px-3 py-2 rounded border ${getTeamColor(tournament.team_b)} ${tournament.winner === tournament.team_b ? "ring-2 ring-yellow-400" : ""}`, children: /* @__PURE__ */ jsxs3("div", { className: "flex justify-between items-center", children: [
        /* @__PURE__ */ jsx4("span", { className: "font-medium", children: tournament.team_b }),
        tournament.winner === tournament.team_b && /* @__PURE__ */ jsx4("span", { className: "text-yellow-600", children: "\u{1F451}" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx4("div", { className: "mt-3 text-center", children: tournament.winner ? /* @__PURE__ */ jsxs3("span", { className: "text-sm text-green-600 font-medium", children: [
      "\u52DD\u8005: ",
      tournament.winner
    ] }) : /* @__PURE__ */ jsx4("span", { className: "text-sm text-gray-500", children: "\u672A\u6C7A\u5B9A" }) })
  ] }, tournament.id);
  return /* @__PURE__ */ jsxs3(Layout, { title: `${event.name} - \u30C8\u30FC\u30CA\u30E1\u30F3\u30C8\u8868`, children: [
    /* @__PURE__ */ jsx4("div", { className: "mb-6", children: /* @__PURE__ */ jsx4(
      Link2,
      {
        to: "/events",
        className: "text-blue-600 hover:text-blue-800 text-sm",
        children: "\u2190 \u7AF6\u6280\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB\u306B\u623B\u308B"
      }
    ) }),
    tournaments.length === 0 ? /* @__PURE__ */ jsx4("div", { className: "card text-center", children: /* @__PURE__ */ jsx4("p", { className: "text-gray-600", children: "\u3053\u306E\u7AF6\u6280\u306E\u30C8\u30FC\u30CA\u30E1\u30F3\u30C8\u60C5\u5831\u306F\u3042\u308A\u307E\u305B\u3093\u3002" }) }) : /* @__PURE__ */ jsx4("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: tournaments.map(renderMatch) }),
    /* @__PURE__ */ jsxs3("div", { className: "mt-8 card", children: [
      /* @__PURE__ */ jsx4("h3", { className: "text-lg font-semibold text-gray-800 mb-4", children: "\u8AAC\u660E" }),
      /* @__PURE__ */ jsxs3("ul", { className: "space-y-2 text-gray-600 text-sm", children: [
        /* @__PURE__ */ jsxs3("li", { className: "flex items-start", children: [
          /* @__PURE__ */ jsx4("span", { className: "text-blue-600 mr-2", children: "\u2022" }),
          "\u{1F451}\u30DE\u30FC\u30AF\u306F\u52DD\u8005\u3092\u8868\u3057\u307E\u3059"
        ] }),
        /* @__PURE__ */ jsxs3("li", { className: "flex items-start", children: [
          /* @__PURE__ */ jsx4("span", { className: "text-blue-600 mr-2", children: "\u2022" }),
          "\u300C\u672A\u6C7A\u5B9A\u300D\u306F\u4ECA\u5F8C\u8A66\u5408\u304C\u884C\u308F\u308C\u308B\u4E88\u5B9A\u3067\u3059"
        ] }),
        /* @__PURE__ */ jsxs3("li", { className: "flex items-start", children: [
          /* @__PURE__ */ jsx4("span", { className: "text-blue-600 mr-2", children: "\u2022" }),
          "\u7D50\u679C\u306F\u968F\u6642\u66F4\u65B0\u3055\u308C\u307E\u3059"
        ] })
      ] })
    ] })
  ] });
}

// app/routes/events._index.tsx
var events_index_exports = {};
__export(events_index_exports, {
  default: () => EventsIndex,
  loader: () => loader2
});
import { json as json2 } from "@remix-run/node";
import { useLoaderData as useLoaderData2, Link as Link3 } from "@remix-run/react";
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
async function loader2() {
  try {
    let events = await fetchEvents();
    return json2({ events });
  } catch (error) {
    return console.error("Error loading events:", error), json2({ events: [] });
  }
}
function EventsIndex() {
  let { events } = useLoaderData2(), formatDateTime = (dateTimeString) => {
    let date = new Date(dateTimeString);
    return {
      date: date.toLocaleDateString("ja-JP"),
      time: date.toLocaleTimeString("ja-JP", {
        hour: "2-digit",
        minute: "2-digit"
      })
    };
  };
  return /* @__PURE__ */ jsx5(Layout, { title: "\u7AF6\u6280\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB", children: events.length === 0 ? /* @__PURE__ */ jsx5("div", { className: "card text-center", children: /* @__PURE__ */ jsx5("p", { className: "text-gray-600", children: "\u7AF6\u6280\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB\u306E\u53D6\u5F97\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002" }) }) : /* @__PURE__ */ jsx5("div", { className: "card", children: /* @__PURE__ */ jsx5("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs4("table", { className: "min-w-full divide-y divide-gray-200", children: [
    /* @__PURE__ */ jsx5("thead", { className: "bg-gray-50", children: /* @__PURE__ */ jsxs4("tr", { children: [
      /* @__PURE__ */ jsx5("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "\u7AF6\u6280\u540D" }),
      /* @__PURE__ */ jsx5("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "\u65E5\u4ED8" }),
      /* @__PURE__ */ jsx5("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "\u6642\u9593" }),
      /* @__PURE__ */ jsx5("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "\u5834\u6240" }),
      /* @__PURE__ */ jsx5("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "\u30C8\u30FC\u30CA\u30E1\u30F3\u30C8" })
    ] }) }),
    /* @__PURE__ */ jsx5("tbody", { className: "bg-white divide-y divide-gray-200", children: events.map((event) => {
      let { date, time } = formatDateTime(event.schedule_time);
      return /* @__PURE__ */ jsxs4("tr", { className: "hover:bg-gray-50", children: [
        /* @__PURE__ */ jsx5("td", { className: "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900", children: event.name }),
        /* @__PURE__ */ jsx5("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: date }),
        /* @__PURE__ */ jsx5("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: time }),
        /* @__PURE__ */ jsx5("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: event.location }),
        /* @__PURE__ */ jsx5("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-blue-600", children: /* @__PURE__ */ jsx5(
          Link3,
          {
            to: `/tournaments/${event.id}`,
            className: "hover:underline",
            children: "\u30C8\u30FC\u30CA\u30E1\u30F3\u30C8\u8868 \u2192"
          }
        ) })
      ] }, event.id);
    }) })
  ] }) }) }) });
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index
});
import { Link as Link4 } from "@remix-run/react";
import { jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
function Index() {
  return /* @__PURE__ */ jsxs5(Layout, { title: "\u30DB\u30FC\u30E0", children: [
    /* @__PURE__ */ jsxs5("div", { className: "grid md:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ jsxs5("div", { className: "card", children: [
        /* @__PURE__ */ jsx6("h2", { className: "text-2xl font-semibold text-gray-800 mb-4", children: "\u{1F4C5} \u7AF6\u6280\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB" }),
        /* @__PURE__ */ jsx6("p", { className: "text-gray-600 mb-6", children: "\u5404\u7AF6\u6280\u306E\u958B\u59CB\u6642\u9593\u3068\u958B\u50AC\u5834\u6240\u3092\u78BA\u8A8D\u3067\u304D\u307E\u3059\u3002" }),
        /* @__PURE__ */ jsx6(Link4, { to: "/events", className: "btn-primary", children: "\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB\u3092\u898B\u308B" })
      ] }),
      /* @__PURE__ */ jsxs5("div", { className: "card", children: [
        /* @__PURE__ */ jsx6("h2", { className: "text-2xl font-semibold text-gray-800 mb-4", children: "\u{1F3C6} \u30C8\u30FC\u30CA\u30E1\u30F3\u30C8\u8868" }),
        /* @__PURE__ */ jsx6("p", { className: "text-gray-600 mb-6", children: "\u5404\u7AF6\u6280\u306E\u30C8\u30FC\u30CA\u30E1\u30F3\u30C8\u9032\u884C\u72B6\u6CC1\u3092\u78BA\u8A8D\u3067\u304D\u307E\u3059\u3002" }),
        /* @__PURE__ */ jsx6(Link4, { to: "/events", className: "btn-secondary", children: "\u30C8\u30FC\u30CA\u30E1\u30F3\u30C8\u3092\u898B\u308B" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs5("div", { className: "mt-12 card", children: [
      /* @__PURE__ */ jsx6("h2", { className: "text-2xl font-semibold text-gray-800 mb-4", children: "\u{1F3AF} \u304A\u77E5\u3089\u305B" }),
      /* @__PURE__ */ jsxs5("ul", { className: "space-y-3 text-gray-700", children: [
        /* @__PURE__ */ jsxs5("li", { className: "flex items-start", children: [
          /* @__PURE__ */ jsx6("span", { className: "text-blue-600 mr-2", children: "\u2022" }),
          "\u96E8\u5929\u6642\u306E\u7AF6\u6280\u5909\u66F4\u306B\u3064\u3044\u3066\u306F\u3001\u5F53\u65E5\u671D\u306B\u767A\u8868\u3057\u307E\u3059"
        ] }),
        /* @__PURE__ */ jsxs5("li", { className: "flex items-start", children: [
          /* @__PURE__ */ jsx6("span", { className: "text-blue-600 mr-2", children: "\u2022" }),
          "\u7AF6\u6280\u7D50\u679C\u306F\u968F\u6642\u66F4\u65B0\u3055\u308C\u307E\u3059"
        ] }),
        /* @__PURE__ */ jsxs5("li", { className: "flex items-start", children: [
          /* @__PURE__ */ jsx6("span", { className: "text-blue-600 mr-2", children: "\u2022" }),
          "\u5FDC\u63F4\u306F\u5404\u30C1\u30FC\u30E0\u30AB\u30E9\u30FC\u306E\u670D\u88C5\u3067\u304A\u9858\u3044\u3057\u307E\u3059"
        ] })
      ] })
    ] })
  ] });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-KB5UQ535.js", imports: ["/build/_shared/chunk-QKQRSHVA.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-DXURFC64.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-3ZJ5EWMN.js", imports: ["/build/_shared/chunk-25XZ2N52.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/events._index": { id: "routes/events._index", parentId: "root", path: "events", index: !0, caseSensitive: void 0, module: "/build/routes/events._index-LWU7SGP7.js", imports: ["/build/_shared/chunk-Q7JMXEEH.js", "/build/_shared/chunk-25XZ2N52.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/tournaments.$eventId": { id: "routes/tournaments.$eventId", parentId: "root", path: "tournaments/:eventId", index: void 0, caseSensitive: void 0, module: "/build/routes/tournaments.$eventId-2Z4HTZNW.js", imports: ["/build/_shared/chunk-Q7JMXEEH.js", "/build/_shared/chunk-25XZ2N52.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "b51ae533", hmr: void 0, url: "/build/manifest-B51AE533.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "production", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, v3_routeConfig: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_node_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/tournaments.$eventId": {
    id: "routes/tournaments.$eventId",
    parentId: "root",
    path: "tournaments/:eventId",
    index: void 0,
    caseSensitive: void 0,
    module: tournaments_eventId_exports
  },
  "routes/events._index": {
    id: "routes/events._index",
    parentId: "root",
    path: "events",
    index: !0,
    caseSensitive: void 0,
    module: events_index_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
