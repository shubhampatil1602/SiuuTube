import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { closeMenu } from "../redux/appSlice";

const WatchPage = () => {
  const queryParam = useLocation();
  const dispatch = useDispatch();
  const videoId = queryParam.search.split("?v=")[1];

  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className='h-full p-4'>
      <div className='mt-3'>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?si=k6qhJWPSGDVUdxkk&autoplay=1`}
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerPolicy='strict-origin-when-cross-origin'
          allowfullscreen
          className='rounded-lg w-full h-[350px] sm:h-[450px] md:w-[800px] lg:w-[1000px] lg:h-[500px]'
        ></iframe>
      </div>
    </div>
  );
};

export default WatchPage;
