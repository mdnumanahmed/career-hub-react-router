import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLoaderData, useParams } from "react-router-dom";
import { BiCalendar, BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { TbCoinTaka } from "react-icons/tb";
import { saveJobApplication } from "../../utilities/fakeDb";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const job = jobs.find((job) => job.id === +id);
  const {
    contact_information,
    educational_requirements,
    experiences,
    job_description,
    job_responsibility,
    job_title,
    salary,
  } = job;

  const handleSaveId = (id) => {
    saveJobApplication(id);
    toast("Your job application submitted successfully");
  };

  return (
    <div>
      <div className="container mx-auto py-32 grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="space-y-6 col-span-2 p-8 border-2 rounded-lg">
          <p className="text-base font-medium text-dark03">
            <span className="font-extrabold text-dark01">
              Job Description:{" "}
            </span>{" "}
            {job_description}
          </p>
          <p className="text-base font-medium text-dark03">
            <span className="font-extrabold text-dark01">
              Job Responsibility:{" "}
            </span>{" "}
            {job_responsibility}
          </p>
          <p className="text-base font-extrabold text-dark01">
            Educational Requirements:
          </p>
          <p className="text-base font-medium text-dark03">
            {educational_requirements}
          </p>
          <p className="text-base font-extrabold text-dark01">Experiences:</p>
          <p className="text-base font-medium text-dark03">{experiences}</p>
        </div>
        <div className="bg-linear-10 p-8 rounded-lg space-y-4">
          <h3 className="text-base font-extrabold text-dark01">Job Details</h3>
          <hr className="py-2" />
          <div className="flex gap-2 items-center">
            <TbCoinTaka className="text-2xl text-blue-400" />
            <p className="text-base font-medium text-dark03">
              <span className="text-base font-bold text-dark02">Salary : </span>{" "}
              {salary} (Per Month)
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <BiCalendar className="text-2xl text-blue-400" />
            <p className="text-base font-medium text-dark03">
              <span className="text-base font-bold text-dark02">
                Job Title :{" "}
              </span>
              {job_title}
            </p>
          </div>

          <h3 className="text-base font-extrabold text-dark01 pt-5">
            Contact Information
          </h3>
          <hr className="py-2" />
          <div className="flex gap-2 items-center">
            <BiPhone className="text-2xl text-blue-400" />
            <p className="text-base font-medium text-dark03">
              <span className="text-base font-bold text-dark02">Phone : </span>
              {contact_information.phone}
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <BiEnvelope className="text-2xl text-blue-400" />
            <p className="text-base font-medium text-dark03">
              <span className="text-base font-bold text-dark02">Email : </span>
              {contact_information.email}
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <BiMap className="text-2xl text-blue-400" />
            <p className="text-base font-medium text-dark03">
              <span className="text-base font-bold text-dark02">
                Address :{" "}
              </span>
              {contact_information.address}
            </p>
          </div>
          <div>
            <button onClick={() => handleSaveId(id)} className="btn w-full">
              Apply Now
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
