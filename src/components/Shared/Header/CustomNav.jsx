import { Link } from "react-router-dom";
import CustomLink from "./CustomLink";

const CustomNav = () => {
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
  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <Link to={"/"} className="text-3xl font-extrabold text-[#1A1919]">
            Career Hub
          </Link>
        </div>
        <div>
          <ul className="custom-nav flex gap-4">
            {navItems.map((navItem) => (
              <CustomLink key={navItem.id} navItem={navItem} />
            ))}
          </ul>
        </div>
        <div>
          <button className="bg-linear px-7 py-5 text-xl font-extrabold text-white rounded-lg">
            Start Applying
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomNav;
