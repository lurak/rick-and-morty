import "./EpisodeList.scss";
import { getEpisodes } from "../../api";
import { useState, useEffect } from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

const EpisodeList = ({ episodes }) => {
  console.log(episodes);
  const numbers = Array();
  for (let i = 0; i < episodes.length; i++) {
    if (episodes[i][episodes[i].length - 2] === "/") {
      numbers.push(Number(episodes[i].substring(episodes[i].length - 1, episodes[i].length)));
    } else {
      numbers.push(Number(episodes[i].substring(episodes[i].length - 2, episodes[i].length)));
    }
  }

  const [episodeNames, setEpisodeNames] = useState([]);
  useEffect(() => {
    loadEpisodes(numbers);
  }, [episodes]);

  const loadEpisodes = async (indexes) => {
    const item = await getEpisodes(indexes);
    if (numbers.length === 1) {
      setEpisodeNames(Array(item));
    } else {
      setEpisodeNames(item);
    }
  };

  return (
    <div className="EpisodeList">
      <p className="EpisodeList__infoLabel">Episodse:</p>
      {episodeNames.map((episode) => (
        <p key={episode} className="EpisodeList__infoLabelEp">
          <Link to={`/episode/${episode.id}`} className="EpisodeList__link">
            {episode.name}
          </Link>
        </p>
      ))}
    </div>
  );
};

EpisodeList.propTypes = {
  episodes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default EpisodeList;
