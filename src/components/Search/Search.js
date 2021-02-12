import { PropTypes } from "prop-types";

import "./Search.scss";

const Search = ({ className, value, setValue }) => {
  const handleChange = ({ target: { value } }) => {
    setValue(value);
  };
  return (
    <div className={`Search ${className}`}>
      <input className="Search__input" placeholder="search by name" value={value} onChange={handleChange} />     
      {/*<button className="Search__button">Find character </button>*/}
    </div>
  );
};

Search.propTypes = {
  className: PropTypes.string.isRequired,
  value: PropTypes.string,
  setValue: PropTypes.func,
};

export default Search;
