import { Link } from "react-router-dom";
import "./Header.scss";
import Search from "../Search";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";

const Header = () => {
  return (
    <div className="Header">
      <Link to="/">
        <Logo className="Header__logo" />
      </Link>
      <Search className="Header__search" />
    </div>
  );
};

export default Header;
