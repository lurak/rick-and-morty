import { PropTypes } from "prop-types";

import "./Tag.scss";

const Tag = ({ className, text, emoji }) => {
  return (
    <div className={`Tag ${className}`}>
      {emoji} {text}
    </div>
  );
};

Tag.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired,
};

export default Tag;
