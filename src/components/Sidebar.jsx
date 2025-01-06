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
    <aside className='bg-slate-0 w-full h-full px-2 py-3 border-r'>
      <div className='flex flex-col gap-2 pb-4 mb-4 border-b'>
        {topSideItems.map(({ icon, text }) => (
          <div
            key={text}
            className={`${
              activeSideTab === text && "bg-gray-200"
            } cursor-pointer rounded-lg h-10 pl-2 flex items-center gap-4 hover:bg-gray-200 transition-all`}
            onClick={() => setActiveSideTab(text)}
          >
            {icon}
            <span>{text}</span>
          </div>
        ))}
      </div>

      <div className='flex flex-col gap-2 pb-4 mb-4 border-b'>
        <div
          className={`cursor-pointer rounded-lg h-10 pl-2 flex items-center gap-4 hover:bg-gray-200 transition-all`}
        >
          <span className='font-semibold text-lg'>You</span> ＞
        </div>
        {youItems.map(({ icon, text }) => (
          <div
            key={text}
            className={`${
              activeSideTab === text && "bg-gray-200"
            } cursor-pointer rounded-lg h-10 pl-2 flex items-center gap-4 hover:bg-gray-200 transition-all`}
            onClick={() => setActiveSideTab(text)}
          >
            {icon}
            <span>{text}</span>
          </div>
        ))}
      </div>

      <div className='flex flex-col gap-2 pb-4 mb-4 border-b'>
        <div
          className={`cursor-pointer rounded-lg h-10 pl-2 flex items-center gap-4 hover:bg-gray-200 transition-all`}
        >
          <span className='font-bold text-lg'>Subscriptions</span>
        </div>
        {youItems.map(({ icon, text }) => (
          <div
            key={text}
            className={`${
              activeSideTab === text && "bg-gray-200"
            } cursor-pointer rounded-lg h-10 pl-2 flex items-center gap-4 hover:bg-gray-200 transition-all`}
            onClick={() => setActiveSideTab(text)}
          >
            <div className='h-6 w-6 rounded-full bg-slate-400'></div>
            <span>{text}</span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div
        className={`rounded-lg flex flex-col items-center h-10 pl-2 transition-all`}
      >
        <span>Made with 🤬❤️😄</span>
        <a
          href='https://github.com/shubhampatil1602'
          target='_blank'
          className='font-bold text-lg hover:underline cursor-pointer '
        >
          Shubham Patil
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
