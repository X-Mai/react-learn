import { useReducer } from "react";

// 1. 定义 State 接口（和你之前的代码一样）
interface State {
  count: number;
}

// 2. 定义 Action 类型（和你之前的代码一样）
type CounterAction =
  | { type: "reset" }
  | { type: "setCount"; value: State["count"] };

// 3. 定义 reducer 函数（和你之前的代码一样）
function stateReducer(state: State, action: CounterAction): State {
  switch (action.type) {
    case "reset":
      return { count: 0 };
    case "setCount":
      return { ...state, count: action.value };
    default:
      throw new Error("Unknown action");
  }
}

// 4. 组件里使用 useReducer<State> 泛型写法（图里的核心部分）
const initialState = { count: 0 }; // 注意：这里不再需要写 :State 了

export default function App() {
  // const [state, dispatch] = useReducer(stateReducer, initialState);
  // ✅ 关键：给 useReducer 传入泛型 <State>
  const [state, dispatch] = useReducer<State, any>(stateReducer, initialState);
  const addFive = () => dispatch({ type: "setCount", value: state.count + 5 });
  const reset = () => dispatch({ type: "reset" });

  return (
    <div>
      <h1>欢迎来到我的计数器</h1>
      <p>计数： {state.count}</p>
      <button onClick={addFive}>加 5</button>
      <button onClick={reset}>重置</button>
    </div>
  );
}
