import React from 'react';
import { LuBedDouble } from "react-icons/lu";
import { FaLongArrowAltRight } from "react-icons/fa";

const Services = () => {
    return (
        <div className='mt-16 bg-sky-100'>
<div className='text-xl text-center'>
<h1 className='text-xl font-semibold pt-14'>Our <span className='bg-green-600 p-2 rounded text-white'>Services</span></h1>
<p className='text-4xl font-bold mt-2'>What We Offer For You <br />
In Great Packages</p>
</div>

   <div className='grid md:grid-cols-4  container mx-auto'>

   <div className='text-center pt-12  my-4 mx-auto'>
        <div className="hover:bg-inherit hover:transition card w-60 bg-base-100 shadow-xl border-y-4 border-green-600">
  <div className="card-body">
  <LuBedDouble className='mx-auto w-24 h-12 text-green-600 mb-4' />
    <h2 className="text-center text-xl font-semibold">Luxury Cabin</h2>
    <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum.</p>
    <p className='flex gap-1 items-center justify-center text-green-600 mt-4'>Explore More<FaLongArrowAltRight  /> </p>
  </div>
</div>
        </div>



        <div className='text-center pt-12  my-4 mx-auto'>
        <div className="hover:bg-inherit hover:transition card w-60 bg-base-100 shadow-xl border-y-4 border-green-600">
  <div className="card-body">
  <LuBedDouble className='mx-auto w-24 h-12 text-green-600 mb-4' />
    <h2 className="text-center text-xl font-semibold">Luxury Cabin</h2>
    <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum.</p>
    <p className='flex gap-1 items-center justify-center text-green-600 mt-4'>Explore More<FaLongArrowAltRight  /> </p>
  </div>
</div>
        </div>



        <div className='text-center pt-12  my-4 mx-auto'>
        <div className="hover:bg-inherit hover:transition card w-60 bg-base-100 shadow-xl border-y-4 border-green-600">
  <div className="card-body">
  <LuBedDouble className='mx-auto w-24 h-12 text-green-600 mb-4' />
    <h2 className="text-center text-xl font-semibold">Luxury Cabin</h2>
    <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum.</p>
    <p className='flex gap-1 items-center justify-center text-green-600 mt-4'>Explore More<FaLongArrowAltRight  /> </p>
  </div>
</div>
        </div>



        <div className='text-center pt-12  my-4 mx-auto'>
        <div className="hover:bg-inherit hover:transition card w-60 bg-base-100 shadow-xl border-y-4 border-green-600">
  <div className="card-body">
  <LuBedDouble className='mx-auto w-24 h-12 text-green-600 mb-4' />
    <h2 className="text-center text-xl font-semibold">Luxury Cabin</h2>
    <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum.</p>
    <p className='flex gap-1 items-center justify-center text-green-600 mt-4'>Explore More<FaLongArrowAltRight  /> </p>
  </div>
</div>
        </div>


   </div>

        </div>
    );
};

export default Services;