import "./Menu.scss"
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

export default Menu
