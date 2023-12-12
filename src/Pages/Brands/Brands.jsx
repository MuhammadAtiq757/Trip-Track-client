import React from 'react';
import brand1 from '../../assets/images/1.png'
import brand2 from '../../assets/images/2.png'
import brand3 from '../../assets/images/3.png'
import brand4 from '../../assets/images/4.png'
import brand5 from '../../assets/images/5.png'


const Brands = () => {
    return (
        <div>

        <div className='w-18 text-center mb-12 text-xl'>
            <small className='text-center bg-green-600 rounded-xl p-3 text-white'>4k + Brands Trust Us</small>
         

            </div>    

<div className='grid md:grid-cols-5 gap-4 container mx-auto'>
<img src={brand1} alt="" />
<img src={brand2} alt="" />
<img src={brand3} alt="" />
<img src={brand4} alt="" />
<img src={brand5} alt="" />
</div>

        </div>
    );
};

export default Brands;