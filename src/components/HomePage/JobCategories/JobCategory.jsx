import PropTypes from "prop-types";

const JobCategory = ({ category }) => {
  const { logo, category_name, availability } = category;
  return (
    <div className="p-10 rounded-lg bg-linear-5 space-y-8 text-center md:text-left">
      <div className="">
        <img
          className="p-4 bg-linear-10 rounded-lg inline-block"
          src={logo}
          alt=""
        />
      </div>
      <div className="space-y-2">
        <h3 className="text-xl font-extrabold text-dark02">{category_name}</h3>
        <p className="text-base font-medium text-dark03">{availability}</p>
      </div>
    </div>
  );
};

JobCategory.propTypes = {
  category: PropTypes.object.isRequired,
};

export default JobCategory;
