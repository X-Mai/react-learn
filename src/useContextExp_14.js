import React from "react";
import { useState } from "react";

let guest = 0;

function Cup() {
  // Bad：正在更改预先存在的变量！
  guest = guest + 1;
  return <h2>Tea cup for guest #{guest}</h2>;
}

// export default function TeaSet() {
//   console.log("xiaomai TeaSet");
//   // return (
//   //   <>
//   //     <Cup />
//   //     <Cup />
//   //     <Cup />
//   //   </>
//   // );

//   function handClick() {
//     alert("你点击了我");
//   }
//   return <button onClick={handClick}>按钮</button>;
// }

// export default function Toolbar() {
//   const divStyle = {
//     padding: "10px",
//     border: "1px solid #ccc",
//     backgroundColor: "red",
//   };
//   return (
//     <div
//       style={divStyle}
//       className="Toolbar"
//       onClick={() => {
//         alert("你点击了 toolbar ！");
//       }}
//     >
//       <button
//         onClick={(e) => {
//           e.stopPropagation();
//           alert("正在播放！");
//         }}
//       >
//         播放电影
//       </button>
//       <button onClick={() => alert("正在上传！")}>上传图片</button>
//     </div>
//   );
// }

// export default function test() {
//   return (
//     <div
//       onClickCapture={() => {
//         console.log("xiaomai 这里首先会执行");
//       }}
//       onClick={() => {
//         console.log("xiaomai div点击点击事件");
//       }}
//     >
//       <button
//         onClick={(e) => {
//           e.stopPropagation();
//           console.log("xiaomai button 这里的点击事件会执行了");
//         }}
//       >
//         点我
//       </button>
//     </div>
//   );
// }

// export default function Signup() {
//   console.log("xiaomai Signup....");
//   return (
//     <form
//       onSubmit={(e) => {
//         e.preventDefault();
//         e.stopPropagation()
//         alert("提交表单！");
//       }}
//     >
//       <input />
//       <button >发送</button>
//     </form>
//   );
// }

export default function test() {
  console.log("xiaomai test....");
  const [test1, setTest1] = useState(0);
  const [test2, setTest2] = useState(5);

  return (
    <>
      <div> test1:{test1} </div>
      <div> test2:{test2} </div>
      <button onClick={() => {
          setTest1(0.00001)
          setTest1(0.00005)
      }}>测试</button>
    </>
  );
}
