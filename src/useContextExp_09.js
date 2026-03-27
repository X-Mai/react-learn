import { getImageUrl } from "./utils.js";

// export default function Profile() {
//   return (
//     // <Card>
//     //   <Avatar
//     //     size={100}
//     //     person={{
//     //       name: "Katsuko Saruhashi",
//     //       imageId: "YfeOqp2",
//     //     }}
//     //   />
//     // </Card>
//     // <Card children="传值给子组件"></Card>
//     // <Card test="test">测试</Card>
// }

export default function Profile() {
  return (
    <Card
      children={
        <Avatar
          size={100}
          person={{
            name: "Katsuko Saruhashi",
            imageId: "YfeOqp2",
          }}
        />
      }
    />
  );
}

function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

function Card({ children: children, test }) {
  console.log("xiaomai Card....", children, test);
  return <div className="card">{children}</div>;
}
// function Card({ children2, test }) {
//   console.log("xiaomai Card....", children2, test);
//   return <div className="card">{children2}</div>;
// }
