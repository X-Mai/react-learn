import { useState, useRef } from "react";

export default function CatFriends() {
  const [index, setIndex] = useState(0);
  const ref = useRef(null);
  function getMap() {
    if (!ref.current) {
      ref.current = new Map();
    }
    return ref.current;
  }

  return (
    <>
      <nav>
        <button
          onClick={() => {
            let cat = catList[0];
            if (index < catList.length - 1) {
              const nextIndex = index + 1;
              setIndex(nextIndex);
              cat = catList[nextIndex];
            } else {
              setIndex(0);
            }
            console.log("xiaomai cat===:", cat);
            const map = getMap();
            const node = map.get(cat);
            node.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "center",
            });
          }}
        >
          下一个
        </button>
      </nav>
      <div>
        <ul>
          {catList.map((cat, i) => (
            <li
              key={cat.id}
              ref={(node) => {
                const map = getMap();
                map.set(cat, node); // DOM 挂载时：存入映射

                // 返回清理函数
                return () => {
                  map.delete(cat); // 当这个 <li> 被移除时，React 自动调用这个函数删除映射
                };
              }}
            >
              <img
                className={index === i ? "active" : ""}
                src={cat.imageUrl}
                alt={"猫猫 #" + cat.id}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

const catCount = 10;
const catList = new Array(catCount);
for (let i = 0; i < catCount; i++) {
  const bucket = Math.floor(Math.random() * catCount) % 2;
  let imageUrl = "";
  switch (bucket) {
    case 0: {
      imageUrl = "https://placecats.com/neo/250/200";
      break;
    }
    case 1: {
      imageUrl = "https://placecats.com/millie/250/200";
      break;
    }
    case 2:
    default: {
      imageUrl = "https://placecats.com/bella/250/200";
      break;
    }
  }
  catList[i] = {
    id: i,
    imageUrl,
  };
}
