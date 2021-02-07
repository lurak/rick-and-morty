import { useState, useEffect } from "react";
import { PropTypes } from "prop-types";

import Info from "../../components/Info";
import { getEpisode } from "../../api";

const EpisodeInfo = ({ episode }) => {
  const [episodeName, setEpisodeName] = useState("");
  useEffect(() => {
    loadEpisode(episode);
  }, [episode]);

  const loadEpisode = async (episode) => {
    const item = await getEpisode(episode);
    setEpisodeName(item);
  };

  return <Info header="First seen in:" info={episodeName.name} />;
};

EpisodeInfo.propTypes = {
  episode: PropTypes.arrayOf(PropTypes.string),
};

export default EpisodeInfo;
