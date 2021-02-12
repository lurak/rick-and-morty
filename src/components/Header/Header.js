import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { quotes } from "../../utils/consts";

import "./Header.scss";

const Header = () => {
  const [quote, setQuote] = useState(quotes[0]);
  let index = 0;
  const TIME = 5000;
  useEffect(() => {
    const interval = setInterval(() => {
      if (quotes.length === index) {
        index = 0;
      }
      setQuote(quotes[index]);
      index = index + 1;
    }, TIME);
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
