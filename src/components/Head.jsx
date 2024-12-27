import { useDispatch } from "react-redux";

import { FaYoutube } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdKeyboardVoice } from "react-icons/md";
import { RiSearchLine } from "react-icons/ri";
import { toggleSidebar } from "../redux/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const handleSidebar = () => {
    dispatch(toggleSidebar());
  };

  return (
    <nav className='h-14 sticky bg-white z-10 top-0 flex items-center justify-between px-6'>
      {/* (Left) - Ham Menu & Logo */}
      <div className='flex justify-center items-center gap-x-6'>
        <div className='font-bold' onClick={handleSidebar}>
          <GiHamburgerMenu size={24} className='cursor-pointer ' />
        </div>
        <a href={"/"}>
          <div className='flex justify-center items-center gap-x-1.5'>
            <FaYoutube size={30} color='red' />
            <span className='font-bold text-2xl tracking-tight'>SiuuTube</span>
          </div>
        </a>
      </div>

      {/* (Middle) - Search Bar */}
      <div className='flex w-[39rem] gap-4'>
        <div className='border h-10 w-full pl-4 flex justify-between items-center rounded-3xl'>
          <input
            type='text'
            placeholder='Search'
            className='outline-none pr-1 w-full'
          />
          <button className='bg-slate-100 h-full w-16 overflow-hidden rounded-r-3xl border-l flex justify-center items-center'>
            <RiSearchLine size={20} />
          </button>
        </div>
        <button className='h-10 w-11 bg-slate-100 rounded-full flex justify-center items-center'>
          <MdKeyboardVoice size={25} />
        </button>
      </div>

      {/* (Right) - User Info */}
      <div className='flex items-center justify-center gap-5'>
        <button className='flex justify-center items-center gap-0.5 bg-slate-100 rounded-3xl h-10 w-24'>
          <FiPlus size={25} />
          <span className='font-semibold text-sm'>Create</span>
        </button>
        <button>
          <IoMdNotificationsOutline size={30} />
        </button>
        <button>
          <img
            src='https://yt3.ggpht.com/yti/ANjgQV-VoNAOqZfsmMRRRNjBjuzlunbgkAlFi9t9NnZj48so2Amg=s108-c-k-c0x00ffffff-no-rj'
            alt='profile'
            className='h-8 w-8 rounded-full'
          />
        </button>
      </div>
    </nav>
  );
};

export default Head;
