import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import "./Card.scss";
import Tag from "../Tag";
import Info from "../Info";

const Card = ({ name, status, gender, location, image, id }) => {
  return (
    <div className="Card">
      <div className="Card__imageHolder">
        <Link to={`/character/${id}`}>
          <img src={image} className="Card__image" alt="" />
        </Link>
      </div>
      <div className="Card__content">
        <Link to={`/character/${id}`} className="Card__name">
          <div className="Card__name">{name}</div>
        </Link>
        <div className="Card__tags">
          <Tag>{gender}</Tag>
          <Tag>{status}</Tag>
        </div>
        <Info header="Last known location" info={location.name} />
        <Info header="First seen in" info={name} />
      </div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  gender: PropTypes.oneOf(["Male", "Female", "unknown", "Genderless"]),
  location: PropTypes.shape({
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Card;
