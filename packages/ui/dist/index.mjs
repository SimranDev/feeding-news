// src/layout/Navbar/index.tsx
import { IoMdNotifications } from "react-icons/io";
import { IoLogoDesignernews } from "react-icons/io5";
import { jsx, jsxs } from "react/jsx-runtime";
function Navbar({}) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("nav", { className: "h-14 flex items-center px-2 justify-between", children: [
      /* @__PURE__ */ jsx("div", { className: "avatar", children: /* @__PURE__ */ jsx("div", { className: "w-11 rounded-full ring-2 ring-primary ring-offset-base-100 ring-offset-1", children: /* @__PURE__ */ jsx("img", { src: "https://loremflickr.com/320/240/man,avatar", alt: "something" }) }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 mx-auto", children: [
        /* @__PURE__ */ jsx(IoLogoDesignernews, { size: 40, title: "Feeding news" }),
        /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Feeding News" })
      ] }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(IoMdNotifications, { size: 26 }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "h-0.5 bg-gradient-to-r from-primary to-teal-400 via-rose-500" })
  ] });
}
export {
  Navbar
};
