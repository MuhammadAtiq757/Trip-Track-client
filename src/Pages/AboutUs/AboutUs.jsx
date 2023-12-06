import React from 'react';
import { GiWillowTree } from "react-icons/gi";
import { IoMdBicycle } from "react-icons/io";
import { GiElephant } from "react-icons/gi";
import { FaPeopleRobbery } from "react-icons/fa6";

const AboutUs = () => {
    return (
        <div className='mt-[120px] container mx-auto grid md:grid-cols-2 gap-4 px-4 '>



<div>
<h1 className='text-xl font-bold mb-8'><span className='bg-green-600 p-2 text-white rounded'>About</span> Us</h1>
<h1 className='text-5xl font-bold'>We are Professional <br /> Planners <br />
for your Vacations</h1>
<p className='mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Vestibulum egestas, neque ut hendrerit egestas, lorem velit
     venenatis urna, vitae consequat enim purus tincidunt urna. 
    Maecenas sollicitudin mi id odio lacinia feugiat</p>

<div className='grid md:grid-cols-2 mt-12 text-xl font-bold gap-2'>
<div>
<h1 className='border-l-4 border-green-600 px-2 flex items-center'><GiWillowTree className='mx-4 w-[30px] text-green-600' /> Tent Campaign </h1>
<h1 className='mt-6 border-l-4 border-green-600 px-2 flex items-center'>  <IoMdBicycle className='mx-4 w-[30px] text-green-600' /> Mounting Biking </h1>

</div>

<div>
<h1 className='border-l-4 border-green-600 px-2 flex items-center'><GiElephant className='mx-4  w-[30px] text-green-600' /> Wild Campaign</h1>
<h1 className='mt-6 border-l-4 border-green-600  px-2 flex items-center'> <FaPeopleRobbery className='mx-4 w-[30px] text-green-600' />Couple Campaign</h1>

</div>

</div>

<button className='btn mt-12 bg-green-600  hover:bg-green-700 hover:text-white border-none'> Discover More </button>

</div>


<div>

<img className='rounded-xl h-full' src="https://i.ibb.co/GWHN68b/pexels-anuradha-gupta-4002705.jpg" alt="" />

</div>


        </div>
    );
};

export default AboutUs;