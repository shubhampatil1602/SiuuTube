import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import { useEffect } from "react";
import { closeMenu } from "../redux/appSlice";

const Body = () => {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((store) => store.app.isSidebarOpen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 642) {
        dispatch(closeMenu());
      }
    };

    // Attach the resize event listener
    window.addEventListener("resize", handleResize);

    // Call the handler initially to check the current width
    handleResize();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch]);

  return (
    <div className='h-[calc(100vh-3.5rem)] w-full relative flex'>
      {isSidebarOpen ? (
        <div
          className={`w-[300px] h-full overflow-scroll !transition-all !duration-300`}
        >
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
