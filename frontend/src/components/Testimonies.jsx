import React from "react";
import video from '../assets/video.mp4'
const Testimonies = () => {
  return (
    <div className="bg-lime-50 w-screen h-screen">
      <p className="text-3xl italic mx-auto w-fit pt-12 text-lime-500">Watching Jesus do the extraordinary</p>
      <div className="flex mx-auto w-3/4 mt-14">
        <video className="border rounded-full w-3/4" >
        <source src={video} type='video/mp4' />
        </video>
       
        <p className="font-bold text-xl ml-4 w-2/3 mt-28">
          “I realized then that, however strange, terrifying or unlikely it may
          seem Jesus of Nazareth was and is the son of God. In that moment, I
          prayed for Jesus Christ to enter my life as my Lord and Savior, and I
          truly experienced Him directly,” <br/>  <br/>Robbie Moll
        </p>
      </div>
      <p className="w-fit mx-auto mt-20 text-3xl font-bold">UPCOMING EVENTS</p>
      <p className="border mx-auto w-fit px-9 py-4 font-bold text-white bg-lime-500  rounded-full text-2xl mt-14">SEE WHAT’S HAPPENING NEXT</p>
    </div>
  );
};

export default Testimonies;
