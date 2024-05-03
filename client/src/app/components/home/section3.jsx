import React from "react";

const Section3 = () => {
  return (
    <div className="relative bg-[#f8fdff] w-[90%] mx-auto">
      <div className=" grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 mx-auto w-[90%] lg:flex lg:justify-around">
        <div className="mt-3 relative">
          <img
            src="https://i.ibb.co/pQqncK8/Untitled-design-1-removebg-preview.png"
            alt=""
            width={200}
            height={200}
          />
        </div>
        <div></div>
        <div className="lg:col-span-1 w-[50%] lg:ml-40 lg:mr-40 md:col-span-full sm:col-span-full items-center content-center">
          <h1 className="lg:text-4xl md:text-lg text-center sm:text-lg font-semibold text-gray-900 mb-4">
            India's Budget Bike Auto Services
          </h1>
          <p className="text-center mb-3">
            Swift Go is India's Best and cheap bike and taxi service that
            connects directly with drivers and customers and provides direct
            benefits to both of them without extra charge.
          </p>
          <div className="flex justify-center gap-2">
            <button className="text-sm font-semibold bg-yellow-400 p-2 rounded-br-3xl rounded-tl-xl text-white m-3 ">
              Download App
            </button>
            <button className="text-sm font-semibold bg-yellow-400 p-2 rounded-bl-3xl rounded-tr-xl text-white m-3 ">
              Sign-up as Driver
            </button>
          </div>
        </div>
        <div className="lg:col-span-1 w-[50%] md:col-span-full sm:col-span-full mb-28 lg:flex lg:justify-end ">
          {/* Image with curved dotted line */}
          

          {/* Image */}
          <div className="bg-[#EB8715] rounded-full rounded-br-2xl rotate-45 w-96">
            <img
              className="filter brightness-1 bg-transparent -rotate-45"
              src="https://i.ibb.co/J23r9Xz/white-male-1847763-1280-removebg-preview.png"
              alt=""
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>


    
          
    </div>
  );
};

export default Section3;
