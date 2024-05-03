import React from "react";

import { FaCarSide } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const section5 = () => {
  return (
    <section className="bg-gray-100 border-[2px] rounded-md pt-10 pb-10">
      <h1 className="text-3xl font-bold text-center mb-8"> Download Our App to get better Experience</h1>
      <div className="flex justify-center lg:gap-48 flex-wrap  ">
        <box1 className="bg-gradient-to-r from-[#fff193] to-[#e5e5e5] w-80 h-60 rounded-lg mr-10 pb-3 mb-10">
          <div className="flex justify-items-start mt-5 ml-5 border-gray-400 border-[1px] p-1 rounded-lg w-min  ">
            <FaCarSide className="text-yellow-500 h-7 w-12 " />
          </div>
          <div className="item-end mt-[30%] ml-3 mr-3 mx-auto">
            <div className="justify-between flex">
              <h2 className="font-bold ">Our App</h2>
              <FaArrowRight />
            </div>
            <div className="text-sm">
              Book cab in simple and easy way without delay by upi cash and
              monthly paid.
            </div>
          </div>
        </box1>

        <box1 className="bg-gradient-to-r from-[#fff193] to-[#e5e5e5] w-80 h-60 rounded-lg mr-10 pb-3">
          <div className="flex justify-items-start mt-5 ml-5 border-gray-400 border-[1px] p-1 rounded-lg w-min  ">
            <FaCarSide className="text-yellow-500 h-7 w-12 " />
          </div>
          <div className="item-end mt-[30%] ml-3 mr-3 mx-auto">
            <div className="justify-between flex">
              <h2 className="font-bold ">Our App</h2>
              <FaArrowRight />
            </div>
            <div className="text-sm">
              Book cab in simple and easy way without delay by upi cash and
              monthly paid.
            </div>
          </div>
        </box1>
      </div>
    </section>
  );
};

export default section5;
