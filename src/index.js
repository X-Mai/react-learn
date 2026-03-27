import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

// import App from "./App";

// const root = createRoot(document.getElementById("root"));
// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

// App.js 是多余的，可以直接删除，并在 index.js 中直接引用 App.tsx
//  为什么会有 App.js？  这通常是历史遗留 / 过渡阶段的产物
// import App from "./App.tsx"; // 或者 './App'，打包工具会自动识别
import App from "./useContextExp.js";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>,

  // <App />,
);
