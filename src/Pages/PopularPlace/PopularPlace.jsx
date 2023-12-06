import React from 'react';
import './styles.css';
import { LuClock } from "react-icons/lu";
import { FaUser } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

const PopularPlace = () => {
    return (
        <div className='mt-32 container mx-auto px-4'>
           <div className='text-center'>
           <h1 className='text-xl font-semibold'><span className='bg-green-600 p-2 rounded text-white'>Popular</span>Destination</h1>
            <h1 className='text-5xl font-bold mt-4'>Travel Most Popular Place <br /> In The World</h1>
           </div>

<div className='mt-14 grid md:grid-cols-4 gap-4'>

<div className="card w-full glass">
  <figure>
    <img  src="https://i.ibb.co/wRwx8CT/pexels-asad-photo-maldives-3601421.jpg" alt="car!" className="w-full  h-auto popular bg-inherit"/>
    
  </figure>
  <div className="card-body">
    <h2 className="card-title text-green-500">Maldiv</h2>
    <p>Lorem ipsum dolor sit amet consectetur.</p>
   <div className='flex justify-between'>
   <p className='flex items-center'> <LuClock className='mr-2 text-green-600' /> 3 Days 4 Night</p> 
    <p className='flex items-center pl-2'><FaUser className='mr-2 text-green-600' /> 26</p> 
   </div>
   <p className='flex items-center'><CiStar className='mr-2 text-green-600' bg-green-600 /> 4.8</p>
   
  </div>
</div>
<div className="card w-full  glass">
  <figure>
    <img  src="https://i.ibb.co/b3zx809/pexels-asad-photo-maldives-1450372.jpg" alt="car!" className="w-full h-auto popular"/>
    
  </figure>
  <div className="card-body">
    <h2 className="card-title text-green-500">England</h2>
    <p>Lorem ipsum dolor, sit amet consectetur.</p>
    <div className='flex justify-between'>
   <p className='flex items-center'> <LuClock className='mr-2 text-green-600' /> 3 Days 4 Night</p> 
    <p className='flex items-center pl-2'><FaUser className='mr-2 text-green-600' /> 26</p> 
   </div>
   <p className='flex items-center'><CiStar className='mr-2 text-green-600' bg-green-600 /> 4.8</p>
   
  </div>
</div>
<div className="cardw-full glass">
  <figure>
    <img  src="https://i.ibb.co/DtSKL4q/pexels-oleksandr-p-2166553.jpg" alt="car!" className="w-full h-auto popular rounded"/>
    
  </figure>
  <div className="card-body">
    <h2 className="card-title text-green-500">Singapore</h2>
    <p>Lorem ipsum dolor sit amet consectetur.</p>
    <div className='flex justify-between'>
   <p className='flex items-center'> <LuClock className='mr-2 text-green-600' /> 3 Days 4 Night</p> 
    <p className='flex items-center pl-2'><FaUser className='mr-2 text-green-600' /> 26</p> 
   </div>
   <p className='flex items-center'><CiStar className='mr-2 text-green-600' bg-green-600 /> 4.8</p>
   
  </div>
</div>
<div className="card w-full glass">
  <figure>
    <img  src="https://i.ibb.co/72rcvNm/pexels-roney-john-602607.jpg" alt="car!" className="w-full h-auto popular"/>
    
  </figure>
  <div className="card-body">
    <h2 className="card-title text-green-500">India</h2>
    <p>Lorem ipsum dolor sit amet consectetur.</p>
    <div className='flex justify-between'>
   <p className='flex items-center'> <LuClock className='mr-2 text-green-600' /> 3 Days 4 Night</p> 
    <p className='flex items-center pl-2'><FaUser className='mr-2 text-green-600' /> 26</p> 
   </div>
   <p className='flex items-center'><CiStar className='mr-2 text-green-600' bg-green-600 /> 4.8</p>
   
  </div>
</div>


</div>




        </div>
    );
};

export default PopularPlace;