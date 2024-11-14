import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import JobCategory from "./JobCategory";

const JobCategories = () => {
  const categories = useLoaderData();
  console.log(categories);
  return (
    <div className="container mx-auto">
      <SectionTitle
        title="Job Category List"
        subTitle="Explore thousands of job opportunities with all the information you need. Its your future"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <JobCategory key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default JobCategories;
