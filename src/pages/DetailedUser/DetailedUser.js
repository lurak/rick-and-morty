import { useState, useEffect } from "react";
import { parseJSON } from "date-fns";
import { useParams } from "react-router-dom";

import Tag from "../../components/Tag";
import Header from "../../components/Header";
import Info from "../../components/Info";
import { getCharacter, getEpisodes } from "../../api";
import EpisodeInfo from "../../components/EpisodeInfo";
import ErrorPage from "../ErrorPage";
import Menu from "../../components/Menu";
import ListComposer from "../../components/ListComposer";
import { emoji_gender, emoji_status } from "../../utils/consts";

import "./DetailedUser.scss";

const DetailedUser = () => {
  const [character, setCharacter] = useState();

  const { id } = useParams();

  useEffect(() => {
    loadCharacter(id);
  }, [id]);

  const loadCharacter = async (id) => {
    const item = await getCharacter(id);
    if (item.error) {
      console.log("Error:", item.error);
    } else {
      setCharacter(item);
    }
  };

  const { name, image, species, origin, location, status, gender, episode, created } = character || {};

  return character ? (
    <div className="DetailedUser">
      <div className="DetailedUser__header">
        <Header />
      </div>
      <Menu id={id} name={name} />
      <div className="DetailedUser__ImageContainer">
        <img src={image} className="DetailedUser__Image" alt="" />
      </div>
      <div className="DetailedUser__Description">
        <div className="DetailedUser__head">
          #{id} {name}
        </div>
        <div className="DetailedUser__tag">
          <Tag text={status} emoji={emoji_status[status]} />
          <Tag text={gender} emoji={emoji_gender[gender]} />
        </div>
        <div className="DetailedUser__MainInfo">
          <Info header="Species" info={species} />
          <Info header="Origin" info={origin.name} />

          <Info header="Birthday" info={String(parseJSON(created)).substring(3, 15)} />
          <Info header="Last known location" info={location.name} />
          <EpisodeInfo episode={episode} />
        </div>
        <ListComposer elements={episode.slice(0, 5)} getter={getEpisodes} label="Episodes" url="episode" />
      </div>
    </div>
  ) : (
    <ErrorPage />
  );
};

export default DetailedUser;
