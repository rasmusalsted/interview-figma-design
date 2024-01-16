import React from 'react'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'


const Navbar = () => {

    const [nav, setNav] = useState(false);

    const HandleNav = () => {
        setNav(!nav);
    }

    return (
        
        <nav className=' max-w-[1152px] w-full m-auto md:px-4 min-h-[50px] flex items-center justify-end text-black'>

            <ul className='hidden py-4 text-2xl sm:flex'>
                <li className='mr-10'><a href="/">Works</a></li>
                <li className='mr-10'><a href="/">Blog</a></li>
                <li><a href="">Contact</a></li>
            </ul>

            {/* Hamburger icon */}
            <div onClick={HandleNav} className='z-10 flex items-end sm:hidden'>
                <FaBars size={20} className='mr-4 cursor-pointer' />
            </div>

            {/* Mobile menu */}
            <div onClick={HandleNav} className={nav ? "overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 w-full top-0 h-screen bg-black/90 px-4 py-7 flex flex-col" : "absolute top-0 h-screen left-[-100%] ease-in duration-500"}>
                <ul className='w-full h-full pt-12 text-center'>
                <li><a href="/">Works</a></li>
                <li><a href="#gallery">Blog</a></li>
                <li><a href="#deals">Contact</a></li>
                </ul>
            </div>

        </nav>
    )

}


export default Navbar