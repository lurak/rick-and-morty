import "./Tag.scss";
import { PropTypes } from "prop-types";

const Tag = ({ className, children }) => {
  return <div className={`Tag ${className}`}>{children}</div>;
};

Tag.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
};

export default Tag;
