import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const CustomLink = ({ navItem }) => {
  const { name, path } = navItem;
  return (
    <li>
      <NavLink
        to={path}
        className="text-base font-medium px-4 py-2 hover:bg-blue-50 rounded-lg"
      >
        {name}
      </NavLink>
    </li>
  );
};

CustomLink.propTypes = {
  navItem: PropTypes.object.isRequired,
};

export default CustomLink;
