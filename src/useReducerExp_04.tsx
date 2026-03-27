import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
} from "react";

// type Theme = "light" | "dark" | "system";
// const ThemeContext = createContext<Theme>("system");

// const useGetTheme = () => useContext(ThemeContext);

// export default function MyApp() {
//   const [theme, setTheme] = useState<Theme>("light");

//   return (
//     <ThemeContext value={theme}>
//       <MyComponent />
//     </ThemeContext>
//   );
// }

// function MyComponent() {
//   const theme = useGetTheme();

//   return (
//     <div>
//       <p>当前主题：{theme}</p>
//     </div>
//   );
// }

type ComplexObject = {
  kind: string;
};
// 上下文在类型中创建为 `| null`，以准确反映默认值。
const Context = createContext<ComplexObject | null>(null);
// 这个 Hook 会在运行时检查 context 是否存在，并在不存在时抛出一个错误。
const useGetComplexObject = () => {
  const object = useContext(Context);
  if (!object)
    throw new Error("useGetComplexObject must be used within a Provider");
  return object;
};
function MyApp() {
  const object = useMemo(() => ({ kind: "complex" }), []);
  return (
    <Context value={object}>
      <MyComponent />
    </Context>
  );
}

function MyComponent() {
  const object = useGetComplexObject();

  return (
    <div>
      <p>Current object: {object.kind}</p>
    </div>
  );
}

/**----------------------- */
export default function Form() {
  const [value, setValue] = useState("Change me");

  /** --- 点击事件 第一种写法:借助useCallback hook--- */
  // 第一种写法（any 类型）
  // const handleChange = useCallback(
  //   (event: any) => {
  //     setValue(event.currentTarget.value);
  //   },
  //   [setValue],
  // );

  // 第二种写法（显式类型）
  const handleChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>(
    (event) => {
      setValue(event.currentTarget.value);
    },
    [setValue],
  );
  // 第二种写法（显式类型）对应的更简洁的写法
  // const handleChange = useCallback(
  //   (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setValue(event.currentTarget.value);
  //   },
  //   [setValue],
  // );

  /** --- 点击事件 第二种写法:使用DOM事件--- */
  function handleChange2(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.currentTarget.value);
  }
  // 对应箭头函数写法
  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };
  // DOM事件参数使用any
  const handleChange4 = (event: any) => {};

  return (
    <>
      <input value={value} onChange={handleChange} />
      <p>值： {value}</p>
    </>
  );
}

interface TestXm {
  title: string;
  children: React.ReactNode; // React.ReactNode 子元素的一个非常宽泛的定义,是可以在 JSX 中作为子元素传递的所有可能类型的并集
}
// interface TestXm {
//   title: string;
//   children: React.ReactElement;  // 它只包括 JSX 元素，而不包括 JavaScript 原始类型，如 string 或 number
// }

function FcTestxm({ prop }: { prop: TestXm }) {
  return <></>;
}

function UseFcTestxm() {
  return (
    <>
      <FcTestxm prop={{ title: "xiaomai", children: "xiaomai222" }}></FcTestxm>
    </>
  );
}
