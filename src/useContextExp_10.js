import { getImageUrlById } from "./utils.js";

function Profile({ personInfo }) {
  return (
    <section className="profile">
      <h2>{personInfo.name}</h2>
      <img
        className="avatar"
        src={getImageUrlById(personInfo.imgId)}
        alt={personInfo.name}
        width={personInfo.width}
        height={personInfo.height}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {personInfo.profession}
        </li>
        <li>
          <b>Awards: {personInfo.awards.length} </b>(
          {personInfo.awards.join(",")})
        </li>
        <li>
          <b>Discovered: </b>
          {personInfo.discovered}
        </li>
      </ul>
    </section>
  );
}

export default function Gallery2() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        personInfo={{
          name: "Maria Skłodowska-Curie",
          imgId: "szV5sdG",
          width: 70,
          height: 70,
          profession: "physicist and chemist",
          awards: [
            "Nobel Prize in Physics",
            "Nobel Prize in Chemistry",
            "Davy Medal",
            "Matteucci Medal",
          ],
          discovered: "polonium (chemical element)",
        }}
      ></Profile>
    </div>
  );
}

function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <section className="profile">
        <h2>Maria Skłodowska-Curie</h2>
        <img
          className="avatar"
          src={getImageUrlById("szV5sdG")}
          alt="Maria Skłodowska-Curie"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b>
            physicist and chemist
          </li>
          <li>
            <b>Awards: 4 </b>
            (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal,
            Matteucci Medal)
          </li>
          <li>
            <b>Discovered: </b>
            polonium (chemical element)
          </li>
        </ul>
      </section>
      <section className="profile">
        <h2>Katsuko Saruhashi</h2>
        <img
          className="avatar"
          src={getImageUrlById("YfeOqp2")}
          alt="Katsuko Saruhashi"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b>
            geochemist
          </li>
          <li>
            <b>Awards: 2 </b>
            (Miyake Prize for geochemistry, Tanaka Prize)
          </li>
          <li>
            <b>Discovered: </b>a method for measuring carbon dioxide in seawater
          </li>
        </ul>
      </section>
    </div>
  );
}
