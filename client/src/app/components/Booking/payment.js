"use client"
import React, { useState } from 'react';
import Pay from '../../data/pay';

const Payment = () => {
    const pay = Pay();
    const [selected, SetSelected] =useState();
    return (
        <div className='border border-gray bg-white p-2 '>
            <h2 className='font-bold'>Payment Methods</h2>
            <div  className='flex flex-wrap mt-4 mb-4'>
                {pay.map((item, index) => (
                    <div >
                    <img key={index} onClick={()=>SetSelected(index)} className={`border rounded-md mx-3 cursor-pointer  ${(index == selected ? 'border border-yellow-400 border-[2px]' : null)}`}  src={item.image}  width={70} height={40} />
                       
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Payment;
