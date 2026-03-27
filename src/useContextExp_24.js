import { useState, useEffect } from "react";
import { createConnection } from "./chat.js";

export default function ChatRoom() {
  console.log("xiaomai ChatRoom...");

  const [clickNum, setclickNum] = useState(0);

  function onHandClick() {
    setclickNum(clickNum + 1); // ✅ 正确
  }

  useEffect(() => {
    console.log("ChatRoom useEffect....");
    const connection = createConnection();
    connection.connect();

    // 当开发环境严格模式情况下,第一次渲染后的组件会卸载,卸载时候会自动触发清理函数 
    return () => {
      console.log("xiaomai connection disconnect...");
      connection.disconnect();
    };
  }, []);
  return (
    <div>
      <h1>欢迎前来聊天！</h1>
      <button onClick={onHandClick}>点我次数{clickNum}</button>
    </div>
  );
}
