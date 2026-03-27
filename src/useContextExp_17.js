import { useState } from "react";
import { useRef } from "react";

export default function Counter() {
  let ref = useRef(0);
  let ref2 = useRef(false);
  let ref3 = useRef("字符串");
  let ref4 = useRef([1, "2"]);
  let ref5 = useRef({
    key1: "11111",
    key2: "22222",
  });
  console.log("xiaomai counter,,,,,", ref, ref2, ref3, ref4, ref5);

  const [test, setTest] = useState(false);
  function handleClick() {
    console.log("xiaomai handleClick ===:", ref.current);
    ref.current = ref.current + 1;

    if (ref.current === 3) {
      setTest(true);
      return;
    }
    if (ref.current === 5) {
      setTest(false);
      return;
    }
    alert("你点击了 " + ref.current + " 次!");
  }

  if (test) return <div>显示div</div>;

  return <button onClick={handleClick}>点我！</button>;
}
