import { Outlet } from "react-router-dom";
import CustomNav from "../Shared/Header/CustomNav";

const Root = () => {
  return (
    <div>
      <CustomNav />
      <Outlet />
    </div>
  );
};

export default Root;
