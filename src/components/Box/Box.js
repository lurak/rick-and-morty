import "./Box.scss";

const Box = ({ number }) => {
  return (
    <div className="Box">
      <div className="Box__number">{number}</div>
    </div>
  );
};

export default Box;
