import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";

export const JobsContext = createContext();

const JobsContextProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("/jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return <JobsContext.Provider value={jobs}>{children}</JobsContext.Provider>;
};

JobsContextProvider.propTypes = {
  children: PropTypes.object.isRequired,
};

export default JobsContextProvider;
