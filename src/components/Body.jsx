import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";

const Body = () => {
  const isSidebarOpen = useSelector((store) => store.app.isSidebarOpen);

  return (
    <div className='min-h-screen w-full relative grid grid-cols-2 sm:grid-cols-12 dark:bg-neutral-900'>
      {isSidebarOpen && (
        <div
          className={`sticky top-[56px] bg-white dark:bg-neutral-900 z-10 hidden sm:block ${
            isSidebarOpen ? "sm:col-span-2" : ""
          } h-[calc(100vh-56px)] border-r dark:border-neutral-800`}
        >
          <div className='overflow-auto h-full'>
            <Sidebar />
          </div>
        </div>
      )}

      <div className={`${isSidebarOpen ? "col-span-10" : "col-span-12"}`}>
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
