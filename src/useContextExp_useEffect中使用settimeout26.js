import { useState, useEffect } from "react";

function Playground() {
  console.log("xiaomai Playground...");
  const [text, setText] = useState("a");

  useEffect(() => {
    function onTimeout() {
      console.log("⏰ " + text);
    }

    console.log('🔵 调度 "' + text + '" 日志');
    const timeoutId = setTimeout(onTimeout, 3000);

    return () => {
      console.log('🟡 取消 "' + text + '" 日志');
      clearTimeout(timeoutId);
    };
  }, [text]);

  return (
    <>
      <label>
        日志内容：{" "}
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </label>
      <h1>{text}</h1>
    </>
  );
}

export default function App() {
  console.log("xiaomai app.......");
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? "卸载" : "挂载"}组件
      </button>
      {show && <hr />}
      {show && <Playground />}
    </>
  );
}
