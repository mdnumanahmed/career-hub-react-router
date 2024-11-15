import PropTypes from "prop-types";

const PageTitle = ({ children }) => {
  return (
    <div className="py-32 text-center text-4xl font-extrabold">{children}</div>
  );
};

PageTitle.propTypes = {
  children: PropTypes.string.isRequired,
};

export default PageTitle;
