import { Outlet } from "react-router-dom";
import CustomNav from "../Shared/Header/CustomNav";
import Footer from "../Shared/Footer/Footer";

const Root = () => {
  return (
    <div>
      <CustomNav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
