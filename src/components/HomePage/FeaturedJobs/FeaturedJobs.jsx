import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import FeaturedJob from "./FeaturedJob";

const FeaturedJobs = () => {
  const [featuredJobs, setFeaturedJobs] = useState([]);
  const [limit, setLimit] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setFeaturedJobs(data));
  }, []);

  return (
    <div className="container mx-auto">
      <SectionTitle
        title="Featured Jobs"
        subTitle="Explore thousands of job opportunities with all the information you need. Its your future"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {featuredJobs.slice(0, limit).map((job) => (
          <FeaturedJob key={job.id} job={job} />
        ))}
      </div>

      <div className="text-center my-14">
        <button onClick={() => setLimit(featuredJobs.length)} className="btn">
          Show All
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
