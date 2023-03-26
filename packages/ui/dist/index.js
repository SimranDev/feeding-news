"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Navbar: () => Navbar
});
module.exports = __toCommonJS(src_exports);

// src/layout/Navbar/index.tsx
var import_io = require("react-icons/io");
var import_io5 = require("react-icons/io5");
var import_jsx_runtime = require("react/jsx-runtime");
function Navbar({}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", { className: "h-14 flex items-center px-2 justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "avatar", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-11 rounded-full ring-2 ring-primary ring-offset-base-100 ring-offset-1", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", { src: "https://loremflickr.com/320/240/man,avatar", alt: "something" }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center gap-1 mx-auto", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_io5.IoLogoDesignernews, { size: 40, title: "Feeding news" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "font-semibold", children: "Feeding News" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_io.IoMdNotifications, { size: 26 }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-0.5 bg-gradient-to-r from-primary to-teal-400 via-rose-500" })
  ] });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Navbar
});
