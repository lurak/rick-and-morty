import { getCharacter } from "../../api";
import "./CharacterList.scss";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";

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
      <p className="CharacterList__infoLabel">Characters:</p>
      {charactersNames?.map((character) => (
        <p key={character.id} className="CharacterList__infoLabelEp">
          <Link to={`/character/${character.id}`} className="CharacterList__link">
          {character.name}
          </Link>
        </p>
      ))}
    </div>
  );
};

export default CharacterList;
