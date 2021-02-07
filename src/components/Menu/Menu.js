import "./Menu.scss"
import { PropTypes } from "prop-types";
import { NavLink} from "react-router-dom";

const Menu = ({id, name}) =>{
    return (
        <div className="Menu">
        <NavLink exact to="/" className="Menu__link" activeClassName='"Menu_active'>
          Home
        </NavLink>{" "}
        {`|   `}
        <NavLink
          exact
          to="/character"
          className="Menu__link_active"
          activeClassName='"Menu_active'
        >
          #{id} {name}
        </NavLink>
      </div>
    );
};

Menu.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
}

export default Menu
