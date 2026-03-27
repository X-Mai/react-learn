// import { useCallback } from "react"; // 需导入

// /*----------- 未声明 props 类型，TS 会推断 title 为 any 类型   这样用ts的默认开启严格模式是开启的,所以vscode会提示红色错误 但是实际能运行.  如果想让自动推断类型且不红色解决办法:tsconfig.jso中进行配置关闭严格模式   不推荐关闭 -----------*/
// // function MyButton({title}) {
// //   return (
// //     <button>{title}</button>
// //   )
// // }

// // 内联类型注解 直接在参数后声明 props 类型
// // function MyButton({ title }: { title: string }) {
// //   return (
// //     <button>{title}</button>
// //   );
// // }

// /**-----------  接口 (更易维护，推荐多 props 时用) ----------- */
// // 定义独立的props类型,可读性更高
// // interface MyButtonProps {
// //   title: string;
// // }
// // function MyButton({title}: MyButtonProps) {
// //   return (
// //     <button>{title}</button>
// //   )
// // }

// // export default function MyApp() {
// //   return (
// //     <div>
// //       <h1>欢迎来到我的应用</h1>
// //       <MyButton title="我是一个按钮" />
// //     </div>
// //   );
// // }

// /**----------- 上面的MyButton中通过prop传递参数在父组件中使用时候必须要设置,现在如何将里面的prop参数设置为可选,父组件调用时候不用传递 -----------*/
// // interface MyButtonProps {
// //   title? :string;
// //   disabled?: boolean;
// //   // 接口中定义参数是否能设置默认值: 不能,接口成员不能有初始值设定项
// // }
// // // function MyButton({title}:MyButtonProps) {
// // //   return (
// // //     <button>{title}</button>
// // //   )
// // // }
// // function MyButton({title='可选参数父组件没有传值时默认值,',disabled=false}: MyButtonProps) {
// //   return (
// //     <button disabled={disabled}>{title}</button>
// //   )
// // }
// // export default function MyApp() {
// //   return (
// //     <div>
// //       <h1>欢迎来到我的应用</h1>
// //       <MyButton title="可选参数设置传值" />
// //       <MyButton />
// //     </div>
// //   );
// // }

// /**-----------使用type(类型别名)来描述props, 和interface功能高度相似 ----------- */
// // 用 type 定义 props 类型（替代 interface）
// type MyButtonProps = {
//   title: string; // 必传 string 类型
//   disabled?: boolean; // 可选传disabled
// };
// function MyButton({ title, disabled = false }: MyButtonProps) {
//   const test = { ...{ count: 88 }, count: 3 };
//   console.log("xiaomai test====:", test);

//   // function onHandleClick(){
//   //    console.log('xiaomai 按钮点击了',{disabled})
//   // }
//   // const onHandleClick = ()=> {
//   //   console.log('xiaomai 按钮点击了',{disabled})
//   // }
//   const onHandleClick = useCallback(() => {
//     console.log("xiaomai 按钮点击了", { disabled });
//   }, [disabled]);

//   return (
//     <button disabled={disabled} onClick={onHandleClick}>
//       {title}
//     </button>
//     // 或者写成使用箭头函数
//     // <button disabled={disabled} onClick={()=>onHandleClick()}>{title}</button>
//   );
// }
// export default function MyApp() {
//   return (
//     <div>
//       <h1>欢迎来到我的应用</h1>
//       <MyButton title="测试1" />
//       <MyButton title="测试2" disabled={true} />
//     </div>
//   );
// }

// // interface test {

// // }
// // interface test {

// // }

// // type test2 = {

// // }
// // type test2 = {

// // }

// /*----------- 主要引用组件 - 显示声明返回类型 -----------*/
// // export default function MyApp():React.ReactElement {
// //   return (
// //     <div>
// //       <h1>欢迎来到我的应用</h1>
// //       <MyButton title="我是一个按钮" />
// //     </div>
// //   );
// // }

// import { useState } from "react";

// function Header({ title }: { title: any }) {
//   return <h1>{title ? title : "Default title"}</h1>;
// }

// // function Header({ title = "" }) {
// //   return <h1>{title ? title : "Default title"}</h1>;
// // }

// export default function HomePage() {
//   console.log("xiaomai HomePage......");
//   const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];

//   const [likes, setLikes] = useState(0);

//   function handleClick() {
//     setLikes(likes + 1);
//   }

//   return (
//     <div>
//       <Header title="Develop. Preview. Ship." />
//       <ul>
//         {names.map((name) => (
//           <li key={name}>{name}</li>
//         ))}
//       </ul>

//       <button onClick={handleClick}>Like ({likes})</button>
//     </div>
//   );
// }

export default function HomePage() {
  console.log("xiaomai HomePage......");
  return <div>测试</div>;
}
