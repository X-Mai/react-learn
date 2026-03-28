// useContextExp.tsx （推荐验证 React Compiler 自动 memo 的完整版）
import { useState } from "react";

function ExpensiveComponent() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);

  // 直接写昂贵计算（纯计算，无副作用）
  // React Compiler 应该自动 memo 这段：只在 count 变化时重新执行
  // let expensiveValue = 0;
  // for (let i = 0; i < 1000000000; i++) {
  //   expensiveValue += count * 2;
  // }
  const expensiveValue = computeExpensiveValue(count);

  // 可选：临时加日志观察是否重新计算（Compiler 生效时，otherState 变不会打印）
  console.log("昂贵计算执行了 (count =", count, ")");

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", margin: "20px" }}>
      <h3>React Compiler 自动 memo 验证</h3>
      <p>
        <strong>测试方法：</strong>
      </p>
      <ul>
        <li>点击“点击计数” → 应该看到昂贵值更新（很大数字）</li>
        <li>
          点击“增加 Other”多次 → 如果 Compiler
          生效：无卡顿、计算不重新跑（如果加了日志则不打印）
        </li>
      </ul>
      <p>
        <strong>最佳确认方式：</strong> 打开 React DevTools → Components 面板 →
        看组件是否有 <strong>Memo ✨</strong> 星星标记
      </p>

      <button onClick={() => setCount((c) => c + 1)}>点击计数: {count}</button>
      <button
        onClick={() => setOtherState((o) => o + 1)}
        style={{ marginLeft: "16px" }}
      >
        增加 Other: {otherState}
      </button>

      <div style={{ marginTop: "20px", fontWeight: "bold", fontSize: "18px" }}>
        昂贵值: {expensiveValue.toLocaleString()} （预期：count × 2 ×
        1,000,000）
      </div>
    </div>
  );
}

// 提取到外部的纯函数（纯计算，无副作用）
function computeExpensiveValue(count) {
  console.log("xiaomai computeExpensiveValue...");
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

export default App;