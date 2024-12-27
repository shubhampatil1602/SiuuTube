import { useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";

import Sidebar from "./Sidebar";

const Body = () => {
  const isSidebarOpen = useSelector((store) => store.app.isSidebarOpen);
  const queryParam = useLocation();
  const route = queryParam.search.split("?v=")[1];

  return (
    <div className='h-[calc(100vh-3.5rem)] w-full overflow-hidden relative flex'>
      {isSidebarOpen ? (
        <div className='w-[300px] h-full overflow-scroll !transition-all !duration-300'>
          <Sidebar />
        </div>
      ) : route ? null : (
        <div className='w-[80px] h-full overflow-scroll !transition-all !duration-300'>
          <Sidebar />
        </div>
      )}
      <div className='w-full h-full overflow-scroll'>
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
