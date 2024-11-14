import PropTypes from "prop-types";
import { FiMapPin } from "react-icons/fi";
import { TbCoinTaka } from "react-icons/tb";

const AppliedJob = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
  } = job;

  const handleShowDetails = () => {};

  return (
    <div className="flex items-center border-2 rounded-lg p-4 my-10">
      <img src={logo} alt="" className="w-40 p-4 bg-gray-50 rounded-lg mr-10" />
      <div className="flex-grow space-y-3">
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
      </div>
      <div>
        <button className="btn" onClick={() => handleShowDetails(id)}>
          View Details
        </button>
      </div>
    </div>
  );
};

AppliedJob.propTypes = {
  job: PropTypes.object.isRequired,
};

export default AppliedJob;
