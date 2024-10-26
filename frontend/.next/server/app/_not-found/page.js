const CHUNK_PUBLIC_PATH = "server/app/_not-found/page.js";
const runtime = require("../../chunks/ssr/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/ssr/node_modules_next_dist_7c608b._.js");
runtime.loadChunk("server/chunks/ssr/[root of the server]__adba9d._.js");
runtime.loadChunk("server/chunks/ssr/_1c1ab3._.js");
runtime.loadChunk("server/chunks/ssr/app_styles_global_c2c74e.css");
runtime.loadChunk("server/chunks/ssr/_2151e8._.js");
runtime.getOrInstantiateRuntimeModule("[project]/.next-internal/server/app/_not-found/page/actions.js [app-rsc] (ecmascript)", CHUNK_PUBLIC_PATH);
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/node_modules/next/dist/esm/build/templates/app-page.js?page=/_not-found/page { MODULE_0 => \"[project]/app/layout.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_1 => \"[project]/node_modules/next/dist/client/components/not-found-error.js [app-rsc] (ecmascript, Next.js server component)\" } [app-rsc] (ecmascript)", CHUNK_PUBLIC_PATH).exports;
