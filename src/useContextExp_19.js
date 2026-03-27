import { useRef, useState } from "react";

export default function CatFriends() {
  const itemsRef = useRef(null);
  const [catList, setCatList] = useState(setupCatList);

  function scrollToCat(cat) {
    // const test1 = [1, 2, 3];
    // const test2 = { key1: "111" };
    // console.log(
    //   "xiaomai CatFriends itemsRef.current==: ",
    //   itemsRef.current,
    //   typeof test1,
    //   typeof test2,
    // );

    // return;

    const map = getMap();
    const node = map.get(cat);
    node.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  function getMap() {
    if (!itemsRef.current) {
      console.log("xiaomai 首次运行时初始化 Map");
      // 首次运行时初始化 Map。
      itemsRef.current = new Map();
    }
    return itemsRef.current;
  }

  return (
    <>
      <nav>
        <button onClick={() => scrollToCat(catList[0])}>Neo</button>
        <button onClick={() => scrollToCat(catList[5])}>Millie</button>
        <button onClick={() => scrollToCat(catList[8])}>Bella</button>
      </nav>
      <div>
        <ul>
          {catList.map((cat) => (
            <li
              key={cat.id}
              // 现代写法 使用 return cleanup React 19 推荐
              ref={(node) => {
                const map = getMap();
                console.log(`添加映射: cat id=${cat.id}`);
                map.set(cat, node); // DOM 挂载时：存入映射

                // 返回清理函数
                return () => {
                  console.log(`删除映射: cat id=${cat.id}`);
                  map.delete(cat); // 当这个 <li> 被移除时，React 自动调用这个函数删除映射
                };
              }}
              // 传统写法（推荐给你 —— 更直观，不返回 cleanup）  更容易理解
              // ref={(node) => {
              //   const map = getMap();

              //   if (node) {
              //     // node 不为 null → DOM 已挂载
              //     console.log(`添加映射: cat id=${cat.id}`);
              //     map.set(cat, node);
              //   } else {
              //     // node === null → DOM 被卸载/移除
              //     console.log(`删除映射: cat id=${cat.id}`);
              //     map.delete(cat);
              //   }
              // }}
            >
              <img src={cat.imageUrl} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

function setupCatList() {
  const catCount = 10;
  const catList = new Array(catCount);
  for (let i = 0; i < catCount; i++) {
    let imageUrl = "";
    if (i < 5) {
      imageUrl = "https://placecats.com/neo/320/240";
    } else if (i < 8) {
      imageUrl = "https://placecats.com/millie/320/240";
    } else {
      imageUrl = "https://placecats.com/bella/320/240";
    }
    catList[i] = {
      id: i,
      imageUrl,
    };
  }
  return catList;
}
