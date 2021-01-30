import {useState} from "react";
import _ from "lodash";

import "./Pagination.scss";

const Pagination = ({pages, callback}) => {
    const [currentPage, setCurrentPage] = useState(0);

    const setPagesArray = _(Array(pages))
      .fill(null)
      .map((el, ind )=> ind)
      .value();
    
    const renderPage = (page) =>{
        const isActive = page === currentPage;
        return(
            <div className={`Pagination__page ${isActive ? "Pagination__page_active" : ""}`} key={page}>
                {page + 1}
            </div>
        );
    };

    const renderArrowButton = (arr) => {
        return (
            <div className="Pagination__page">
                {arr}
            </div>
        );
    };

    return (
        <div className="Pagination">
            {renderArrowButton("<")}
            {_.map(setPagesArray, renderPage)}
            {renderArrowButton(">")}
        </div>
    )
}


export default Pagination;