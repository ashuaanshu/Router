import React, {useState} from 'react';
import { Link } from 'react-router-dom'; // Correct import

const Navbar = () => {

    const [isOpen, setIsOpen]=useState(false)
  return (
    <nav className='bg-blue-500 w-full fixed top-0 p-4 z-20 shadow-md  relative'>
      <div className='container mx-auto flex justify-between items-center'>
        <h1 className='text-white text-2xl font-bold'>
          <Link to="/">Aa</Link>
        </h1>
        <div className='hidden md:flex space-x-6'>
          <Link to="/" className='text-white hover:text-gray-300 transition'>Home</Link>
          <Link to="/about" className='text-white hover:text-gray-300 transition'>About</Link>
          <Link to="/contact" className='text-white hover:text-gray-300 transition'>Contact us</Link>
        </div>
        <button className='md:hidden text-white text-3xl' onClick={()=>setIsOpen(isOpen)}>
            {isOpen ? "X" : "Menu"}
        </button>
        <div className={`md:hidden transition-all duration-300 ${isOpen ? "block":"hidden"}`}>
            <div className='fles flex-col space-y-2 mt-2 p-4 bg-blue-500'></div>
            <div className='hidden md:flex space-x-6'>
          <Link to="/" className='text-white hover:text-gray-300 transition'>Home</Link>
          <Link to="/about" className='text-white hover:text-gray-300 transition'>About</Link>
          <Link to="/contact" className='text-white hover:text-gray-300 transition'>Contact us</Link>
        </div>
        <button className='md:hidden text-white text-3xl' onClick={()=>setIsOpen(isOpen)}>
            {isOpen ? "X" : "Menu"}
        </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
