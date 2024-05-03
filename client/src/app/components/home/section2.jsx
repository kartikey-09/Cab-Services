import Link from "next/link";
import React from "react";

const section2 = () => {
  return (
    <div>
      <div className=" relative lg:w-9/12 w-max mx-auto -mt-10 z-50 mb-20 ">
        <div className=" bg-gray-100 text-gray-900 p-3 border border-y-gray-200 h-min w-52 flex justify-center  mt-1 ">
          <h2 className="font-semibold ">Get Your Best Drive</h2>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 mx-auto h-max pt-4 bg-gray-100 px-3 rounded-sm border border-secondary">
          <div className="lg:col-span-1 md:col-span-full sm:col-span-full">
            <input
              type="text"
              placeholder="Current Location"
              className="border border-yellow-500 rounded-sm m-3 "
            />
          </div>
          <div className="lg:col-span-1 md:col-span-full sm:col-span-full">
            <input
              type="text"
              placeholder="Current Location"
              className="border border-yellow-500 rounded-sm m-3"
            />
          </div>
          <div className="lg:col-span-1 md:col-span-full sm:col-span-full">
            <button className="text-sm font-semibold bg-yellow-500 p-2 rounded-br-3xl rounded-tl-xl text-white m-3 ">
              SEARCH YOUR CABS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default section2;
