import React from 'react';

const TourGallary = () => {
    return (
        <div className='mt-32 '>
         <div className='text-center'>
            <h1 className='text-xl font-semibold'>Tour <span className='bg-green-600 p-2 rounded text-white'>Gallary</span> </h1>
            <p className='text-4xl font-bold mt-4'>Best Tourist's Shared <br /> Beautiful Photos</p>
         </div>


<div className='mb-4 grid md:grid-cols-3  mx-auto container'>

{/* fist div */}
<div>
{/* <img src="https://i.ibb.co/3pKRYD7/pexels-asad-photo-maldives-1320686.jpg" alt="" /> */}

<div className="card w-96 relative">
  <figure className="px-10 pt-10">
    <img src="https://i.ibb.co/3pKRYD7/pexels-asad-photo-maldives-1320686.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className='bg-gray-300 hover:bg-green-600 transition border-none hover:text-white rounded text-black w-[200px] h-[90px] border absolute ml-[100px] mt-[90px]'>
<div className='p-2 ml-2 mt-1'>
  <p>UAE</p>
<h1 className='font-bold mt-2'>Gray Pyramid, Egypt
</h1> 
</div>
</div>
</div>

<div className="card w-96 relative">
  <figure className="px-10 pt-10">
    <img src="https://i.ibb.co/F8t57WY/pexels-tirachard-kumtanom-472309.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className='bg-gray-300 hover:bg-green-600 transition border-none hover:text-white rounded text-black w-[200px] h-[90px] border absolute ml-[100px] mt-[90px]'>
<div className='p-2 ml-2 mt-1'>
  <p>UAE</p>
<h1 className='font-bold mt-2'>Gray Pyramid, Egypt
</h1> 
</div>
</div>
</div>


</div>




{/* 2div */}
<div>
<div className="card w-96  h-full relative">
  <figure className="px-10 pt-10">
    <img src="https://i.ibb.co/K5mY5Vd/pexels-quang-nguyen-vinh-3355788.jpg" alt="Shoes" className="rounded-xl h-[415px]" />
  </figure>
  <div className='bg-gray-300 hover:bg-green-600 transition border-none hover:text-white rounded text-black w-[200px] h-[90px] border absolute ml-[100px] mt-[200px]'>
<div className='p-2 ml-2 mt-1'>
  <p>UAE</p>
<h1 className='font-bold mt-2'>Gray Pyramid, Egypt
</h1> 
</div>
</div>
</div>


</div>




{/* 3div */}

<div>
{/* <img src="https://i.ibb.co/3pKRYD7/pexels-asad-photo-maldives-1320686.jpg" alt="" /> */}

<div className="card w-96 relative">
  <figure className="px-10 pt-10">
    <img src="https://i.ibb.co/dWT9J20/pexels-mo-ismail-3763190.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className='bg-gray-300 hover:bg-green-600 transition border-none hover:text-white rounded text-black w-[200px] h-[90px] border absolute ml-[100px] mt-[90px]'>
<div className='p-2 ml-2 mt-1'>
  <p>UAE</p>
<h1 className='font-bold mt-2'>Gray Pyramid, Egypt
</h1> 
</div>
</div>
</div>

<div className="card w-96 relative">
  <figure className="px-10 pt-10">
    <img src="https://i.ibb.co/PQf3Tbm/pexels-james-wheeler-1598072.jpg" alt="Shoes" className="rounded-xl h-44 w-96" />
  </figure>

<div className='bg-gray-300 hover:bg-green-600 transition border-none hover:text-white rounded text-black w-[200px] h-[90px] border absolute ml-[100px] mt-[90px]'>
<div className='p-2 ml-2 mt-1'>
  <p>UAE</p>
<h1 className='font-bold mt-2'>Gray Pyramid, Egypt
</h1> 
</div>
</div>

</div>


</div>




</div>




        </div>
    );
};

export default TourGallary;