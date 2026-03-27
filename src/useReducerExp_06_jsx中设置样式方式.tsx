import React from "react";

// 1. 定义接收 style 属性的组件 Props 接口
interface MyComponentProps {
  // 使用 React.CSSProperties 约束 style 属性类型
  style?: React.CSSProperties;
  // 可选：组件的其他属性
  text: string;
}

// 注意:props这样写法是表示接受完整的props对象
function test(props: MyComponentProps) {
  return <></>;
}

// 注意:name作为prop传参这样写法是 解构了一个名为 props 的属性  是执行获取对应的值,不用从对象取对应key的值
function test2({ name }: { name: string }) {
  return <></>;
}

/** ---------使用申明函数--------- */
// 方式 1：函数声明（最直观，推荐）
function MyStyledComponent3(props: MyComponentProps) {
  // 解构 props，给 style 设置默认值
  const { text, style = {} } = props;

  // 组件内部基础样式
  const baseStyle: React.CSSProperties = {
    padding: "16px",
    borderRadius: "8px",
    border: "1px solid #e5e7eb",
    fontFamily: "sans-serif",
  };

  // 合并样式
  const mergedStyle = { ...baseStyle, ...style };

  return <div style={mergedStyle}>{text}</div>;
}
// 方式 2：函数表达式（和声明效果一致，写法不同）
const MyStyledComponent4 = function (props: MyComponentProps) {
  const { text, style = {} } = props;
  const baseStyle: React.CSSProperties = {
    margin: "10px 0",
    color: "#333",
  };
  return <div style={{ ...baseStyle, ...style }}>{text}</div>;
};

/** ---------使用箭头函数--------- */
// 写法 1：推荐！React.FC 标注整个组件（简洁明了）
// React.FC（FunctionComponent）是用来标注整个函数组件的类型，而不是放在参数位置
const MyStyledComponent: React.FC<MyComponentProps> = ({
  text,
  style = {},
}) => {
  const baseStyle: React.CSSProperties = {
    padding: "16px",
    borderRadius: "8px",
  };
  return <div style={{ ...baseStyle, ...style }}>{text}</div>;
};

// 写法 2：显式定义参数类型（不依赖 React.FC，更灵活）
const MyStyledComponent2 = ({ text, style = {} }: MyComponentProps) => {
  // 直接给参数标注 Props 类型
  const baseStyle: React.CSSProperties = {
    padding: "16px",
    borderRadius: "8px",
  };
  return <div style={{ ...baseStyle, ...style }}>{text}</div>;
};
