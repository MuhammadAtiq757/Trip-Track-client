import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png'

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-gray-700 text-white ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 bg-gray-700  hover:bg-inherit">
      <li className='hover:bg-green-500 rounded transition'><a>Home</a></li>
      <li className='hover:bg-green-500 rounded transition'> <Link to='/tour'>Tour</Link></li>
      <li className='hover:bg-green-500 rounded transition'><a>About</a></li>
      <li className='hover:bg-green-500 rounded transition'><a>Service</a></li>
        <li >
          <a className='hover:bg-green-500 rounded transition'>Pages</a>
          <ul className="p-2">
          <li className='hover:bg-green-500 rounded transition'><a>package Details</a></li>
            <li className='hover:bg-green-500 rounded transition'><a>Blog Details</a></li>
          </ul>
        </li>
        <li className='hover:bg-green-500 rounded transition'><a>Blog</a></li>
      <li className='hover:bg-green-500 rounded transition'><a>Content</a></li>
      </ul>
    </div>
<NavLink to="/"><img className='text-white w-[80px] h-[70px]' src={logo} alt="" /> </NavLink>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 ">
    <li className='hover:bg-green-500 rounded transition hover:text-black'><Link to='/'>Home</Link></li>
      <li className='hover:bg-green-500 rounded transition hover:text-black'><Link to='/tour'>Tour</Link></li>
      <li className='hover:bg-green-500 rounded transition hover:text-black'><Link to='/about'>About</Link></li>
      <li className='hover:bg-green-500 rounded transition hover:text-black'><Link to='/services'>Services</Link></li>
      <li>
        <details>
          <summary className='hover:bg-green-500 rounded transition'>Pages</summary>
          <ul className="p-2 bg-gray-700 hover:bg-inherit">
            <li className='hover:bg-green-500 rounded transition hover:text-black'><a>package Details</a></li>
            <li className='hover:bg-green-500 rounded transition hover:text-black'><a>Blog Details</a></li>
          </ul>
        </details>
      </li>
      <li className='hover:bg-green-500 rounded transition hover:text-black'><a>Blog</a></li>
      <li className='hover:bg-green-500 rounded transition hover:text-black'><a>Content</a></li>
    </ul>
  </div>
  <div className="navbar-end">
  <h1 className='bg-green-600 border-none btn text-white hover:bg-green-600 hover:text-black'>Book Now</h1>
  </div>
</div>
        </div>
    );
};

export default Navbar;