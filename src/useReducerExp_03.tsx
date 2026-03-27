/**
 * createContext是什么?
 * createContext 是 React 提供的跨组件传递数据的 API，用来解决「props 层层传递」（prop drilling）的问题
 */

import { createContext, ReactNode, useContext, useState } from "react";

// 1. 定义数据类型（TypeScript 场景）
type Theme = "light" | "dark" | "system";

// 创建 Context，指定类型和默认值（默认值仅在无Provider时生效）
const ThemeContext = createContext<Theme>("system");

// 2. 封装一个自定义 Hook（方便子组件使用）  用于读取主题
const useGetTheme = () => useContext(ThemeContext); // useContext(Context)：这是「取数据」的钩子

// 创建主题消费容器组件
interface ThemeConsumerProps {
  children: (theme: Theme) => ReactNode; // 接收一个函数作为子元素，参数是主题值
}

function ThemeConsumer({ children }: ThemeConsumerProps) {
  const theme = useGetTheme();
  return <>{children(theme)}</>;
}

// 根组件
export default function MyApp() {
  const [theme, setTheme] = useState<Theme>("light");
  console.log("xiaomai MyApp...", theme);
  const onHandleClick = () => {
    console.log("xiaomai onHandleClick...");
    setTheme("dark");
    // const theme2222 = useGetTheme();        // 注意:hook 只能在函数组件的顶层使用  如果使用运行起来在浏览器会报错
  };
  return (
    // <ThemeContext value={theme}>
    //   <MyComponent />
    // </ThemeContext>

    // <MyComponent onComponentClick={onHandleClick} />

    // <ThemeContext value={theme}>
    //   <MyComponent onComponentClick={onHandleClick} />
    // </ThemeContext>

    <ThemeContext.Provider value={theme}>
      <MyComponent onComponentClick={onHandleClick} />
    </ThemeContext.Provider>
  );
}

//  子组件（无需手动调用 useGetTheme）
function MyComponent({ onComponentClick }: any) {
  return (
    <div>
      <h3>子组件</h3>
      <ThemeConsumer
        children={(theme) => {
          return <p onClick={onComponentClick}>当前主题：{theme}</p>;
        }}
      ></ThemeConsumer>
      <MyButton />
    </div>
  );
}

// 孙组件（同样无需手动调用 useGetTheme）
function MyButton() {
  return (
    <>
      <h3 className="sunzi">孙组件</h3>
      {/* 简化版本写法(箭头函数的) */}
      <ThemeConsumer>{(theme) => <button>{theme}</button>}</ThemeConsumer>
    </>
  );
}
