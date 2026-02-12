import React from 'react';
import { CiLogin } from 'react-icons/ci';
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <div className='shadow fixed w-full to-0 z-100 bg-white'>
            <nav className='w-11/12 mx-auto flex justify-between items-center py-3'>
                <div className='flex justify-between items-center gap-x-2'>
                    <img className='h-13' src="Rectangle 432.png" alt="" />
                    <div className='font-semibold'>
                        <p className='text-xl bg-linear-to-r from-[#FF44E3] to-[#294599] bg-clip-text text-transparent'>StreamDoing</p>
                        <p className='text-sm  text-[#0a2c8f]'>Admin Panel</p>
                    </div>
                </div>
                <Link to={"/"} className='flex text-[#836400] cursor-pointer items-center gap-x-2 border px-2 py-1 border-gray-500/30 rounded'><CiLogin />LogOut</Link>
            </nav> 
        </div>
    );
};

export default Navbar;