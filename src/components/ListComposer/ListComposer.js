import { PropTypes } from "prop-types";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./ListComposer.scss";

// TODO: what does this element do?
// Try to find a more comprehensive name :)
const ListComposer = ({ elements, getter, label, url }) => {
  // The main pupouse of this component to create list of episodes for character
  // or list of characters for episode? all depends on function getter(two options getEpisode or getCharacter)
  // Made for omiting of duplication of code for same CharacterList and EpisodeList how it was before
  const indexes = [];
  // TODO: it's cleaner and prettier with array map
  // And this way, you will return a new array, instead of modifying existing
  // Try to rewrite it
  for (let i = 0; i < elements?.length; i++) {
    if (elements[i][elements[i].length - 2] === "/") {
      indexes.push(Number(elements[i].substring(elements[i].length - 1, elements[i].length)));
    } else {
      indexes.push(Number(elements[i].substring(elements[i].length - 2, elements[i].length)));
    }
  }

  const [items, setItems] = useState([]);
  useEffect(() => {
    loadItems(indexes);
  }, [indexes]);

  const loadItems = async (ind) => {
    // Todo: is this a fetch call ? maybe something like getEpisode would be a better name
    const item = await getter(ind);
    if (ind.length === 1) {
      setItems(Array(item));
    } else {
      setItems(item);
    }
  };
  return (
    <div className="ListComposer">
      <p className="ListComposer__infoLabel">{label}:</p>
      {items?.map((element) => (
        <p key={element.id} className="ListComposer__infoLabelEp">
          <Link to={`/${url}/${element.id}`} className="ListComposer__link">
            {element.name}
          </Link>
        </p>
      ))}
    </div>
  );
};

ListComposer.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.string),
  getter: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default ListComposer;
