import { useSelector } from "react-redux";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  const isSidebarOpen = useSelector((store) => store.app.isSidebarOpen);
  return (
    <div
      className={`h-full ${
        isSidebarOpen ? "w-[calc(w-full-240px)] ml-[210px]" : "w-full"
      }`}
    >
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
