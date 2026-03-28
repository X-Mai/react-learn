import { useState, useMemo } from "react";
function ExpensiveComponent() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0); // 添加这个来测试

  // //手动优化: 模拟耗时的昂贵计算，触发编译器优化,运行点击增加other响应很快,应该是手动生效
  // const expensiveValue = useMemo(() => {
  //   console.log("计算昂贵值...");
  //   let result = 0;
  //   // 增加计算量，让编译器更易识别优化价值
  //   for (let i = 0; i < 1000000000; i++) {
  //     result += count * 2;
  //   }
  //   return result;
  // }, [count]);

  // 删掉 useMemo，仅保留计算逻辑,运行点击增加other看到迟钝,推测react编译器没有生效
  const expensiveValue = (() => {
    // console.log("计算昂贵值...");
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += count * 2;
    }
    return result;
  })();

  // 删掉 useMemo，计算逻辑抽取到方法中,运行点击增加other看到迟钝,推测react编译器没有生效
  // const expensiveValue = computeExpensiveValue(count);

  // 子组件直接内联
  const Child = ({ value = 100 }) => {
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

function computeExpensiveValue(count) {
  let result = 0;
  for (let i = 0; i < 1000000000; i++) {
    result += count * 2;
  }
  return result;
}

function App() {
  return (
    <div className="App">
      <h2>React Compiler 验证页面</h2>
      <ExpensiveComponent />
    </div>
  );
}

export default ExpensiveComponent;
