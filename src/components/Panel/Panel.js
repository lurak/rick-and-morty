import "./Panel.scss";
import Box from "../Box";

const Panel = () => {
  return (
    <div className="Panel">
      <div className="Panel__beg">
        <Box number="<" />
      </div>
      <div className="Panel__boxHolder">
        <Box number="1" />
        <Box number="2" />
        <Box number="3" />
        <Box number="4" />
        <Box number="5" />
      </div>
      <div className="Panel__end">
        <Box number=">" />
      </div>
    </div>
  );
};

export default Panel;
