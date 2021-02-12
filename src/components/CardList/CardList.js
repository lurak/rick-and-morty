import { PropTypes } from "prop-types";

import Card from "../../components/Card";
import Pagination from "../../components/Pagination";
import ErrorPage from "../../pages/ErrorPage";

import "./CardList.scss";

const CardList = ({ characters, pages, setCurrentPage, currentPage }) => {
  if (Array.isArray(characters) && !characters.length) {
    return <ErrorPage />;
  }
  console.log(characters);

  const renderCharactet = (character) => <Card {...character} key={character.id} />;

  return (
    <div className="CardList">
      <div className="CardList__List">{characters?.map(renderCharactet)}</div>
      <Pagination pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage} />
    </div>
  );
};

CardList.propTypes = {
  characters: PropTypes.array,
  pages: PropTypes.number,
  setCurrentPage: PropTypes.func,
  currentPage: PropTypes.number,
};

export default CardList;
