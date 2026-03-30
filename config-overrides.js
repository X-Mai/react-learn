// config-overrides.js
const { override, addBabelPlugin } = require("customize-cra");

module.exports = override(
  // 把 React Compiler 放在最前面
  addBabelPlugin([
    "babel-plugin-react-compiler",
    {
      target: "19", // 因为你用的是 React 19
      // sources: (filename) => filename.includes("src"), // 可选：只对 src 目录生效
    },
  ]),
);
