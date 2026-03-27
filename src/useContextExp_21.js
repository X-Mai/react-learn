import { useState, useRef } from "react";
import { flushSync } from "react-dom";

export default function TodoList() {
  const listRef = useRef(null);
  const [text, setText] = useState("");
  const [todos, setTodos] = useState(initialTodos);
  function handleAdd() {
    const newTodo = { id: nextId++, text: text };
    // 快照方式更新dom  执行后不会立即更新DOM
    // setText("");
    // setTodos([...todos, newTodo]);
    // 解决列表滚动到最后一个元素列表时候 结果总是在最终显示最后一列的前面一列  使用flushSync强制React同步刷新DOM
    flushSync(() => {
      setText("");
      setTodos([...todos, newTodo]);
    });
    listRef.current.lastChild.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }

  return (
    <>
      <button onClick={handleAdd}>添加</button>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <ul ref={listRef}>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </>
  );
}

let nextId = 0;
let initialTodos = [];
for (let i = 0; i < 20; i++) {
  initialTodos.push({
    id: nextId++,
    text: "待办 #" + (i + 1),
  });
}
