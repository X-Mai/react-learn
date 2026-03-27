import { useState } from "react";

function Card({ children }) {
  return (
    <div className="card">
      <div className="card-content">{children}</div>
    </div>
  );
}

export default function Profile() {
  return (
    <div>
      <Card>
        <h1>Photo</h1>
        <img
          className="avatar"
          src="https://i.imgur.com/OKS67lhm.jpg"
          alt="Aklilu Lemma"
          width={100}
          height={100}
        />
      </Card>
      <Card>
        <h1>About</h1>
        <p>
          Aklilu Lemma was a distinguished Ethiopian scientist who discovered a
          natural treatment to schistosomiasis.
        </p>
      </Card>
    </div>
  );
}

function Item({ name, importance }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <li className="item">
      {/* {name} {importance > 0 ? "(重要性：" + importance + ")" : ""}
      {name} {importance > 0 ? `(重要性：${importance})` : ""}
      {name} {importance > 0 && "(重要性：" + importance + ")"} */}
      {name}
      {importance > 0 && " "}
      {importance > 0 && <i>（重要性: {importance}）</i>}

      {showMore && <p>测试</p>}
    </li>
  );
}
