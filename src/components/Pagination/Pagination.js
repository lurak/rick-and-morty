import { useState } from "react";
import _ from "lodash";

import "./Pagination.scss";

const Pagination = ({ pages, setCurrentPage, currentPage }) => {
  const PagesArray = _(Array(pages))
    .fill(null)
    .map((el, ind) => ind)
    .value();

  const getDisplayedPages = () => {
    if (currentPage - 2 <= 0) return _.range(0, Math.min(5, pages));
    if (currentPage + 2 >= pages) return _.range(Math.max(pages - 5, 0), pages);
    const minPage = Math.max(currentPage - 2, 0);
    const maxPage = Math.min(minPage + 4, pages);
    return _.range(minPage, maxPage + 1);
  };

  const handleClick = (page, isArrowClicable = true) => () => {
    if (!isArrowClicable) return;
    setCurrentPage(page);
  };

  const renderPage = (page) => {
    const isActive = page === currentPage;
    return (
      <div
        onClick={handleClick(page)}
        className={`Pagination__page ${isActive ? "Pagination__page_active" : ""}`}
        key={page}
      >
        {page + 1}
      </div>
    );
  };

  const renderArrowButton = (arr) => {
    const nextPage = arr === ">" ? currentPage + 1 : currentPage - 1;
    const isArrowClicable = nextPage >= 0 || nextPage < pages - 1;
    return (
      <div className="Pagination__page" onClick={handleClick(nextPage, isArrowClicable)}>
        <div className={`${isArrowClicable ? "Pagination__arrow_active" : "Pagination__page"}`}>{arr}</div>
      </div>
    );
  };

  return (
    <div className="Pagination">
      {renderArrowButton("<")}
      {_.map(getDisplayedPages(), renderPage)}
      {renderArrowButton(">")}
    </div>
  );
};

export default Pagination;
