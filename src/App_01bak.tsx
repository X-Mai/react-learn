// 未声明 props 类型，TS 会推断 title 为 any 类型   这样用ts的默认开启严格模式是开启的,所以vscode会提示红色错误 但是实际能运行.  如果想让自动推断类型且不红色解决办法:tsconfig.jso中进行配置关闭严格模式   不推荐关闭
// function MyButton({title}) {
//   return (
//     <button>{title}</button>
//   )
// }

// 内联类型注解 直接在参数后声明 props 类型
// function MyButton({ title }: { title: string }) {
//   return (
//     <button>{title}</button>
//   );
// }

// 接口/类型别名 (更易维护，推荐多 props 时用)
// 定义独立的props类型,可读性更高
// interface MyButtonProps {
//   title: string;
// }
// function MyButton({title}: MyButtonProps) {
//   return (
//     <button>{title}</button>
//   )
// }

// export default function MyApp() {
//   return (
//     <div>
//       <h1>欢迎来到我的应用</h1>
//       <MyButton title="我是一个按钮" />
//     </div>
//   );
// }


/** 上面的MyButton中通过prop传递参数在父组件中使用时候必须要设置,现在如何将里面的prop参数设置为可选,父组件调用时候不用传递 */
interface MyButtonProps {
  title? :string;
}
// function MyButton({title}:MyButtonProps) {
//   return (
//     <button>{title}</button>
//   )
// }
function MyButton({title='可选参数父组件没有传值时默认值'}:MyButtonProps) {
  return (
    <button>{title}</button>
  )
}
export default function MyApp() {
  return (
    <div>
      <h1>欢迎来到我的应用</h1>
      <MyButton title="可选参数设置传值" />
      <MyButton />
    </div>
  );
}



// 主要引用组件 - 显示声明返回类型
// export default function MyApp():React.ReactElement {
//   return (
//     <div>
//       <h1>欢迎来到我的应用</h1>
//       <MyButton title="我是一个按钮" />
//     </div>
//   );
// }
