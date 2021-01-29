import "./Info.scss";
import { PropTypes } from "prop-types";

const Info = ({ header, info }) => {
  return (
    <div className="Info">
      <p className="Info__infoLabel">{header}</p>
      <p className="Info__infoValue">{info}</p>
    </div>
  );
};

Info.propType = {
  header: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
};
export default Info;
