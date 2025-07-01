import { useState } from "react";
import { BiLike } from "react-icons/bi";
import { CgPlayListSearch } from "react-icons/cg";
import { HiHome } from "react-icons/hi";
import { MdHistory, MdOutlineSubscriptions } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";

const Sidebar = () => {
  const [activeSideTab, setActiveSideTab] = useState("Home");
  const topSideItems = [
    {
      icon: <HiHome size={25} />,
      text: "Home",
    },
    {
      icon: <SiYoutubeshorts size={25} />,
      text: "Shorts",
    },
    {
      icon: <MdOutlineSubscriptions size={25} />,
      text: "Subscriptions",
    },
  ];
  const youItems = [
    {
      icon: <MdHistory size={25} />,
      text: "History",
    },
    {
      icon: <CgPlayListSearch size={25} />,
      text: "Playlists",
    },
    {
      icon: <BiLike size={25} />,
      text: "Liked Videos",
    },
  ];

  return (
    <aside className='bg-white dark:bg-zinc-900 w-full h-full px-2 py-3 border-r border-zinc-200 dark:border-zinc-800 relative text-zinc-900 dark:text-zinc-100'>
      <div className='flex flex-col gap-2 pb-4 mb-4 border-b border-zinc-200 dark:border-zinc-800'>
        {topSideItems.map(({ icon, text }) => (
          <div
            key={text}
            className={`${
              activeSideTab === text ? "bg-gray-200 dark:bg-zinc-800" : ""
            } cursor-pointer rounded-lg h-10 pl-2 flex items-center gap-4 hover:bg-gray-200 dark:hover:bg-zinc-800 transition-all`}
            onClick={() => setActiveSideTab(text)}
          >
            {icon}
            <span>{text}</span>
          </div>
        ))}
      </div>

      <div className='flex flex-col gap-2 pb-4 mb-4 border-b border-zinc-200 dark:border-zinc-800'>
        <div
          className={`cursor-pointer rounded-lg h-10 pl-2 flex items-center gap-4 hover:bg-gray-200 dark:hover:bg-zinc-800 transition-all`}
        >
          <span className='font-semibold text-lg'>You</span>{" "}
        </div>
        {youItems.map(({ icon, text }) => (
          <div
            key={text}
            className={`${
              activeSideTab === text ? "bg-gray-200 dark:bg-zinc-800" : ""
            } cursor-pointer rounded-lg h-10 pl-2 flex items-center gap-4 hover:bg-gray-200 dark:hover:bg-zinc-800 transition-all`}
            onClick={() => setActiveSideTab(text)}
          >
            {icon}
            <span>{text}</span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div
        className={`absolute bottom-6 left-0 right-0 mx-auto rounded-lg flex flex-col items-center pl-2 transition-all text-sm`}
      >
        <span>Build in public by</span>
        <a
          href='https://shubhamspatil.vercel.app'
          target='_blank'
          className='font-bold text-lg hover:underline cursor-pointer text-zinc-900 dark:text-zinc-100 text-sm'
        >
          Shubham Patil
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
