import PropTypes from "prop-types";
import { FiMapPin } from "react-icons/fi";
import { TbCoinTaka } from "react-icons/tb";
const FeaturedJob = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    job_type,
    location,
    remote_or_onsite,
    salary,
  } = job;
  return (
    <div className="space-y-4">
      <img src={logo} alt="" className="w-auto max-h-20 object-fill" />
      <h3 className="text-2xl font-extrabold text-dark02">{job_title}</h3>
      <p className="text-xl font-semibold text-dark03">{company_name}</p>
      <div>
        <div className="rounded-md inline-block bg-linear p-0.5 mr-4">
          <div className="bg-white px-5 py-2 rounded-md">
            <button className="text-linear text-base font-extrabold">
              {remote_or_onsite}
            </button>
          </div>
        </div>
        <div className="rounded-md inline-block bg-linear p-0.5">
          <div className="bg-white px-5 py-2 rounded-md">
            <button className="text-linear text-base font-extrabold">
              {job_type}
            </button>
          </div>
        </div>
      </div>
      <div className="text-xl font-semibold text-dark03 flex gap-5">
        <div className="flex gap-2 items-center">
          <FiMapPin />
          {location}
        </div>
        <div className="flex gap-2 items-center">
          <TbCoinTaka />
          {salary}
        </div>
      </div>
      <button className="btn" onClick={id}>
        View Details
      </button>
    </div>
  );
};

FeaturedJob.propTypes = {
  job: PropTypes.object.isRequired,
};
export default FeaturedJob;
