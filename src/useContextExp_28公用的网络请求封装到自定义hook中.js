import { useState, useEffect } from "react";

// function ShippingForm({ country }) {
//   const [cities, setCities] = useState(null);
//   useEffect(() => {
//     let ignore = false;
//     fetch(`/api/cities?country=${country}`)
//       .then((response) => response.json())
//       .then((json) => {
//         if (!ignore) {
//           setCities(json);
//         }
//       });
//     return () => {
//       ignore = true;
//     };
//   }, [country]); // ✅ 所有依赖已声明

//   const [city, setCity] = useState(null);
//   const [areas, setAreas] = useState(null);
//   useEffect(() => {
//     if (city) {
//       let ignore = false;
//       fetch(`/api/areas?city=${city}`)
//         .then((response) => response.json())
//         .then((json) => {
//           if (!ignore) {
//             setAreas(json);
//           }
//         });
//       return () => {
//         ignore = true;
//       };
//     }
//   }, [city]); // ✅ 所有依赖已声明
// }

// ✅ 原组件变得极度简洁
function ShippingForm({ country }) {
  // 1. 根据国家获取城市
  const cities = useAsyncData(
    country ? `/api/cities?country=${country}` : null,
  );
  const [city, setCity] = useState(null);

  // 2. 根据城市获取区域
  const areas = useAsyncData(city ? `/api/areas?city=${city}` : null);

  return <div>{/* 你的 JSX 渲染逻辑不变 */}</div>;
}

// 提取通用数据请求自定义Hook
function useAsyncData(url) {
  // 统一管理数据、加载、错误
  const [data, setData] = useState(null);

  useEffect(() => {
    let ignore = false;

    // 空 URL 不请求
    if (!url) {
      setData(null);
      return;
    }

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        if (!ignore) setData(json);
      });

    // 清理函数：防止竞态
    return () => {
      ignore = true;
    };
  }, [url]);

  return data;
}

export default function Test() {
  return <div>测试</div>;
}
