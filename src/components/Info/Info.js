import { PropTypes } from "prop-types";

import "./Info.scss";

const Info = ({ header, info }) => {
  return (
    <div className="Info">
      <p className="Info__infoLabel">{header}</p>
      <p className="Info__infoValue">{info}</p>
    </div>
  );
};

Info.propTypes = {
  header: PropTypes.string.isRequired,
  info: PropTypes.string,
};
export default Info;
