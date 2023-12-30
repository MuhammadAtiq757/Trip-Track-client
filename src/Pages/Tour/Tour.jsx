import React, { useEffect, useState } from 'react';
import { CiStar } from 'react-icons/ci';
import { FaUser } from 'react-icons/fa6';
import { LuClock } from 'react-icons/lu';

const Tour = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; 
  useEffect(() => {
    const fetchData = () => {
      fetch('./datas.json')
        .then(response => response.json())
        .then(result => setData(result));
    };

    fetchData();
  }, []);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextPage = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  return (
   <div className='mt-20'>
    <h1 className='text-center text-5xl font-bold mb-2 text-green-600'>Tour</h1>
<h1 className='text-4xl font-bold text-center'>Destination</h1>


<div className='mt-20 grid md:grid-cols-3 gap-4 px-6'>
      {currentItems.map(tour => (
        <div key={tour.id} className="card w-full glass">
          <figure>
            <img src="https://i.ibb.co/wRwx8CT/pexels-asad-photo-maldives-3601421.jpg" alt="car!" className="w-full h-auto popular bg-inherit" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-green-500">{tour.popularTitle}</h2>
            <p>{tour.popularPlace}</p>
            <div className='flex justify-between'>
              <p className='flex items-center'> <LuClock className='mr-2 text-green-600' /> {tour.tourDuration}</p>
              <p className='flex items-center pl-2'><FaUser className='mr-2 text-green-600' />{tour.bookedNumber}</p>
            </div>
            <p className='flex items-center'><CiStar className='mr-2 text-green-600' bg-green-600 /> {tour.ratings}</p>
          </div>
        </div>
      ))}
      <div className="pagination mt-4 flex items-center gap-6 ml-[450px]">
        <button className='btn bg-green-600 text-white hover:bg-yellow-500 hover:text-black' onClick={handlePrevPage} disabled={currentPage === 1}>
          Prev
        </button>
        <span className="page-number">{currentPage}</span>
        <button className='btn bg-green-600 text-white hover:bg-yellow-500 hover:text-black' onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
   </div>
  );
};

export default Tour;
