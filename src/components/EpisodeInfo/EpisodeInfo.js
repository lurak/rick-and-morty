import { useState, useEffect } from "react";
import Info from "../../components/Info";
import { getEpisode } from "../../api";

const EpisodeInfo = ({ episode }) => {
  const [episodeName, setEpisodeName] = useState("");
  useEffect(() => {
    loadEpisode(episode);
  }, [episode]);

  const loadEpisode = async (episode) => {
    const item = await getEpisode(episode);
    setEpisodeName(item.name);
  };

  return <Info header="First seen in:" info={episodeName} />;
};

export default EpisodeInfo;
