"use client"
import React, { useState } from "react";
import Carslist from "../../data/page"; // Assuming this is the correct path

const Cars = () => {
  const cars = Carslist(); // Call the function to get the array of cars
const [selectedcar, SetSelectedCar] = useState();
  return (
    <div className="mt-3">
      <h2 className="font-semibold">Select Car</h2>
      <div className="flex flex-wrap m-3">
        {cars.map((item, index) => (
          <div
            key={index} onClick={()=>SetSelectedCar(index)}
            className={`p-4 border border-yellow-[1px] rounded-lg m-2  hover:bg-yellow-50 hover:cursor-pointer ${(index==selectedcar ? 'bg-yellow-100' : null)}`}
          >
            <img src={item.image} alt={item.name} width={90} height={100} />
            <h2 className="text-[12px] font-bold mt-2">{item.name}</h2>
            <span className="text-yellow-500 text-[12px] font-bold ">{item.charges}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cars;
