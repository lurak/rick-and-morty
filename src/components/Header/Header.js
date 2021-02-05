import { Link } from "react-router-dom";
import "./Header.scss";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { useState, useEffect } from "react";

const quotes = [
  "''What, So Everyone’s Supposed To Sleep Every Single Night Now?''",
  "''What People Call 'Love' Is Just A Chemical Reaction...''",
  "''...Meeting Them Head-On, Charging Into 'Em Like A Bull - That's How We Grow As People''",
  "''Weddings Are Basically Funerals With A Cake''",
  "''I Always Slay It, Queen.''",
  "''...Welcome To The Club, Pal!''",
  "''I'm a scientist; because I invent, transform,create, and destroy for a livin...''",
  "''Get Out Of Here, Summer! You Ruined The Season 4 Premiere!''",
  "''Sometimes Science Is More Art Than Science, Morty''",
  "'' Wubba Lubba Dub Dub!''",
  "'' The universe is basically an animal. It grazes on the ordinary. It creates infinite idiots just to eat them.''",
  "''...To Live Is To Risk It All...''",
];

const Header = () => {
  const [quote, setQuote] = useState(quotes[0]);
  var index = 0;
  useEffect(() => {
    const interval = setInterval(() => {
      if (quotes.length == index) {
        index = 0;
      }
      console.log("This will run every second!");
      setQuote(quotes[index]);
      index = index + 1;
    }, 5000);
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
