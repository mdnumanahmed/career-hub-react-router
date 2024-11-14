const getStoredApplication = () => {
  const storedApplication = localStorage.getItem("job-application");
  if (storedApplication) {
    return JSON.parse(storedApplication);
  }
  return [];
};

const saveJobApplication = (id) => {
  const storedApplication = getStoredApplication();
  const exists = storedApplication.find((lsId) => lsId === +id);

  if (!exists) {
    storedApplication.push(id);
    localStorage.setItem("job-application", JSON.stringify(storedApplication));
  }
};

export { saveJobApplication, getStoredApplication };
