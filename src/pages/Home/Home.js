import { useState, useEffect, useCallback } from "react";
import _ from "lodash";

import Search from "../../components/Search";
import Select from "../../components/Select";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import Card from "../../components/Card";
import { getCharacters } from "../../api";
import Pagination from "../../components/Pagination";

import "./Home.scss";
 
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

function Home() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const [characters, setCharacters] = useState();
  const [queryName, setQueryName] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [pages, setPages] = useState(0);

  const delayQuery = useCallback(_.debounce(setQueryName, 500), [setQueryName]);

  useEffect(() => {
    setCurrentPage(0);
  }, [name, status, gender]);

  useEffect(() => {
    loadCharacters(currentPage, {
      ...(name && { name: queryName }),
      ...(gender && { gender }),
      ...(status && { status }),
    });
  }, [queryName, gender, status, currentPage]);

  const loadCharacters = async (page = 0, params) => {
    const items = await getCharacters({ page: page + 1, ...params });
    if (items.error) {
      console.log("Error:", items.error);
    } else {
      setCharacters(items?.results);
      setPages(items?.info?.pages || 0);
    }
  };

  const onNameChange = (value) => {
    setName(value);
    delayQuery(value);
  };

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
      <Search className="Home__heroSearch" value={name} setValue={onNameChange} />
      <div className="Home__filters">
        <Select label="Status" value={status} handleSelect={setStatus} options={statusOptions} />
        <Select label="Gender " value={gender} handleSelect={setGender} options={genderOptions} />
      </div>
      <div className="Home__resultContainer">
        <div className="Home__cardList">{characters?.map(renderCharactet)}</div>
        <Pagination pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage} />
      </div>
    </div>
  );
}

export default Home;
