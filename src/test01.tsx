import { useMemo, useCallback, memo } from "react";

// 1. 先定义数据结构的类型（根据你的业务实际字段调整）
interface ItemType {
  id: string | number; // 常用的 ID 类型，可根据实际情况改
  // 补充你的 Item 其他字段，比如 name、value 等
  name?: string;
}

// 2. 定义组件 Props 的类型
interface ExpensiveComponentProps {
  // 传入的数据源类型
  data: ItemType[];
  // 点击事件回调函数的类型：接收 item.id，无返回值
  onClick: (id: ItemType["id"]) => void;
}

// 3. 定义子组件 Item 的 Props 类型（如果 Item 是自定义组件）
interface ItemProps {
  key: string | number;
  onClick: () => void; // Item 组件的点击事件是无参函数（因为外层已绑定 item）
}

// 模拟 Item 子组件（如果你的项目里已有，可忽略这部分）
const Item = ({ onClick, key }: ItemProps) => {
  return (
    <div onClick={onClick} key={key}>
      子项
    </div>
  );
};

// 模拟耗时处理函数（给返回值加类型）
const expensiveProcessing = (data: ItemType[]): ItemType[] => {
  // 这里是你的耗时处理逻辑，比如过滤、排序、格式化等
  return data.filter((item) => !!item.id);
};

// 4. 带类型约束的 memo 组件（核心）
const ExpensiveComponent = memo(function ExpensiveComponent({
  data,
  onClick,
}: ExpensiveComponentProps) {
  // useMemo：明确返回值类型为 ItemType[]
  // const processedData = useMemo<ItemType[]>(() => {
  //   return expensiveProcessing(data);
  // }, [data]);
  const processedData = useMemo(() => {
    return expensiveProcessing(data);
  }, [data]);

  // useCallback：明确参数和返回值类型
  const handleClick = useCallback(
    (item: ItemType) => {
      onClick(item.id);
    },
    [onClick],
  );

  return (
    <div>
      {processedData.map((item) => (
        <Item key={item.id} onClick={() => handleClick(item)} />
      ))}
    </div>
  );
});

export default ExpensiveComponent;

function returnValue<XXXX>(value: XXXX): XXXX {
  return value;
}
