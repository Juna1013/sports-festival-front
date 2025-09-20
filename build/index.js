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
import { jsxDEV } from "react/jsx-dev-runtime";
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
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 66,
          columnNumber: 7
        },
        this
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
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 116,
          columnNumber: 7
        },
        this
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
var tailwind_default = "/build/_assets/tailwind-LFPCUADA.css?url";

// app/styles/scrollbar.css?url
var scrollbar_default = "/build/_assets/scrollbar-XF5ECMNF.css?url";

// app/root.tsx
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var links = () => [
  { rel: "stylesheet", href: tailwind_default },
  { rel: "stylesheet", href: scrollbar_default },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous"
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/icon?family=Material+Icons"
  }
];
function App() {
  return /* @__PURE__ */ jsxDEV2("html", { lang: "ja", children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { children: [
      /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 35,
    columnNumber: 5
  }, this);
}

// app/routes/tournaments.$eventId.tsx
var tournaments_eventId_exports = {};
__export(tournaments_eventId_exports, {
  default: () => TournamentPage,
  loader: () => loader
});
import { json } from "@remix-run/node";
import { useLoaderData, Link as Link3 } from "@remix-run/react";

// app/components/Header.tsx
import { Link, useLocation } from "@remix-run/react";
import { useState, useEffect } from "react";
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
function Header() {
  let [isScrolled, setIsScrolled] = useState(!1), location = useLocation();
  useEffect(() => {
    let handleScroll = () => {
      let scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };
    return window.addEventListener("scroll", handleScroll), () => window.removeEventListener("scroll", handleScroll);
  }, []);
  let navItems = [
    { name: "\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB", href: "/events", icon: "schedule" },
    { name: "\u7403\u6280", href: "#sports-ball", icon: "sports_basketball", isSection: !0 },
    { name: "\u7AF6\u6280", href: "#sports-track", icon: "directions_run", isSection: !0 },
    { name: "\u30A2\u30AF\u30BB\u30B9", href: "#access", icon: "location_on", isSection: !0 }
  ], handleSectionClick = (href) => {
    if (href.startsWith("#")) {
      let element = document.querySelector(href === "#sports-ball" ? '[data-section="sports-ball"]' : href === "#sports-track" ? '[data-section="sports-track"]' : href === "#access" ? '[data-section="access"]' : href);
      element && element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return /* @__PURE__ */ jsxDEV3("header", { className: "fixed top-0 left-0 right-0 z-50 p-3 md:p-4", children: /* @__PURE__ */ jsxDEV3(
    "div",
    {
      className: `
          flex justify-between items-center max-w-6xl mx-auto px-4 md:px-6 py-3 md:py-4
          rounded-xl md:rounded-2xl transition-all duration-300 ease-in-out
          ${isScrolled ? "bg-white/90 backdrop-blur-lg shadow-xl border border-white/60" : "bg-white/80 backdrop-blur-md shadow-lg border border-white/50"}
        `,
      children: [
        /* @__PURE__ */ jsxDEV3(Link, { to: "/", className: "flex items-center group", children: [
          /* @__PURE__ */ jsxDEV3("span", { className: `
            material-icons text-blue-600 transition-all duration-300 group-hover:text-blue-700 group-hover:scale-105
            ${isScrolled ? "text-4xl md:text-5xl" : "text-5xl md:text-6xl"}
          `, children: "sports" }, void 0, !1, {
            fileName: "app/components/Header.tsx",
            lineNumber: 51,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV3("div", { className: `
            ml-2 md:ml-3 transition-all duration-300
            ${isScrolled ? "opacity-80" : "opacity-100"}
          `, children: [
            /* @__PURE__ */ jsxDEV3("h1", { className: `
              font-bold text-gray-800 leading-tight
              ${isScrolled ? "text-sm md:text-base" : "text-base md:text-lg"}
            `, children: "\u4F53\u80B2\u796D" }, void 0, !1, {
              fileName: "app/components/Header.tsx",
              lineNumber: 61,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV3("p", { className: `
              text-gray-600 leading-tight
              ${isScrolled ? "text-xs hidden md:block" : "text-xs md:text-sm"}
            `, children: "\u30DD\u30FC\u30BF\u30EB" }, void 0, !1, {
              fileName: "app/components/Header.tsx",
              lineNumber: 67,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Header.tsx",
            lineNumber: 57,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Header.tsx",
          lineNumber: 50,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV3("nav", { className: "flex space-x-3 md:space-x-6", children: navItems.map((item, index) => item.isSection ? /* @__PURE__ */ jsxDEV3(
          "button",
          {
            onClick: () => handleSectionClick(item.href),
            className: `
                  relative text-gray-700 hover:text-blue-600 transition-all duration-300
                  font-medium py-2 px-2 md:px-3 group text-xs md:text-sm flex items-center
                  ${isScrolled ? "text-gray-800" : "text-gray-700"}
                `,
            style: {
              animationDelay: `${index * 0.1}s`
            },
            children: [
              /* @__PURE__ */ jsxDEV3("span", { className: "material-icons text-sm md:text-base mr-1 md:mr-1.5", children: item.icon }, void 0, !1, {
                fileName: "app/components/Header.tsx",
                lineNumber: 92,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV3("span", { className: "hidden sm:inline", children: item.name }, void 0, !1, {
                fileName: "app/components/Header.tsx",
                lineNumber: 93,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV3("span", { className: `
                  absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400
                  transition-all duration-300 w-0 group-hover:w-full
                ` }, void 0, !1, {
                fileName: "app/components/Header.tsx",
                lineNumber: 94,
                columnNumber: 17
              }, this)
            ]
          },
          item.name,
          !0,
          {
            fileName: "app/components/Header.tsx",
            lineNumber: 80,
            columnNumber: 15
          },
          this
        ) : /* @__PURE__ */ jsxDEV3(
          Link,
          {
            to: item.href,
            className: `
                  relative text-gray-700 hover:text-blue-600 transition-all duration-300
                  font-medium py-2 px-2 md:px-3 group text-xs md:text-sm flex items-center
                  ${isScrolled ? "text-gray-800" : "text-gray-700"}
                  ${location.pathname === item.href ? "text-blue-600" : ""}
                `,
            style: {
              animationDelay: `${index * 0.1}s`
            },
            children: [
              /* @__PURE__ */ jsxDEV3("span", { className: "material-icons text-sm md:text-base mr-1 md:mr-1.5", children: item.icon }, void 0, !1, {
                fileName: "app/components/Header.tsx",
                lineNumber: 113,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV3("span", { className: "hidden sm:inline", children: item.name }, void 0, !1, {
                fileName: "app/components/Header.tsx",
                lineNumber: 114,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV3("span", { className: `
                  absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400
                  transition-all duration-300
                  ${location.pathname === item.href ? "w-full" : "w-0 group-hover:w-full"}
                ` }, void 0, !1, {
                fileName: "app/components/Header.tsx",
                lineNumber: 115,
                columnNumber: 17
              }, this)
            ]
          },
          item.name,
          !0,
          {
            fileName: "app/components/Header.tsx",
            lineNumber: 100,
            columnNumber: 15
          },
          this
        )) }, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 77,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/Header.tsx",
      lineNumber: 39,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/Header.tsx",
    lineNumber: 38,
    columnNumber: 5
  }, this);
}

// app/components/Footer.tsx
import { Link as Link2 } from "@remix-run/react";
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
function Footer() {
  return /* @__PURE__ */ jsxDEV4("footer", { className: "bg-slate-900 text-white mt-auto", children: /* @__PURE__ */ jsxDEV4("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV4("div", { className: "py-8", children: [
    /* @__PURE__ */ jsxDEV4("div", { className: "grid md:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ jsxDEV4("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxDEV4("div", { className: "flex items-center space-x-3", children: [
          /* @__PURE__ */ jsxDEV4("span", { className: "material-icons text-3xl text-blue-400", children: "sports" }, void 0, !1, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 20,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV4("h3", { className: "text-xl font-bold text-white", children: "\u4F53\u80B2\u796D\u30DD\u30FC\u30BF\u30EB" }, void 0, !1, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 21,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 19,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV4("p", { className: "text-slate-300 text-sm leading-relaxed", children: "\u5B66\u6821\u306E\u4F53\u80B2\u796D\u306B\u95A2\u3059\u308B\u5168\u3066\u306E\u60C5\u5831\u3092\u304A\u5C4A\u3051\u3057\u307E\u3059\u3002\u7AF6\u6280\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB\u304B\u3089\u30C8\u30FC\u30CA\u30E1\u30F3\u30C8\u7D50\u679C\u307E\u3067\u3001\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u3067\u66F4\u65B0\u4E2D\u3067\u3059\u3002" }, void 0, !1, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 23,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 18,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV4("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxDEV4("h4", { className: "text-lg font-semibold text-white border-b border-slate-700 pb-2", children: "\u30B5\u30A4\u30C8\u30CA\u30D3\u30B2\u30FC\u30B7\u30E7\u30F3" }, void 0, !1, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 30,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV4("nav", { className: "space-y-3", children: [
          { name: "\u30DB\u30FC\u30E0", href: "/" },
          { name: "\u7AF6\u6280\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB", href: "/events" },
          { name: "\u30C8\u30FC\u30CA\u30E1\u30F3\u30C8\u8868", href: "/tournaments" }
        ].map((link) => /* @__PURE__ */ jsxDEV4(
          Link2,
          {
            to: link.href,
            className: "flex items-center text-slate-300 hover:text-blue-400 transition-colors duration-300 group",
            children: [
              /* @__PURE__ */ jsxDEV4("span", { className: "material-icons text-sm mr-2 group-hover:translate-x-1 transition-transform duration-300", children: "chevron_right" }, void 0, !1, {
                fileName: "app/components/Footer.tsx",
                lineNumber: 40,
                columnNumber: 21
              }, this),
              link.name
            ]
          },
          link.name,
          !0,
          {
            fileName: "app/components/Footer.tsx",
            lineNumber: 35,
            columnNumber: 19
          },
          this
        )) }, void 0, !1, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 33,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 29,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 15,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV4("div", { className: "border-t border-slate-700 mt-8 pt-6", children: /* @__PURE__ */ jsxDEV4("div", { className: "flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0", children: [
      /* @__PURE__ */ jsxDEV4("p", { className: "text-sm text-slate-400", children: "\xA9 2024 \u4F53\u80B2\u796D\u30DD\u30FC\u30BF\u30EB. All rights reserved." }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 53,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV4("div", { className: "flex items-center space-x-4 text-xs text-slate-500", children: [
        /* @__PURE__ */ jsxDEV4("span", { children: "\u6700\u7D42\u66F4\u65B0: 2024\u5E7412\u6708" }, void 0, !1, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 57,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV4("span", { children: "\u2022" }, void 0, !1, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 58,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV4("span", { children: "\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u66F4\u65B0\u4E2D" }, void 0, !1, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 59,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 56,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 52,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 51,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 13,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/components/Layout.tsx
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
function Layout({ children, title = "\u4F53\u80B2\u796D\u30DD\u30FC\u30BF\u30EB" }) {
  return /* @__PURE__ */ jsxDEV5("div", { className: "min-h-screen bg-gradient-to-br from-sky-100 via-blue-50 to-cyan-100 flex flex-col", children: [
    /* @__PURE__ */ jsxDEV5(Header, {}, void 0, !1, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV5("main", { className: "flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12", children: /* @__PURE__ */ jsxDEV5("div", { className: "space-y-8", children: [
      title && /* @__PURE__ */ jsxDEV5("h1", { className: "text-4xl font-bold text-gray-900 tracking-tight", children: title }, void 0, !1, {
        fileName: "app/components/Layout.tsx",
        lineNumber: 18,
        columnNumber: 13
      }, this),
      children
    ] }, void 0, !0, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 16,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV5(Footer, {}, void 0, !1, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/utils/api.ts
var API_BASE_URL = "http://localhost:3001";
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
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
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
  })[team] || "bg-gray-100 text-gray-800 border-gray-300", renderMatch = (tournament) => /* @__PURE__ */ jsxDEV6("div", { className: "bg-white/90 backdrop-blur-sm border border-white/30 rounded-xl p-4 shadow-lg hover:shadow-xl hover:bg-white hover:-translate-y-1 transition-all duration-300 transform", children: [
    /* @__PURE__ */ jsxDEV6("div", { className: "text-sm font-medium text-gray-600 mb-3", children: tournament.round }, void 0, !1, {
      fileName: "app/routes/tournaments.$eventId.tsx",
      lineNumber: 40,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV6("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxDEV6("div", { className: `px-3 py-2 rounded border ${getTeamColor(tournament.team_a)} ${tournament.winner === tournament.team_a ? "ring-2 ring-yellow-400" : ""}`, children: /* @__PURE__ */ jsxDEV6("div", { className: "flex justify-between items-center", children: [
        /* @__PURE__ */ jsxDEV6("span", { className: "font-medium", children: tournament.team_a }, void 0, !1, {
          fileName: "app/routes/tournaments.$eventId.tsx",
          lineNumber: 49,
          columnNumber: 15
        }, this),
        tournament.winner === tournament.team_a && /* @__PURE__ */ jsxDEV6("span", { className: "material-icons text-yellow-600", children: "emoji_events" }, void 0, !1, {
          fileName: "app/routes/tournaments.$eventId.tsx",
          lineNumber: 51,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/tournaments.$eventId.tsx",
        lineNumber: 48,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/tournaments.$eventId.tsx",
        lineNumber: 45,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV6("div", { className: "text-center text-gray-400 text-sm", children: "VS" }, void 0, !1, {
        fileName: "app/routes/tournaments.$eventId.tsx",
        lineNumber: 56,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV6("div", { className: `px-3 py-2 rounded border ${getTeamColor(tournament.team_b)} ${tournament.winner === tournament.team_b ? "ring-2 ring-yellow-400" : ""}`, children: /* @__PURE__ */ jsxDEV6("div", { className: "flex justify-between items-center", children: [
        /* @__PURE__ */ jsxDEV6("span", { className: "font-medium", children: tournament.team_b }, void 0, !1, {
          fileName: "app/routes/tournaments.$eventId.tsx",
          lineNumber: 62,
          columnNumber: 15
        }, this),
        tournament.winner === tournament.team_b && /* @__PURE__ */ jsxDEV6("span", { className: "material-icons text-yellow-600", children: "emoji_events" }, void 0, !1, {
          fileName: "app/routes/tournaments.$eventId.tsx",
          lineNumber: 64,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/tournaments.$eventId.tsx",
        lineNumber: 61,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/tournaments.$eventId.tsx",
        lineNumber: 58,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/tournaments.$eventId.tsx",
      lineNumber: 44,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV6("div", { className: "mt-3 text-center", children: tournament.winner ? /* @__PURE__ */ jsxDEV6("span", { className: "text-sm text-green-600 font-medium", children: [
      "\u52DD\u8005: ",
      tournament.winner
    ] }, void 0, !0, {
      fileName: "app/routes/tournaments.$eventId.tsx",
      lineNumber: 72,
      columnNumber: 13
    }, this) : /* @__PURE__ */ jsxDEV6("span", { className: "text-sm text-gray-500", children: "\u672A\u6C7A\u5B9A" }, void 0, !1, {
      fileName: "app/routes/tournaments.$eventId.tsx",
      lineNumber: 76,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/tournaments.$eventId.tsx",
      lineNumber: 70,
      columnNumber: 9
    }, this)
  ] }, tournament.id, !0, {
    fileName: "app/routes/tournaments.$eventId.tsx",
    lineNumber: 39,
    columnNumber: 7
  }, this);
  return /* @__PURE__ */ jsxDEV6(Layout, { title: `${event.name} - \u30C8\u30FC\u30CA\u30E1\u30F3\u30C8\u8868`, children: [
    /* @__PURE__ */ jsxDEV6("div", { className: "mb-6", children: /* @__PURE__ */ jsxDEV6(
      Link3,
      {
        to: "/events",
        className: "inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg",
        children: "\u2190 \u7AF6\u6280\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB\u306B\u623B\u308B"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/tournaments.$eventId.tsx",
        lineNumber: 88,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/tournaments.$eventId.tsx",
      lineNumber: 87,
      columnNumber: 7
    }, this),
    tournaments.length === 0 ? /* @__PURE__ */ jsxDEV6("div", { className: "bg-white/90 backdrop-blur-sm border border-white/30 rounded-xl p-6 text-center shadow-xl", children: /* @__PURE__ */ jsxDEV6("p", { className: "text-gray-700 text-sm", children: "\u3053\u306E\u7AF6\u6280\u306E\u30C8\u30FC\u30CA\u30E1\u30F3\u30C8\u60C5\u5831\u306F\u3042\u308A\u307E\u305B\u3093\u3002" }, void 0, !1, {
      fileName: "app/routes/tournaments.$eventId.tsx",
      lineNumber: 98,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/tournaments.$eventId.tsx",
      lineNumber: 97,
      columnNumber: 9
    }, this) : /* @__PURE__ */ jsxDEV6("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: tournaments.map(renderMatch) }, void 0, !1, {
      fileName: "app/routes/tournaments.$eventId.tsx",
      lineNumber: 101,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV6("div", { className: "bg-white/90 backdrop-blur-sm border border-white/30 rounded-xl p-6 shadow-xl", children: [
      /* @__PURE__ */ jsxDEV6("h3", { className: "text-lg font-semibold text-gray-900 mb-4", children: "\u8AAC\u660E" }, void 0, !1, {
        fileName: "app/routes/tournaments.$eventId.tsx",
        lineNumber: 107,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV6("ul", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxDEV6("li", { className: "flex items-start text-sm text-gray-700", children: [
          /* @__PURE__ */ jsxDEV6("span", { className: "material-icons text-lg mr-3 mt-0.5 text-blue-500", children: "emoji_events" }, void 0, !1, {
            fileName: "app/routes/tournaments.$eventId.tsx",
            lineNumber: 110,
            columnNumber: 13
          }, this),
          "\u30C8\u30ED\u30D5\u30A3\u30FC\u30DE\u30FC\u30AF\u306F\u52DD\u8005\u3092\u8868\u3057\u307E\u3059"
        ] }, void 0, !0, {
          fileName: "app/routes/tournaments.$eventId.tsx",
          lineNumber: 109,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV6("li", { className: "flex items-start text-sm text-gray-700", children: [
          /* @__PURE__ */ jsxDEV6("span", { className: "material-icons text-lg mr-3 mt-0.5 text-blue-500", children: "schedule" }, void 0, !1, {
            fileName: "app/routes/tournaments.$eventId.tsx",
            lineNumber: 114,
            columnNumber: 13
          }, this),
          "\u300C\u672A\u6C7A\u5B9A\u300D\u306F\u4ECA\u5F8C\u8A66\u5408\u304C\u884C\u308F\u308C\u308B\u4E88\u5B9A\u3067\u3059"
        ] }, void 0, !0, {
          fileName: "app/routes/tournaments.$eventId.tsx",
          lineNumber: 113,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV6("li", { className: "flex items-start text-sm text-gray-700", children: [
          /* @__PURE__ */ jsxDEV6("span", { className: "material-icons text-lg mr-3 mt-0.5 text-blue-500", children: "update" }, void 0, !1, {
            fileName: "app/routes/tournaments.$eventId.tsx",
            lineNumber: 118,
            columnNumber: 13
          }, this),
          "\u7D50\u679C\u306F\u968F\u6642\u66F4\u65B0\u3055\u308C\u307E\u3059"
        ] }, void 0, !0, {
          fileName: "app/routes/tournaments.$eventId.tsx",
          lineNumber: 117,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/tournaments.$eventId.tsx",
        lineNumber: 108,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/tournaments.$eventId.tsx",
      lineNumber: 106,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/tournaments.$eventId.tsx",
    lineNumber: 86,
    columnNumber: 5
  }, this);
}

// app/routes/events._index.tsx
var events_index_exports = {};
__export(events_index_exports, {
  default: () => EventsIndex,
  loader: () => loader2
});
import { json as json2 } from "@remix-run/node";
import { useLoaderData as useLoaderData2, Link as Link4 } from "@remix-run/react";
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
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
  return /* @__PURE__ */ jsxDEV7(Layout, { title: "\u7AF6\u6280\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB", children: events.length === 0 ? /* @__PURE__ */ jsxDEV7("div", { className: "bg-white/90 backdrop-blur-sm border border-white/30 rounded-xl p-6 text-center shadow-xl", children: /* @__PURE__ */ jsxDEV7("p", { className: "text-gray-700 text-sm", children: "\u7AF6\u6280\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB\u306E\u53D6\u5F97\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002" }, void 0, !1, {
    fileName: "app/routes/events._index.tsx",
    lineNumber: 34,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/routes/events._index.tsx",
    lineNumber: 33,
    columnNumber: 9
  }, this) : /* @__PURE__ */ jsxDEV7("div", { className: "bg-white/90 backdrop-blur-sm border border-white/30 rounded-xl overflow-hidden shadow-xl", children: /* @__PURE__ */ jsxDEV7("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxDEV7("table", { className: "min-w-full divide-y divide-gray-200", children: [
    /* @__PURE__ */ jsxDEV7("thead", { className: "bg-blue-50/70 backdrop-blur-sm", children: /* @__PURE__ */ jsxDEV7("tr", { children: [
      /* @__PURE__ */ jsxDEV7("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "\u7AF6\u6280\u540D" }, void 0, !1, {
        fileName: "app/routes/events._index.tsx",
        lineNumber: 42,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ jsxDEV7("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "\u65E5\u4ED8" }, void 0, !1, {
        fileName: "app/routes/events._index.tsx",
        lineNumber: 45,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ jsxDEV7("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "\u6642\u9593" }, void 0, !1, {
        fileName: "app/routes/events._index.tsx",
        lineNumber: 48,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ jsxDEV7("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "\u5834\u6240" }, void 0, !1, {
        fileName: "app/routes/events._index.tsx",
        lineNumber: 51,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ jsxDEV7("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "\u30C8\u30FC\u30CA\u30E1\u30F3\u30C8" }, void 0, !1, {
        fileName: "app/routes/events._index.tsx",
        lineNumber: 54,
        columnNumber: 19
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/events._index.tsx",
      lineNumber: 41,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/events._index.tsx",
      lineNumber: 40,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ jsxDEV7("tbody", { className: "bg-white divide-y divide-gray-200", children: events.map((event) => {
      let { date, time } = formatDateTime(event.schedule_time);
      return /* @__PURE__ */ jsxDEV7("tr", { className: "hover:bg-gray-50 transition-colors", children: [
        /* @__PURE__ */ jsxDEV7("td", { className: "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900", children: event.name }, void 0, !1, {
          fileName: "app/routes/events._index.tsx",
          lineNumber: 64,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ jsxDEV7("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: date }, void 0, !1, {
          fileName: "app/routes/events._index.tsx",
          lineNumber: 67,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ jsxDEV7("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: time }, void 0, !1, {
          fileName: "app/routes/events._index.tsx",
          lineNumber: 70,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ jsxDEV7("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: event.location }, void 0, !1, {
          fileName: "app/routes/events._index.tsx",
          lineNumber: 73,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ jsxDEV7("td", { className: "px-6 py-4 whitespace-nowrap text-sm", children: /* @__PURE__ */ jsxDEV7(
          Link4,
          {
            to: `/tournaments/${event.id}`,
            className: "inline-flex items-center px-3 py-1 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 rounded-md transition-all duration-300 shadow-md hover:shadow-lg",
            children: "\u30C8\u30FC\u30CA\u30E1\u30F3\u30C8\u8868 \u2192"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/events._index.tsx",
            lineNumber: 77,
            columnNumber: 25
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/events._index.tsx",
          lineNumber: 76,
          columnNumber: 23
        }, this)
      ] }, event.id, !0, {
        fileName: "app/routes/events._index.tsx",
        lineNumber: 63,
        columnNumber: 21
      }, this);
    }) }, void 0, !1, {
      fileName: "app/routes/events._index.tsx",
      lineNumber: 59,
      columnNumber: 15
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/events._index.tsx",
    lineNumber: 39,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/events._index.tsx",
    lineNumber: 38,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/routes/events._index.tsx",
    lineNumber: 37,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/events._index.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index
});
import { Link as Link5 } from "@remix-run/react";
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
function Index() {
  return /* @__PURE__ */ jsxDEV8(Layout, { title: "", children: [
    /* @__PURE__ */ jsxDEV8("div", { className: "relative w-full h-48 sm:h-56 md:h-72 lg:h-80 xl:h-96 mb-6 md:mb-8 rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-xl", children: /* @__PURE__ */ jsxDEV8("div", { className: "absolute inset-0 bg-gradient-to-br from-blue-400 via-sky-300 to-cyan-200 flex items-center justify-center px-4", children: /* @__PURE__ */ jsxDEV8("div", { className: "text-center text-white max-w-md", children: [
      /* @__PURE__ */ jsxDEV8("span", { className: "material-icons text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-2 md:mb-4 opacity-80", children: "school" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 12,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV8("p", { className: "text-base sm:text-lg md:text-xl lg:text-2xl font-semibold opacity-90 mb-1 md:mb-2", children: "\u6821\u5EAD\u306E\u5199\u771F\u304C\u3053\u3053\u306B\u5165\u308A\u307E\u3059" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 15,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV8("p", { className: "text-xs sm:text-sm md:text-base opacity-70 px-2", children: "\u753B\u50CF\u3092\u8FFD\u52A0\u3059\u308B\u3068\u3053\u306E\u30D7\u30EC\u30FC\u30B9\u30DB\u30EB\u30C0\u30FC\u304C\u7F6E\u304D\u63DB\u308F\u308A\u307E\u3059" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 18,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 11,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 10,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV8("div", { className: "w-full mb-6 md:mb-8", children: /* @__PURE__ */ jsxDEV8("div", { className: "bg-white/90 backdrop-blur-sm border border-white/30 rounded-xl p-4 md:p-6 shadow-xl hover:shadow-2xl hover:bg-white hover:-translate-y-1 transition-all duration-300 transform", children: [
      /* @__PURE__ */ jsxDEV8("h2", { className: "flex items-center text-lg md:text-xl font-semibold text-gray-900 mb-3", children: [
        /* @__PURE__ */ jsxDEV8("span", { className: "material-icons text-xl md:text-2xl mr-2 md:mr-3 text-blue-600 drop-shadow-sm", children: "schedule" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 46,
          columnNumber: 13
        }, this),
        "\u7AF6\u6280\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB"
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 45,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV8("p", { className: "text-gray-700 mb-4 md:mb-6 text-xs md:text-sm leading-relaxed", children: "\u5404\u7AF6\u6280\u306E\u958B\u59CB\u6642\u9593\u3068\u958B\u50AC\u5834\u6240\u3092\u78BA\u8A8D\u3067\u304D\u307E\u3059\u3002" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 49,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV8(
        Link5,
        {
          to: "/events",
          className: "inline-flex items-center px-3 md:px-4 py-2 text-xs md:text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl",
          children: "\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB\u3092\u898B\u308B"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_index.tsx",
          lineNumber: 52,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 44,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV8("div", { "data-section": "sports-ball", className: "bg-white/90 backdrop-blur-sm border border-white/30 rounded-xl p-6 shadow-xl mb-8", children: [
      /* @__PURE__ */ jsxDEV8("h2", { className: "flex items-center text-xl font-semibold text-gray-900 mb-6", children: [
        /* @__PURE__ */ jsxDEV8("span", { className: "material-icons text-2xl mr-3 text-amber-600 drop-shadow-sm", children: "sports_basketball" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 64,
          columnNumber: 11
        }, this),
        "\u7403\u6280\u7A2E\u76EE"
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 63,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV8("div", { className: "relative overflow-hidden", children: /* @__PURE__ */ jsxDEV8("div", { className: "flex gap-3 md:gap-4 scroll-container auto-scroll", children: [...Array(2)].map(
        (_, arrayIndex) => [
          { name: "\u30D0\u30B9\u30B1\u30C3\u30C8\u30DC\u30FC\u30EB", description: "\u30C1\u30FC\u30E0\u6226\u3067\u306E\u71B1\u3044\u6226\u3044\u304C\u7E70\u308A\u5E83\u3052\u3089\u308C\u307E\u3059", icon: "sports_basketball" },
          { name: "\u30B5\u30C3\u30AB\u30FC", description: "\u30B0\u30E9\u30A6\u30F3\u30C9\u3092\u99C6\u3051\u629C\u3051\u308B\u767D\u71B1\u3057\u305F\u8A66\u5408", icon: "sports_soccer" },
          { name: "\u30D0\u30EC\u30FC\u30DC\u30FC\u30EB", description: "\u30CD\u30C3\u30C8\u3092\u631F\u3093\u3067\u306E\u30D1\u30EF\u30D5\u30EB\u306A\u653B\u9632", icon: "sports_volleyball" },
          { name: "\u30C9\u30C3\u30B8\u30DC\u30FC\u30EB", description: "\u4FCA\u654F\u6027\u3068\u6226\u7565\u304C\u6C42\u3081\u3089\u308C\u308B\u4EBA\u6C17\u7AF6\u6280", icon: "sports_handball" },
          { name: "\u30C6\u30CB\u30B9", description: "\u500B\u4EBA\u6226\u3067\u306E\u6280\u8853\u3068\u96C6\u4E2D\u529B\u306E\u52DD\u8CA0", icon: "sports_tennis" }
        ].map((sport, index) => /* @__PURE__ */ jsxDEV8("div", { className: "flex-none w-56 sm:w-64 md:w-72", children: /* @__PURE__ */ jsxDEV8("div", { className: "bg-white border border-gray-200 rounded-xl p-3 md:p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1", children: [
          /* @__PURE__ */ jsxDEV8("div", { className: "relative w-full h-32 sm:h-36 md:h-40 mb-3 md:mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-blue-100 to-cyan-100", children: /* @__PURE__ */ jsxDEV8("div", { className: "absolute inset-0 flex items-center justify-center border-2 border-dashed border-gray-300", children: /* @__PURE__ */ jsxDEV8("div", { className: "text-center text-gray-500", children: [
            /* @__PURE__ */ jsxDEV8("span", { className: "material-icons text-3xl md:text-4xl mb-1 md:mb-2", children: sport.icon }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 87,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ jsxDEV8("p", { className: "text-xs font-medium", children: [
              sport.name,
              "\u306E\u5199\u771F"
            ] }, void 0, !0, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 88,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ jsxDEV8("p", { className: "text-xs opacity-70 hidden sm:block", children: "\u753B\u50CF\u8FFD\u52A0\u4E88\u5B9A" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 89,
              columnNumber: 27
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 86,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 85,
            columnNumber: 23
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 84,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV8("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxDEV8("h3", { className: "font-semibold text-gray-900 text-base md:text-lg", children: sport.name }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 105,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDEV8("p", { className: "text-xs md:text-sm text-gray-600 leading-relaxed line-clamp-2", children: sport.description }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 106,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDEV8("div", { className: "flex items-center justify-between pt-1 md:pt-2", children: [
              /* @__PURE__ */ jsxDEV8("span", { className: "text-xs text-blue-600 font-medium", children: "\u8A73\u7D30\u3092\u898B\u308B \u2192" }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 108,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDEV8("span", { className: "material-icons text-base md:text-lg text-gray-400", children: sport.icon }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 109,
                columnNumber: 25
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 107,
              columnNumber: 23
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 104,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 81,
          columnNumber: 19
        }, this) }, `${sport.name}-${arrayIndex}-${index}`, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 80,
          columnNumber: 17
        }, this))
      ) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 70,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 62,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV8("div", { "data-section": "sports-track", className: "bg-white/90 backdrop-blur-sm border border-white/30 rounded-xl p-6 shadow-xl mb-8", children: [
      /* @__PURE__ */ jsxDEV8("h2", { className: "flex items-center text-xl font-semibold text-gray-900 mb-6", children: [
        /* @__PURE__ */ jsxDEV8("span", { className: "material-icons text-2xl mr-3 text-green-600 drop-shadow-sm", children: "directions_run" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 123,
          columnNumber: 11
        }, this),
        "\u7AF6\u6280\u7A2E\u76EE"
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 122,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV8("div", { className: "relative overflow-hidden", children: /* @__PURE__ */ jsxDEV8("div", { className: "flex gap-3 md:gap-4 scroll-container auto-scroll", children: [...Array(2)].map(
        (_, arrayIndex) => [
          { name: "100m\u8D70", description: "\u77ED\u8DDD\u96E2\u8D70\u306E\u738B\u9053\u3001\u77AC\u767A\u529B\u3068\u30B9\u30D4\u30FC\u30C9\u306E\u7AF6\u6280", icon: "directions_run" },
          { name: "\u30EA\u30EC\u30FC", description: "\u30C1\u30FC\u30E0\u30EF\u30FC\u30AF\u304C\u52DD\u8CA0\u3092\u5206\u3051\u308B\u56E3\u4F53\u7AF6\u6280", icon: "group_work" },
          { name: "\u8D70\u308A\u5E45\u8DF3\u3073", description: "\u52A9\u8D70\u304B\u3089\u306E\u30B8\u30E3\u30F3\u30D7\u3067\u8DDD\u96E2\u3092\u7AF6\u3046", icon: "sports" },
          { name: "\u7DB1\u5F15\u304D", description: "\u529B\u3068\u606F\u3092\u5408\u308F\u305B\u305F\u30C1\u30FC\u30E0\u6226", icon: "fitness_center" },
          { name: "\u9A0E\u99AC\u6226", description: "\u4F1D\u7D71\u7684\u306A\u4F53\u80B2\u796D\u306E\u82B1\u5F62\u7AF6\u6280", icon: "groups" }
        ].map((sport, index) => /* @__PURE__ */ jsxDEV8("div", { className: "flex-none w-56 sm:w-64 md:w-72", children: /* @__PURE__ */ jsxDEV8("div", { className: "bg-white border border-gray-200 rounded-xl p-3 md:p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1", children: [
          /* @__PURE__ */ jsxDEV8("div", { className: "relative w-full h-32 sm:h-36 md:h-40 mb-3 md:mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-green-100 to-emerald-100", children: /* @__PURE__ */ jsxDEV8("div", { className: "absolute inset-0 flex items-center justify-center border-2 border-dashed border-gray-300", children: /* @__PURE__ */ jsxDEV8("div", { className: "text-center text-gray-500", children: [
            /* @__PURE__ */ jsxDEV8("span", { className: "material-icons text-3xl md:text-4xl mb-1 md:mb-2", children: sport.icon }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 146,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ jsxDEV8("p", { className: "text-xs font-medium", children: [
              sport.name,
              "\u306E\u5199\u771F"
            ] }, void 0, !0, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 147,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ jsxDEV8("p", { className: "text-xs opacity-70 hidden sm:block", children: "\u753B\u50CF\u8FFD\u52A0\u4E88\u5B9A" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 148,
              columnNumber: 27
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 145,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 144,
            columnNumber: 23
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 143,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV8("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxDEV8("h3", { className: "font-semibold text-gray-900 text-base md:text-lg", children: sport.name }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 164,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDEV8("p", { className: "text-xs md:text-sm text-gray-600 leading-relaxed line-clamp-2", children: sport.description }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 165,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDEV8("div", { className: "flex items-center justify-between pt-1 md:pt-2", children: [
              /* @__PURE__ */ jsxDEV8("span", { className: "text-xs text-green-600 font-medium", children: "\u8A73\u7D30\u3092\u898B\u308B \u2192" }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 167,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDEV8("span", { className: "material-icons text-base md:text-lg text-gray-400", children: sport.icon }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 168,
                columnNumber: 25
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 166,
              columnNumber: 23
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 163,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 140,
          columnNumber: 19
        }, this) }, `${sport.name}-${arrayIndex}-${index}`, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 139,
          columnNumber: 17
        }, this))
      ) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 129,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 127,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 121,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV8("div", { "data-section": "access", className: "bg-white/90 backdrop-blur-sm border border-white/30 rounded-xl p-4 md:p-6 shadow-xl", children: [
      /* @__PURE__ */ jsxDEV8("h2", { className: "flex items-center text-lg md:text-xl font-semibold text-gray-900 mb-4", children: [
        /* @__PURE__ */ jsxDEV8("span", { className: "material-icons text-xl md:text-2xl mr-2 md:mr-3 text-red-600 drop-shadow-sm", children: "location_on" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 181,
          columnNumber: 11
        }, this),
        "\u30A2\u30AF\u30BB\u30B9\u30FB\u4F1A\u5834\u6848\u5185"
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 180,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV8("div", { className: "mb-4 rounded-lg overflow-hidden shadow-md", children: /* @__PURE__ */ jsxDEV8("div", { className: "w-full h-48 sm:h-56 md:h-64 bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center border-2 border-dashed border-gray-300", children: /* @__PURE__ */ jsxDEV8("div", { className: "text-center text-gray-600 px-4", children: [
        /* @__PURE__ */ jsxDEV8("span", { className: "material-icons text-3xl md:text-4xl mb-2 text-gray-500", children: "map" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 190,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV8("p", { className: "text-xs md:text-sm font-medium", children: "Google Maps \u304C\u3053\u3053\u306B\u8868\u793A\u3055\u308C\u307E\u3059" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 191,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV8("p", { className: "text-xs opacity-70 mt-1 hidden sm:block", children: "\u5B9F\u969B\u306E\u30DE\u30C3\u30D7\u3092\u57CB\u3081\u8FBC\u3080\u969B\u306F\u3053\u306E\u30D7\u30EC\u30FC\u30B9\u30DB\u30EB\u30C0\u30FC\u3092\u7F6E\u304D\u63DB\u3048\u3066\u304F\u3060\u3055\u3044" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 192,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 189,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 188,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 186,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV8("div", { className: "space-y-3 md:space-y-4", children: [
        /* @__PURE__ */ jsxDEV8("div", { className: "flex items-start text-xs md:text-sm text-gray-700", children: [
          /* @__PURE__ */ jsxDEV8("span", { className: "material-icons text-base md:text-lg mr-2 md:mr-3 mt-0.5 text-red-500 flex-shrink-0", children: "directions_transit" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 214,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV8("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxDEV8("p", { className: "font-medium", children: "\u96FB\u8ECA\u3067\u304A\u8D8A\u3057\u306E\u5834\u5408" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 216,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV8("p", { className: "text-xs text-gray-600 mt-1", children: "\u25CB\u25CB\u99C5\u304B\u3089\u5F92\u6B6910\u5206" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 217,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 215,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 213,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV8("div", { className: "flex items-start text-xs md:text-sm text-gray-700", children: [
          /* @__PURE__ */ jsxDEV8("span", { className: "material-icons text-base md:text-lg mr-2 md:mr-3 mt-0.5 text-blue-500 flex-shrink-0", children: "directions_car" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 221,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV8("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxDEV8("p", { className: "font-medium", children: "\u304A\u8ECA\u3067\u304A\u8D8A\u3057\u306E\u5834\u5408" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 223,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV8("p", { className: "text-xs text-gray-600 mt-1", children: "\u6821\u5185\u99D0\u8ECA\u5834\u3092\u3054\u5229\u7528\u304F\u3060\u3055\u3044" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 224,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 222,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 220,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV8("div", { className: "flex items-start text-xs md:text-sm text-gray-700", children: [
          /* @__PURE__ */ jsxDEV8("span", { className: "material-icons text-base md:text-lg mr-2 md:mr-3 mt-0.5 text-green-500 flex-shrink-0", children: "info" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 228,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV8("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxDEV8("p", { className: "font-medium", children: "\u6CE8\u610F\u4E8B\u9805" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 230,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV8("p", { className: "text-xs text-gray-600 mt-1", children: "\u5F53\u65E5\u306F\u6DF7\u96D1\u304C\u4E88\u60F3\u3055\u308C\u307E\u3059\u3002\u516C\u5171\u4EA4\u901A\u6A5F\u95A2\u306E\u3054\u5229\u7528\u3092\u304A\u52E7\u3081\u3057\u307E\u3059" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 231,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 229,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 227,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 212,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 179,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-RPVQKHN2.js", imports: ["/build/_shared/chunk-O4BRYNJ4.js", "/build/_shared/chunk-6XMTRBRU.js", "/build/_shared/chunk-KMHXRZOJ.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-XGOTYLZ5.js", "/build/_shared/chunk-U4FRFQSK.js", "/build/_shared/chunk-7M6SC7J5.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-YHAYPKCT.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-U4B5AWCN.js", imports: ["/build/_shared/chunk-KNFBFO7B.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/events._index": { id: "routes/events._index", parentId: "root", path: "events", index: !0, caseSensitive: void 0, module: "/build/routes/events._index-PM6LERLC.js", imports: ["/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-KNFBFO7B.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/tournaments.$eventId": { id: "routes/tournaments.$eventId", parentId: "root", path: "tournaments/:eventId", index: void 0, caseSensitive: void 0, module: "/build/routes/tournaments.$eventId-3TF4VPZT.js", imports: ["/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-KNFBFO7B.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "35e5dc06", hmr: { runtime: "/build/_shared/chunk-KMHXRZOJ.js", timestamp: 1758379310840 }, url: "/build/manifest-35E5DC06.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, v3_routeConfig: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_node_exports }, routes = {
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
//# sourceMappingURL=index.js.map
