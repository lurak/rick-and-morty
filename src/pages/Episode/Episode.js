import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Photo from "../../assets/images/episode.jpg";
import Header from "../../components/Header";
import Info from "../../components/Info";
import { getCharacter, getEpisodes } from "../../api";
import ErrorPage from "../ErrorPage";
import Menu from "../../components/Menu/Menu";
import ListComposer from "../../components/ListComposer";

import "./Episode.scss";

const Episode = () => {
  const { id } = useParams();
  const [episode, setEpisode] = useState();
  useEffect(() => {
    loadEpisode(id);
  }, [id]);

  const loadEpisode = async (id) => {
    const item = await getEpisodes(id);
    if (item.error) {
      console.log("Error:", item.error);
    } else {
      setEpisode(item);
    }
  };
  const { name, characters, air_date } = episode || {};
  return episode ? (
    <div className="Episode">
      <div className="Episode__header">
        <Header />
      </div>
      <Menu name={name} />
      <div className="Episode__ImageContainer">
        <img src={Photo} className="Episode__Image" alt="" />
      </div>
      <div className="Episode__Description">
        <div className="Episode__head">{name}</div>
        <div className="Episode__MainInfo">
          <Info header="Air Date" info={air_date} />
        </div>
        <ListComposer elements={characters?.slice(0, 10)} getter={getCharacter} label="Characters" url="character" />
      </div>
    </div>
  ) : (
    <ErrorPage />
  );
};

export default Episode;
