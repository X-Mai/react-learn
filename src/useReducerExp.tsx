
import { useReducer } from "react";

// 定义 State 接口：规定计数器状态的结构，只有一个 count 字段，类型是数字
interface State {
  count: number;
}

// 定义 CounterAction 类型：规定能触发状态变化的“动作”类型
type CounterAction =
  | { type: "reset" } // 动作1：重置，只有 type 标识，无额外数据
  | { type: "setCount"; value: State["count"] }; // 动作2：设置计数，有 type 标识 + value 字段（值的类型和 State 的 count 一致）

// 初始状态：count 初始值为 0，符合 State 接口规范
const initialState: State = { count: 0 };

/**
 *
 * @param state    当前状态
 * @param action   触发的动作
 * @returns        根据动作类型，返回新状态
 * 注意: reducer 函数永远不能直接修改原 state，必须返回一个「新的状态对象」（这就是为什么用 { ...state }）
 */
function stateReducer(state: State, action: CounterAction): State {
  // 根据动作的 type 执行不同的状态更新逻辑
  switch (action.type) {
    // 动作类型为 reset：返回初始状态（重置 count 为 0）
    case "reset":
      return initialState;
    // 动作类型为 setCount：更新 count 为 action 里的 value
    case "setCount":
      return { ...state, count: action.value };
    default:
      throw new Error("Unknown action");
  }
}

export default function App() {
  // 调用 useReducer：传入 reducer 函数 + 初始状态，返回 [当前状态, 触发动作的函数]
  const [state, dispatch] = useReducer(stateReducer, initialState);

  // 定义“加 5”的逻辑：调用 dispatch 触发 setCount 动作，value 是当前 count + 5
  const addFive = () => dispatch({ type: "setCount", value: state.count + 5 });
  // 定义“重置”的逻辑：调用 dispatch 触发 reset 动作
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






/**--------------- 上面的计数器是示例,上面逻辑简单最好使用useState实现,useState实现代码 ---------------*/
// import { useState } from "react";

// export default function App() {
//   // 用 useState 定义 count 状态和修改函数
//   const [count, setCount] = useState(0);

//   // 加 5 逻辑
//   const addFive = () => setCount(count + 5);
//   // 重置逻辑
//   const reset = () => setCount(0);

//   return (
//     <div>
//       <h1>欢迎来到我的计数器</h1>
//       <p>计数： {count}</p>
//       <button onClick={addFive}>加 5</button>
//       <button onClick={reset}>重置</button>
//     </div>
//   );
// }



/**
 * 为什么示例要用 useReducer?
 * useReducer 不是为「简单场景」设计的，而是为「状态逻辑变复杂」做准备。我们假设计数器要加功能（这是实际开发中很常见的需求），你就能看出区别
 * 场景1  计数器新增「加 1」「减 1」「加倍」功能;用 useState：需要写多个修改函数，逻辑散在组件里，越写越乱   ;用 useReducer：只需要扩展 action 类型和 reducer 逻辑，组件里只需要调用 dispatch，逻辑集中管理
 */


/**  总结:
 * 能用 useState 的场景: 状态是单个值（数字 / 布尔等）、修改逻辑简单（只有 1-2 种操作），优先用 useState，代码更简洁；
 * 该用 useReducer 的场景：状态是对象 / 多个关联值、修改逻辑多（3 种以上）、需要集中管理状态修改，用 useReducer 更易维护
 */