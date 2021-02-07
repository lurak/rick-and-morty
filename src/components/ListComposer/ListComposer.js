import "./ListComposer.scss";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";

const ListComposer = ({ elements, getter, label, url }) => {
  const indexes = Array();
  for (let i = 0; i < elements?.length; i++) {
    if (elements[i][elements[i].length - 2] === "/") {
      indexes.push(Number(elements[i].substring(elements[i].length - 1, elements[i].length)));
    } else {
      indexes.push(Number(elements[i].substring(elements[i].length - 2, elements[i].length)));
    }
  }

  
  const [items, setItems] = useState([]);
  useEffect(() => {
    loadItems(indexes);
  }, []);

  const loadItems = async (ind) => {
    const item = await getter(ind);
    if (ind.length === 1) {
        setItems(Array(item));
    } else {
        setItems(item);
      }
  };
  return (
    <div className="ListComposer">
      <p className="ListComposer__infoLabel">{label}:</p>
      {items?.map((element) => (
        <p key={element.id} className="ListComposer__infoLabelEp">
          <Link to={`/${url}/${element.id}`} className="ListComposer__link">
          {element.name}
          </Link>
        </p>
      ))}
    </div>
  );
};

export default ListComposer;
