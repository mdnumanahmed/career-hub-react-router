import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const CustomLink = ({ navItem }) => {
  const { name, path } = navItem;
  return (
    <li className="hover:bg-blue-50 rounded-lg duration-75">
      <NavLink to={path} className="text-base font-medium px-4 py-2 ">
        {name}
      </NavLink>
    </li>
  );
};

CustomLink.propTypes = {
  navItem: PropTypes.object.isRequired,
};

export default CustomLink;
