import { useMemo, useState } from "react";

// 1. 定义用于验证编译器的昂贵计算组件
function ExpensiveComponent() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0); // 添加这个来测试

  //手动优化: 模拟耗时的昂贵计算，触发编译器优化
  // const expensiveValue = useMemo(() => {
  //   console.log("计算昂贵值...");
  //   let result = 0;
  //   // 增加计算量，让编译器更易识别优化价值
  //   for (let i = 0; i < 1000000000; i++) {
  //     result += count * 2;
  //   }
  //   return result;
  // }, [count]);

  // // 删掉 useMemo，仅保留计算逻辑
  // const expensiveValue = (() => {
  //   console.log("计算昂贵值...");
  //   let result = 0;
  //   for (let i = 0; i < 1000000000; i++) {
  //     result += count * 2;
  //   }
  //   return result;
  // })();
  const expensiveValue = computeExpensiveValue(count);

  // 子组件直接内联
  const Child = ({ value = 100 }: { value: number }) => {
    return <div>昂贵值: {value}</div>;
  };

  return (
    <div style={{ padding: "20px" }}>
      <h3>React 编译器验证组件</h3>
      <button onClick={() => setCount((c) => c + 1)}>点击计数: {count}</button>
      <button onClick={() => setOtherState((o) => o + 1)}>
        增加 Other: {otherState}
      </button>

      <Child value={expensiveValue} />
      <p>otherState={otherState}</p>
    </div>
  );
}

// 提取到外部的纯函数（纯计算，无副作用）
function computeExpensiveValue(count: number): number {
  let result = 0;
  for (let i = 0; i < 1000000; i++) {
    result += count * 2;
  }
  return result;
}

// 2. 应用根组件（仅导出，由框架自动挂载）
function App() {
  // return (
  //   <div className="App">
  //     <h2>React 编译器验证页面</h2>
  //     <ExpensiveComponent />
  //   </div>
  // );

  const backgroundColor = "black";
  return (
    <ul
      style={{
        backgroundColor: backgroundColor,
        color: "pink",
      }}
    >
      <li>Improve the videophone</li>
      <li>Prepare aeronautics lectures</li>
      <li>Work on the alcohol-fuelled engine</li>
    </ul>
  );
}

// 仅导出根组件，去掉手动挂载逻辑（交给框架处理）
export default App;

// // useContextExp.tsx （推荐验证 React Compiler 自动 memo 的完整版）
// import { useState } from "react";

// function ExpensiveComponent() {
//   const [count, setCount] = useState(0);
//   const [otherState, setOtherState] = useState(0);

//   // 直接写昂贵计算（纯计算，无副作用）
//   // React Compiler 应该自动 memo 这段：只在 count 变化时重新执行
//   // let expensiveValue = 0;
//   // for (let i = 0; i < 1000000000; i++) {
//   //   expensiveValue += count * 2;
//   // }
//   const expensiveValue = computeExpensiveValue(count);

//   // 可选：临时加日志观察是否重新计算（Compiler 生效时，otherState 变不会打印）
//   console.log("昂贵计算执行了 (count =", count, ")");

//   return (
//     <div style={{ padding: "20px", border: "1px solid #ccc", margin: "20px" }}>
//       <h3>React Compiler 自动 memo 验证</h3>
//       <p>
//         <strong>测试方法：</strong>
//       </p>
//       <ul>
//         <li>点击“点击计数” → 应该看到昂贵值更新（很大数字）</li>
//         <li>
//           点击“增加 Other”多次 → 如果 Compiler
//           生效：无卡顿、计算不重新跑（如果加了日志则不打印）
//         </li>
//       </ul>
//       <p>
//         <strong>最佳确认方式：</strong> 打开 React DevTools → Components 面板 →
//         看组件是否有 <strong>Memo ✨</strong> 星星标记
//       </p>

//       <button onClick={() => setCount((c) => c + 1)}>点击计数: {count}</button>
//       <button
//         onClick={() => setOtherState((o) => o + 1)}
//         style={{ marginLeft: "16px" }}
//       >
//         增加 Other: {otherState}
//       </button>

//       <div style={{ marginTop: "20px", fontWeight: "bold", fontSize: "18px" }}>
//         昂贵值: {expensiveValue.toLocaleString()} （预期：count × 2 ×
//         1,000,000）
//       </div>
//     </div>
//   );
// }

// // 提取到外部的纯函数（纯计算，无副作用）
// function computeExpensiveValue(count: number): number {
//   console.log("xiaomai computeExpensiveValue...");
//   let result = 0;
//   for (let i = 0; i < 1000000000; i++) {
//     result += count * 2;
//   }
//   return result;
// }

// function App() {
//   return (
//     <div className="App">
//       <h2>React Compiler 验证页面</h2>
//       <ExpensiveComponent />
//     </div>
//   );
// }

// export default App;
