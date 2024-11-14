import { useEffect, useState } from "react";
import { getStoredApplication } from "../../utilities/fakeDb";
import { useLoaderData } from "react-router-dom";
import AppliedJob from "./AppliedJob";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    const storedJobsId = getStoredApplication();
    const jobApplied = jobs.filter((job) =>
      storedJobsId.includes(job.id.toString())
    );
    setAppliedJobs(jobApplied);
    setFilteredJobs(jobApplied);
  }, [jobs]);

  const handleFilterJobs = (e) => {
    if (e.target.value === "all") {
      setFilteredJobs(appliedJobs);
    } else if (e.target.value === "remote") {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setFilteredJobs(remoteJobs);
    } else if (e.target.value === "onsite") {
      const onsiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setFilteredJobs(onsiteJobs);
    }
  };

  return (
    <div>
      <div className="container mx-auto py-32">
        <h1 className="text-center text-3xl font-extrabold ">
          Total Applied Jobs: {appliedJobs.length}
        </h1>
        <div className="text-right my-3">
          <select
            onClick={(e) => handleFilterJobs(e)}
            className="min-w-32 bg-gray-300 border-2 border-blue-500 px-4 py-1 rounded-lg"
          >
            <option value="">Filter By</option>
            <option value="all">All</option>
            <option value="remote">Remote</option>
            <option value="onsite">Onsite</option>
          </select>
        </div>
        <div>
          {filteredJobs.map((job) => (
            <AppliedJob key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
