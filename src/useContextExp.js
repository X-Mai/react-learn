import { useState, useEffect, useRef, useEffectEvent } from "react";

export default function Counter() {
  const [delay, setDelay] = useState(1000);
  // const count = 119;
  const count = useCounter(delay);

  const [show, setShow] = useState(true);
  return (
    <>
      <label>
        Tick duration: {delay} ms
        <br />
        <input
          type="range"
          value={delay}
          min="10"
          max="2000"
          onChange={(e) => setDelay(Number(e.target.value))}
        />
      </label>
      <hr />
      {show && <Test></Test>}
      {show && <Test222></Test222>}
      {show && <h1>Ticks: {count}</h1>}
      {/* {show && <h1>Ticks</h1>} */}

      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {show && "不"}显示Tick
      </button>
    </>
  );
}

function Test() {
  // const count = useCounter(1000);
  const count = 1231321;

  console.log("xiaomai Test...");
  return <div>"测试组件"{count}</div>;
}

function useCounter(delay) {
  console.log("xiaomai useCounter....");
  const [count, setCount] = useState(0);
  const delayRef = useRef(delay);
  const tick = useEffectEvent(() => {
    // setTimeout(tick, delay);
    // setCount((c) => c + 1);
    console.log("xiaomai useEffectEvent中延迟任务执行了...");
  });

  // useEffect(() => {
  //   delayRef.current = delay;
  // }, [delay]);

  useEffect(() => {
    console.log("xiaomai 进入了useCounter effect执行逻辑........");
    // const id = setInterval(() => {
    //   setCount(c => c + 1);
    // }, delayRef.current);

    // let id;
    // // 递归 setTimeout 来模拟 setInterval
    // const tick = ()=>{
    //   id = setTimeout(tick, delayRef.current);
    //   setCount(c => c + 1);
    // }
    // id = setTimeout(tick, delayRef.current);
    // return;
    // id = tick();

    let id;
    tick();

    return () => {
      console.log("xiaomai useEffect清理函数执行了...");
      clearInterval(id);
    };
  }, []);

  return count;
}

function Test222(delay) {
  console.log("xiaomai Test222....");
  return <div>测试</div>;
}
