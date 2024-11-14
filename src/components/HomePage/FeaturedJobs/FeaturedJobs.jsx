import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import FeaturedJob from "./FeaturedJob";

const FeaturedJobs = () => {
  const [featuredJobs, setFeaturedJobs] = useState([]);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setFeaturedJobs(data));
  }, []);
  console.log(featuredJobs);
  return (
    <div className="container mx-auto">
      <SectionTitle
        title="Featured Jobs"
        subTitle="Explore thousands of job opportunities with all the information you need. Its your future"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {featuredJobs.map((job) => (
          <FeaturedJob key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
