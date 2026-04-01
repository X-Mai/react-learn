import React from "react";

// 定义Props接口（如需接收外部样式，可选）
interface MyComponentProps {
  style?: React.CSSProperties; // 接收内联样式
  className?: string; // 接收CSS类名
  text: string;
}

// 函数表达式定义组件
const MyStyledComponent = function (props: MyComponentProps) {
  const { text, style = {}, className = "" } = props;

  // 方式1：内联样式（推荐用React.CSSProperties约束）
  const baseInlineStyle: React.CSSProperties = {
    padding: "10px",
    border: "1px solid #ccc",
  };
  const mergedInlineStyle = { ...baseInlineStyle, ...style };

  return (
    <div>
      {/* 方式1：内联样式（直接给JSX元素设style） */}
      <div style={mergedInlineStyle}>{text}-内联样式</div>
      {/* 方式1.1 内联样式对象字节写在{}中 */}
      <div style={{ padding: "10px" }}>-内联样式1.1</div>
      {/* 方式2：CSS类名（先定义CSS，再通过className引用） */}
      <div className={`base-class ${className}`}>{text}-CSS类名</div>
      {/* ❌ 错误示例：你问的这种写法无效 */}
      <div className="color:red">这行样式不会生效</div>
    </div>
  );
};

// 配套的CSS（可写在单独.css文件，或组件内用style标签）
const styleSheet = `
  .base-class {
    margin: 10px 0;
    font-size: 16px;
  }
  .text-red {
    color: red;
  }
`;

// 父组件使用
const App = function () {
  return (
    <div>
      <style>{styleSheet}</style>
      {/* 传内联样式 */}
      <MyStyledComponent
        text="示例1"
        style={{ color: "blue", fontWeight: "bold" }}
      />
      {/* 传CSS类名 */}
      <MyStyledComponent text="示例2" className="text-red" />
    </div>
  );
};

export default App;
