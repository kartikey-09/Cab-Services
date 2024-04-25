import React from "react";
import AutocomplateAddress from "./AutocomplateAddress";
import Cars from "../Booking/Cars";
import Payments from "../Booking/payment";

const Booking = () => {
  return (
    <div className="p-2">
      <h2 className="font-semibold ">Booking</h2>

      <AutocomplateAddress />
      <Cars />
      <Payments />
      <div className="px-10 m-5 ">
        <button className="bg-yellow-400 text-white font-bold w-full p-2 text-md rounded-sm">
          Book
        </button> 
      </div>
    </div>
  );
};

export default Booking;
