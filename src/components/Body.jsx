import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";

const Body = () => {
  return (
    <div className='border flex gap-10'>
      <Sidebar />
      <MainContainer />
    </div>
  );
};

export default Body;
