import { useDispatch, useSelector } from "react-redux";
import { toggleTab } from "../redux/activeTabSlice";

import { items } from "../utils/data";

const ButtonList = () => {
  const activeTab = useSelector((state) => state.activeTab);
  const dispatch = useDispatch();

  const handleItem = (item) => {
    dispatch(toggleTab(item));
  };

  return (
    <div className='h-14 w-full px-[3.5%] mb-3 flex justify-start items-center gap-3 overflow-scroll'>
      {items.map((item) => (
        <button
          key={item}
          className={`${
            activeTab === item ? "bg-black text-white" : "bg-slate-200/80"
          } text-left transition-all duration-200 font-semibold px-3 py-1 rounded-md whitespace-nowrap`}
          onClick={() => handleItem(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default ButtonList;
