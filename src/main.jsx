import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root.jsx";
import Home from "./components/HomePage/Home/Home.jsx";
import JobDetails from "./components/JobDetails/JobDetails.jsx";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs.jsx";
import JobsContextProvider from "./components/Provider/JobsContextProvider.jsx";
import Jobs from "./components/Jobs/Jobs.jsx";
import Blogs from "./components/Blogs/Blogs.jsx";
import Statistics from "./components/Statistics/Statistics.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/categories.json"),
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/job/:id",
        loader: () => fetch("/jobs.json"),
        element: <JobDetails />,
      },
      {
        path: "/applied-jobs",
        loader: () => fetch("/jobs.json"),
        element: <AppliedJobs />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <JobsContextProvider>
      <RouterProvider router={router} />
    </JobsContextProvider>
  </StrictMode>
);
