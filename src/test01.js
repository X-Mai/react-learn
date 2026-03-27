import { useMemo, useCallback, memo } from "react";

// const ExpensiveComponent = memo(function ExpensiveComponent({ data, onClick }) {
//   const processedData = useMemo(() => {
//     return expensiveProcessing(data);
//   }, [data]);

//   const handleClick = useCallback(
//     (item) => {
//       onClick(item.id);
//     },
//     [onClick],
//   );

//   return (
//     <div>
//       {processedData.map((item) => (
//         <Item key={item.id} onClick={() => handleClick(item)} />
//       ))}
//     </div>
//   );
// });

function ExpensiveComponent({ data, onClick }) {
  const processedData = expensiveProcessing(data);

  const handleClick = (item) => {
    onClick(item.id);
  };

  return (
    <div>
      {processedData.map((item) => (
        <Item key={item.id} onClick={() => handleClick(item)} />
      ))}
    </div>
  );
}
