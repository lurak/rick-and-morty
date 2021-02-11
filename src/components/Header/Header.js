import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { quotes } from "../../utils/consts";

import "./Header.scss";

const Header = () => {
  const [quote, setQuote] = useState(quotes[0]);
  // TODO: don't use var's, they are bad :)
  // Read about ES6, and why const / let are better then var
  var index = 0; 
  useEffect(() => {
    const interval = setInterval(() => {
      if (quotes.length === index) {
        index = 0;
      }
      setQuote(quotes[index]);
      index = index + 1;
    }, 5000); // TODO: such things are better to keep in a variable
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="Header">
      <Link to="/">
        <Logo className="Header__logo" />
      </Link>
      <div className="Header__quotes">{quote}</div>
    </div>
  );
};

export default Header;
