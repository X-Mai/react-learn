import { getImageUrl2 } from "./utils.js";
const ratio = window.devicePixelRatio;

function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      // src={getImageUrl2(person, "b")}
      src={getImageUrl2(person, size * ratio < 90 ? "s" : "b")}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <>
      <Avatar
        size={40}
        person={{
          name: "Gregorio Y. Zara",
          imageId: "7vQD0fP",
        }}
      />
      <Avatar
        size={120}
        person={{
          name: "Gregorio Y. Zara",
          imageId: "7vQD0fP",
        }}
      />
    </>
  );
}
