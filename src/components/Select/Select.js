import { useState } from "react";
import { PropTypes } from "prop-types";
import "./Select.scss";

const Select = ({ value, handleSelect, options, label }) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleIsOpened = () => {
    setIsOpened(!isOpened);
  };

  const onOptionClick = (option) => {
    handleSelect(option.value);
    setIsOpened(false);
  };

  const renderOptions = (option) => (
    <li key={value} value={option.value} className="Select__option" onClick={() => onOptionClick(option)}>
      {option.label}
    </li>
  );

  const selectedOptions = options?.find((option) => option.value === value);

  return (
    <div className="Select">
      <div className="Select__selectedOptions" onClick={handleIsOpened}>
        <span className="Select__label">{label}</span>
        <span className="Select__value">{selectedOptions?.label}</span>
      </div>
      {isOpened && <ul className="Select__options">{options?.map(renderOptions)}</ul>}
    </div>
  );
};

Select.propTypes = {
  value: PropTypes.string,
  handleSelect: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

export default Select;
