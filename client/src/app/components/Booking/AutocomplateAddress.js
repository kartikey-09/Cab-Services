import React from "react";

const AutocompleteAddress = () => {
  return (
    <div className=" m-2 border border-gray-300 rounded p-4  bg-white h-auto pb-10">
      <div className="mt-3">
        <label className="text-gray-800 font-normal">From: </label><br></br>
        <input className="border border-gray rounded-lg p-1 w-full focus:border-yellow-300 outline-none" />
      </div>
      <div className="mt-3">
        <label className="text-gray-800 font-normal">To: </label><br></br>
        <input className="border border-gray rounded-lg p-1 w-full focus:border-yellow-300 outline-none" />
      </div>
    </div>
  );
};

export default AutocompleteAddress;
