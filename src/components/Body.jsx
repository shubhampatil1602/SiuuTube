import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";

const Body = () => {
  const isSidebarOpen = useSelector((store) => store.app.isSidebarOpen);

  return (
    <div className='h-[calc(100vh-3.5rem)] w-full relative flex'>
      {isSidebarOpen ? (
        <div className='w-[300px] h-full overflow-scroll !transition-all !duration-300'>
          <Sidebar />
        </div>
      ) : (
        <div className='w-[0px] h-full overflow-scroll !transition-all !duration-300'>
          {/* <Sidebar /> */}
        </div>
      )}
      <div className='w-full h-full overflow-scroll'>
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
