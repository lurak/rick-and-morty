import { getCharacter } from "../../api";
import "./CharacterList.scss";
import { useState, useEffect } from "react";

const CharacterList = ({ characters }) => {
  const indexes = Array();
  for (let i = 0; i < characters?.length; i++) {
    if (characters[i][characters[i].length - 2] === "/") {
      indexes.push(Number(characters[i].substring(characters[i].length - 1, characters[i].length)));
    } else {
      indexes.push(Number(characters[i].substring(characters[i].length - 2, characters[i].length)));
    }
  }

  const [charactersNames, setCharactersNames] = useState([]);
  useEffect(() => {
    loadEpisodes(indexes);
  }, [characters]);

  const loadEpisodes = async (ind) => {
    const item = await getCharacter(ind);
    setCharactersNames(item);
  };
  return (
    <div className="CharacterList">
      <p className="CharacterList__infoLabel">Episodse:</p>
      {charactersNames?.map((character) => (
        <p key={character.id} className="CharacterList__infoLabelEp">
          {character.name}
        </p>
      ))}
    </div>
  );
};

export default CharacterList;
