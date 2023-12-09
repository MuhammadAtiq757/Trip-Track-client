import React from 'react';
import { LuClock } from "react-icons/lu";
import { FaUser } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import img1 from '../../assets/images/slide-8.jpg'
import img2 from '../../assets/images/slide-3.jpg'
import img3 from '../../assets/images/slide-3.jpg'

const Packages = () => {
    return (
        <div className='mt-40 mb-40'>
<div className='text-center'>
    <h1 className='text-xl'>Popular <span className='bg-green-600 p-2 rounded text-white'>Packages</span></h1>
    <h1 className='text-5xl font-bold mt-4'>The Best Of Our Packages</h1>
</div>


<div className='grid md:grid-cols-3 gap-2 mt-20'>

{/* one */}
<div>
<div className="card  w-96  relative">
  <figure><img className='rounded-lg h-[250px]' src={img1} alt="Shoes" /></figure>

</div>

<div className="card-body absolute -mt-12 bg-white w-72 ml-12 h-40 rounded-lg">
<h2 className="card-title text-green-500">England</h2>
    <p>Lorem ipsum dolor, sit amet consectetur.</p>
    <div className='flex justify-between'>
   <p className='flex items-center'> <LuClock className='mr-2 text-green-600' /> 3 Days 4 Night</p> 
    <p className='flex items-center pl-2'><FaUser className='mr-2 text-green-600' /> 26</p> 
   </div>
   <p className='flex items-center'><CiStar className='mr-2 text-green-600' bg-green-600 /> 4.8</p>
   
   
  </div>

</div>

{/* two */}

<div>
<div className="card  w-96  relative">
  <figure><img className='rounded-lg h-[250px]' src={img2} alt="Shoes" /></figure>

</div>

<div className="card-body absolute -mt-12 bg-white w-72 ml-12 h-40 rounded-lg">
<h2 className="card-title text-green-500">England</h2>
    <p>Lorem ipsum dolor, sit amet consectetur.</p>
    <div className='flex justify-between'>
   <p className='flex items-center'> <LuClock className='mr-2 text-green-600' /> 3 Days 4 Night</p> 
    <p className='flex items-center pl-2'><FaUser className='mr-2 text-green-600' /> 26</p> 
   </div>
   <p className='flex items-center'><CiStar className='mr-2 text-green-600' bg-green-600 /> 4.8</p>
   
   
  </div>

</div>
{/* three */}
<div>
<div className="card  w-96  relative">
  <figure><img className='rounded-lg h-[250px]' src={img3} alt="Shoes" /></figure>

</div>

<div className="card-body absolute -mt-12 bg-white w-72 ml-12 h-40 rounded-lg">
<h2 className="card-title text-green-500">England</h2>
    <p>Lorem ipsum dolor, sit amet consectetur.</p>
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

export default Packages;