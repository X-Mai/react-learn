import { useState, useEffect, useMemo } from "react";

// 全局变量（todos 工具函数，直接写在当前文件）
let nextId = 0;
let calls = 0;

// 获取过滤后的待办事项
export function getVisibleTodos(todos, showActive) {
  console.log(`getVisibleTodos() 被调用了 ${++calls} 次`);
  const activeTodos = todos.filter((todo) => !todo.completed);
  const visibleTodos = showActive ? activeTodos : todos;
  return visibleTodos;
}

// 创建新待办
export function createTodo(text, completed = false) {
  return {
    id: nextId++,
    text,
    completed,
  };
}

// 初始数据
export const initialTodos = [
  createTodo("买苹果", true),
  createTodo("买橘子", true),
  createTodo("买胡萝卜"),
];

// 主组件
export default function TodoList() {
  console.log("xiaomai TodoList...");

  const [todos, setTodos] = useState(initialTodos);
  const [showActive, setShowActive] = useState(false);
  const [text, setText] = useState("");

  // 昂贵的计算不应该使用effect  => 原因:每次组件渲染成功后执行里面的逻辑更新visibleTodos时候会再次出发TodoList组件渲染浪费性能,而应该直接使用缓存计算结果
  // const [visibleTodos, setVisibleTodos] = useState([]);
  // useEffect(() => {
  //   setVisibleTodos(getVisibleTodos(todos, showActive));
  // }, [todos, showActive]);

  // 使用 useMemo 缓存计算结果，避免重复执行
  const visibleTodos = useMemo(() => {
    return getVisibleTodos(todos, showActive);
  }, [todos, showActive]);

  // 添加事项
  function handleAddClick() {
    if (!text.trim()) return; // 空内容不添加
    setTodos([...todos, createTodo(text)]);
    setText("");
  }

  return (
    <>
      <label style={{ marginRight: 10 }}>
        <input
          type="checkbox"
          checked={showActive}
          onChange={(e) => setShowActive(e.target.checked)}
        />
        只显示未完成的事项
      </label>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAddClick()}
        placeholder="输入待办事项"
        style={{ margin: "0 10px" }}
      />
      <button onClick={handleAddClick}>添加</button>
      <ul style={{ paddingLeft: 20 }}>
        {visibleTodos.map((todo) => (
          <li key={todo.id} style={{ margin: "5px 0" }}>
            {todo.completed ? <s>{todo.text}</s> : todo.text}
          </li>
        ))}
      </ul>
    </>
  );
}
