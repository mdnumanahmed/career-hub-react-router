import PropTypes from "prop-types";

const SectionTitle = ({ title, subTitle }) => {
  return (
    <div className="pt-10 lg:pt-32 pb-8 text-center space-y-4">
      <h2 className="text-5xl font-extrabold text-dark01">{title}</h2>
      <p className="text-base font-medium text-dark03">{subTitle}</p>
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};
export default SectionTitle;
