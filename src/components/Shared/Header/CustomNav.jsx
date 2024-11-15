import { Link, useLocation } from "react-router-dom";
import CustomLink from "./CustomLink";
import { BiX, BiMenuAltLeft } from "react-icons/bi";
import { useState } from "react";
import PageTitle from "../PageTitle/PageTitle";

const CustomNav = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navItems = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Statistics",
      path: "/statistics",
    },
    {
      id: 3,
      name: "Jobs",
      path: "/jobs",
    },
    {
      id: 4,
      name: "Applied Jobs",
      path: "/applied-jobs",
    },
    {
      id: 5,
      name: "Blogs",
      path: "/blogs",
    },
  ];

  // const bgStyle = {
  //   backgroundColor: "grey",
  //   backgroundImage:
  //     "url('./assets/images/bg1.png'),url('./assets/images/bg2.png')",
  //   backgroundPosition: "top left, bottom right",
  //   background_Size: "25px, 25px",
  //   backgroundRepeat: "no-repeat,no-repeat",
  // };
  // bg-linear-5;

  return (
    <div
      className={`${
        location.pathname === "/"
          ? "bg-linear-5"
          : "bg-blue-50 [background-image:url(./assets/images/bg1.png),_url(./assets/images/bg2.png)] bg-no-repeat [background-size:200px,200px] [background-position:left_bottom,right_top]"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex gap-5">
          <div onClick={() => setOpen(!open)} className="text-3xl lg:hidden">
            {!open ? <BiMenuAltLeft /> : <BiX />}
          </div>
          <Link
            to="/"
            className="text-2xl md:text-3xl font-extrabold text-[#1A1919]"
          >
            Career Hub
          </Link>
        </div>
        <div>
          <ul
            className={`${
              open ? "left-0 top-14" : "-top-60 left-0"
            } custom-nav absolute lg:static duration-1000 p-6 md:p-0 bg-indigo-300 md:bg-transparent rounded-lg md:rounded-none flex-row space-y-4 md:space-y-0 md:flex gap-4`}
          >
            {navItems.map((navItem) => (
              <CustomLink key={navItem.id} navItem={navItem} />
            ))}
          </ul>
        </div>
        <div>
          <button className="bg-linear px-3 md:px-7 py-1 md:py-5 text-lg md:text-xl font-extrabold text-white rounded-lg">
            Start Applying
          </button>
        </div>
      </div>
      {location.pathname !== "/" && (
        <PageTitle>
          {location.pathname === "/statistics"
            ? "Statistics"
            : location.pathname === "/jobs"
            ? "All Jobs"
            : location.pathname === "/applied-jobs"
            ? "Applied Jobs"
            : location.pathname === "/blogs"
            ? "Blogs"
            : location.pathname.slice(0, 4) === "/job"
            ? "Job Details"
            : ""}
        </PageTitle>
      )}
    </div>
  );
};

export default CustomNav;
