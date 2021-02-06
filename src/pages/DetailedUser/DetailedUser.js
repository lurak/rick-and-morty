import { useState, useEffect } from "react";
import { parseJSON } from "date-fns";
import { NavLink, useParams } from "react-router-dom";
import Tag from "../../components/Tag";
import "./DetailedUser.scss";
import Header from "../../components/Header";
import EpisodeList from "../../components/EpisodesList";
import Info from "../../components/Info";
import { getCharacter } from "../../api";
import EpisodeInfo from "../../components/EpisodeInfo/EpisodeInfo";
import ErrorPage from "../ErrorPage";
import Menu from "../../components/Menu/Menu";

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
          <Tag children={status} />
          <Tag children={gender} />
        </div>
        <div className="DetailedUser__MainInfo">
          <Info header="Species" info={species} />
          <Info header="Origin" info={origin.name} />
          <Info header="Birthday" info={String(parseJSON(created)).substring(3, 15)} />
          <Info header="Last known location" info={location.name} />
          <EpisodeInfo episode={episode} />
        </div>
        <EpisodeList episodes={episode.slice(0, 5)} />
      </div>
    </div>
  ) : (
    <ErrorPage />
  );
};

export default DetailedUser;
