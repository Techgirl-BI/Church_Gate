import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const ChurchAddress = () => {
  return (
    <div className="bg-black py-10 text-wrap text-white text-center ">
        <FaLocationDot className="mx-auto h-10 text-blue-400" />
      <pre className="">
        CHURCH INFORMATION <br/>
       Km 4, Gbogon-Osogbo Road,<br/> P.O Box 1838, Osogbo, Nigeria.
      </pre>

      <button>GET DIRECTIONS</button>
    </div>
  );
};

export default ChurchAddress;
