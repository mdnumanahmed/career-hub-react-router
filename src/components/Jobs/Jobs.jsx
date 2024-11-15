import { useContext } from "react";
import { JobsContext } from "../Provider/JobsContextProvider";
import FeaturedJob from "../HomePage/FeaturedJobs/FeaturedJob";

const Jobs = () => {
  const jobs = useContext(JobsContext);
  console.log(jobs);
  return (
    <div className="container mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {jobs.map((job) => (
          <FeaturedJob key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default Jobs;
