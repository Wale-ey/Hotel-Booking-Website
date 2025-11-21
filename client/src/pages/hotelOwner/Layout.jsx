import { Outlet } from "react-router-dom";
import Navbar from "./../../components/hotelOwner/Navbar";
import Sidebar from "./../../components/hotelOwner/Sidebar";

const Layout = () => {
  return (
    <div className="flex flex-col h-screen mt-12">
      <Navbar />
      <div className="flex h-full">
        <Sidebar />
        <div className="flex-1 p-4 pt-1 md:px-10 h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
