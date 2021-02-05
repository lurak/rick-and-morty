import "./Episode.scss";
import Photo from "../../assets/images/screen-7.jpg";
import Header from "../../components/Header";
import { NavLink, useParams } from "react-router-dom";
import Info from "../../components/Info";
import CharacterList from "../../components/CharacterList";
import { useState, useEffect } from "react";
import { getEpisodes } from "../../api";

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
      <div className="Episode__menu">
        <NavLink exact to="/" className="Episode__link" activeClassName='"Episode__menu_active'>
          Home
        </NavLink>{" "}
        {`|   `}
        <NavLink exact to="/character" className="Episode__link_active" activeClassName='"Episode__menu_active'>
          # {name}{" "}
        </NavLink>
      </div>
      <div className="Episode__ImageContainer">
        <img src={Photo} className="Episode__Image" alt="" />
      </div>
      <div className="Episode__Description">
        <div className="Episode__head">{name}</div>
        <div className="Episode__MainInfo">
          <Info header="Air Date" info={air_date} />
        </div>
        <CharacterList characters={characters?.slice(0, 10)} />
      </div>
    </div>
  ) : (
    <div className="DetailedUser">Go to home page!</div>
  );
};

export default Episode;
