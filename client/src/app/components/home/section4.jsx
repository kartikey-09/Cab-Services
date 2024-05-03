import React from 'react'
import Ride from '../../../../public/taxii.png';
import Image from 'next/image';

const section4 = () => {
  return (
    <section className='grid bg-[#051c24] pt-10 pb-10 lg:flex gap-4 mb-10 mt-10 lg:grid-col-2 md:grid-col-1 sm:grid-col-1'>
      <div className='grid-col-1  w-full  h-96 content-center'>

        
      <div className=" h-max pt-4 px-3 rounded-sm border ml-10 py-3">
        <h1 className='text-3xl font-bold text-yellow-500 text-center mb-10 '>Go Amy Where with Swift Go</h1>
        <p className='text-normal font-semibold text-center text-white'>Book a ride hop in, and Go. </p>
          <div className="text-center ">
           <input
              type="text"
              placeholder="Current Location"
              className="border border-yellow-500 rounded-sm m-3 "
            />
          
          </div>
          <div className="text-center">
            <input
              type="text"
              placeholder="Current Location"
              className="border border-yellow-500 rounded-sm m-3"
            />
          </div>
          <div className="text-center">
            <button className="text-sm text-center font-semibold bg-yellow-500 p-2 rounded-br-3xl rounded-tl-xl text-white m-3 ">
              SEARCH YOUR CABS
            </button>
          </div>
        </div>
      </div>
      <div className='grid-col-1  w-full h-96   '>

        <Image src={Ride}></Image>

      </div>




    </section>
  )
}

export default section4