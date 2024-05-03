import React from "react";

const section1 = () => {
  const Car =
    "https://images.pexels.com/photos/5835053/pexels-photo-5835053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  return (
    <div>
      <div className="relative w-full bg-gray-50 h-80 ">
        <img src={Car} alt="" className="object-cover w-full h-full" />

        <div className="absolute inset-0 flex items-center justify-center mt-10 ml-10 bg-black opacity-70  w-60 h-40 content-center">
          <h2 className="text-white uppercase text-center z-auto">
            Moving People<p> and the Worlds </p>
          </h2>
        </div>
      </div>

      
    </div>
  );
};

export default section1;
