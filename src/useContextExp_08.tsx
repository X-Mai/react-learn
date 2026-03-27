const baseUrl = "https://i.imgur.com/";
// // 1. 定义 Person 类型
// interface Person {
//   name: string;
//   imageId: string;
//   imageSize: string;
//   theme: {
//     backgroundColor: string;
//     color: string;
//   };
// }

// // 2. 给 person 对象加上类型
// const person: Person = {
//   name: "Gregorio Y. Zara",
//   imageId: "7vQD0fP",
//   imageSize: "s",
//   theme: {
//     backgroundColor: "black",
//     color: "pink",
//   },
// };

const person = {
  name: "Gregorio Y. Zara",
  imageId: "7vQD0fP",
  imageSize: "s",
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
};

type Person = typeof person;

export default function TodoList() {
  const test = baseUrl + person.imageId + person.imageSize + ".jpg";
  return (
    <div style={person.theme}>
      <h1>{person.name}'的待办事项</h1>
      <img
        className="avatar"
        // src="{baseUrl}{person.imageId}{person.imageSize}.jpg"
        // src={test}
        // src={baseUrl + person.imageId + person.imageSize + ".jpg"}
        src={getImageUrl(person)}
        alt={person.name}
      />
      <ul>
        <li>优化视屏电话</li>
        <li>准备航空学课程</li>
        <li>研究乙醇燃料引擎</li>
      </ul>
    </div>
  );
}

export function getImageUrl(person: Person) {
  return baseUrl + person.imageId + person.imageSize + ".jpg";
}
