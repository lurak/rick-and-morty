import { parseJSON } from "date-fns";
import { NavLink, useParams } from "react-router-dom";
import { PropTypes } from "prop-types";
import Tag from "../../components/Tag";
import "./DetailedUser.scss";
import Header from "../../components/Header";
import EpisodeList from "../../components/EpisodesList";
import Info from "../../components/Info";

const DetailedUser = ({ selectCharacter }) => {
  const { id } = useParams();
  const character = selectCharacter(Number(id));

  const { name, image, species, origin, location, status, gender, episode, created } = character || {};

  return character ? (
    <div className="DetailedUser">
      <div className="DetailedUser__header">
        <Header />
      </div>
      <div className="DetailedUser__menu">
        <NavLink exact to="/" className="DetailedUser__link" activeClassName='"DetailedUser__menu_active'>
          Home
        </NavLink>{" "}
        {`|   `}
        <NavLink
          exact
          to="/character"
          className="DetailedUser__link_active"
          activeClassName='"DetailedUser__menu_active'
        >
          #{id} {name}
        </NavLink>
      </div>
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
          <Info header="First seen in:" info={episode[0]} />
        </div>
        <EpisodeList episodes={episode} />
      </div>
    </div>
  ) : (
    <div className="DetailedUser">Go to home page!</div>
  );
};

DetailedUser.propTypes = {
  selectCharacter: PropTypes.func.isRequired,
};

export default DetailedUser;
