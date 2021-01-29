import { useState } from "react";
import { PropTypes } from "prop-types";

import Search from "../../components/Search";
import Select from "../../components/Select";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import "./Home.scss";
import Card from "../../components/Card";
import Panel from "../../components/Panel/Panel";

const statusOptions = [
  { valus: "", label: "all" },
  { value: "alive", label: "alive" },
  { value: "dead", label: "dead" },
];

const genderOptions = [
  { valus: "", label: "all" },
  { value: "male", label: "male" },
  { value: "female", label: "female" },
];

function Home({ characters }) {
  const [characterName, setCharacterName] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
   //const filterStatus = () =>{
  //    characters = characters?.filter(character => character.status === status)
  // }

  const renderCharactet = (character) => <Card {...character} key={character.id} />;
  return (
    <div className="Home">
      <h1 className="Home__header">
        {" "}
        <span>surf the</span>
        <Logo className="Home__logo" />
        <span>universe</span>
      </h1>
      .
      <Search className="Home__heroSearch" value={characterName} setValue={setCharacterName} />
      <div className="Home__filters">
        <Select label="Status" value={status} handleSelect={setStatus} options={statusOptions} />
        <Select label="Gender " value={gender} handleSelect={setGender} options={genderOptions} />
      </div>
      <div className="Home__resultContainer">
        <div className="Home__cardList">{characters?.map(renderCharactet)}</div>
        <Panel />
      </div>
    </div>
  );
}

Home.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      species: PropTypes.string.isRequired,
      gender: PropTypes.oneOf(["Male", "Female", "unknown", "Genderless"]),
      origin: PropTypes.shape({
        url: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }),
      location: PropTypes.shape({
        url: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }),
      image: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default Home;
