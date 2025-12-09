// src/index.tsx
import { useEffect } from "react";
import { jsx } from "react/jsx-runtime";
function ScriptLoader({ src, onLoad }) {
  useEffect(() => {
    const scripts = Array.from(document.querySelectorAll("script"));
    if (scripts.find((script2) => script2.src === src)) {
      onLoad();
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => onLoad();
    document.body.appendChild(script);
  }, [src, onLoad]);
  return /* @__PURE__ */ jsx("span", { style: { display: "none" }, "data-purpose": "Dummy element created by react-isomorphic-scriptloader" });
}
export {
  ScriptLoader as default
};
//# sourceMappingURL=index.mjs.map