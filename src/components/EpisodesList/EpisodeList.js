import "./EpisodeList.scss";
import { PropTypes } from "prop-types";

const EpisodeList = ({ episodes }) => {
  return (
    <div className="EpisodeList">
      <p className="EpisodeList__infoLabel">Episodse:</p>
      {episodes.map((episode) => (
        <p key={episode} className="EpisodeList__infoLabelEp">
          {episode}
        </p>
      ))}
    </div>
  );
};

EpisodeList.propTypes = {
  episodes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default EpisodeList;
