import { PropTypes } from "prop-types";

import "./Tag.scss";

const Tag = ({ className, children }) => {
  return <div className={`Tag ${className}`}>{children}</div>;
};

Tag.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
};

export default Tag;
