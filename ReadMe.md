# 1.这个项目最开始是直接从react教程中直接fork下载下来的工程拿来学习react的

# 2.学习到react编译器,能够在构建时候自动优化react应用(https://zh-hans.react.dev/learn/react-compiler/introduction),能够自动对组件和值进行记忆化,我根据react官网安装的中配置设置安装了react编译器但是怎么配置都是失效,运行useContextExp_26验证react编译器自动优化记忆渲染.js显示时候点击父组件的按钮子组件一直打印了,react dev中也没看到组件名称旁边的 ✨ 表情符号 ,咨询ai得到的解决方案记录:

- 根据package.json配置,推测是当前项目是"标准的标准的 Create React App"
  - 项目是标准的 Create React App (CRA)（使用 react-scripts），无法直接修改 Babel 和 Webpack 配置
  - 因此，必须通过 react-app-rewired + customize-cra（或 CRACO）来实现 React Compiler 的配置

  ```
  // 实现当前工程正确安装依赖和配置使用react编译器自动优化管理步骤:
  // 1. 安装必要的工具
  pnpm install -D babel-plugin-react-compiler             // 安装react 编译器
  pnpm install -D react-app-rewired customize-cra         // 安装react-app-rewired customize-cra  用来配置react编译器生效配置

  // 2.创建配置文件 在项目根目录新建文件 config-overrides.js：
  // config-overrides.js
  const { override, addBabelPlugin } = require("customize-cra");

  module.exports = override(
    // 把 React Compiler 放在最前面
    addBabelPlugin([
      "babel-plugin-react-compiler",
      {
        target: "19",                    // 因为你用的是 React 19
        // sources: (filename) => filename.includes("src"), // 可选：只对 src 目录生效
      },
    ])
  );

  // 3.（可选但强烈推荐）添加 ESLint 规则
  pnpm install -D eslint-plugin-react-compiler
  然后在你的 .eslintrc.strict.js（或 .eslintrc.js）中加入：JavaScript
  module.exports = {
    // ... 你的原有配置
    plugins: ["react-compiler"],
    rules: {
      "react-compiler/react-compiler": "error"   // 或 "warn"
    }
  };
  // 4. 运行验证,如果运行报错啥的,可以删除pnpm-lock.yaml   node_modules 后冲新pmpm install后再次运行验证,此时验证结果组件右侧能看到✨ 表情符号

  // 5. 如果还是不行备选方案（CRACO）:如果 react-app-rewired 有问题，也可以换用 CRACO（更现代）：Bash
  npm install -D @craco/craco
  然后创建 craco.config.js：
  module.exports = {
  babel: {
    plugins: [
      ["babel-plugin-react-compiler", { target: "19" }]
    ]
  }
  };
  并把package.json中的 scripts 改成：
  "start": "craco start",
  "build": "craco build"
  // 然后测试验证
  ```


- 怎么知道当前项目是标准的 Create React App（react-scripts）
  - 主要判断依据（非常典型的标准 CRA 特征）：
    - 1.存在 react-scripts：
      ```
      "dependencies": {
        "react-scripts": "^5.0.1",
        ...
      }
      ```
    - 2.标准的 scripts 配置：
    ```
    "scripts": {
      "start": "react-scripts start",
      "build": "react-scripts build",
      "test": "react-scripts test",
      "eject": "react-scripts eject"
    }
    ```
    - 3.没有暴露 Webpack/Babel 配置
      - 项目里没有 webpack.config.js、babel.config.js、vite.config.js 等自定义配置文件。
      - 这正是 Create React App 的核心设计：把所有构建工具（Webpack + Babel + ESLint 等）都隐藏在 react-scripts 里面

