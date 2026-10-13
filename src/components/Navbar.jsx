import React, { useState } from 'react';
import logo from '../assets/logo-text.png';
import hamburger from '../assets/hamburger.png';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="sticky top-0 z-50 flex items-center justify-between bg-white p-5 px-6 md:px-17">

            <button
                className="md:hidden"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <img src={hamburger} alt="Menu" className="h-6 w-6" />
            </button>

           
            <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-2 md:static md:translate-x-0">
                <img src={logo} alt="DevStack" className="h-9" />
                <span className="font-bold text-[#334155]"></span>
            </div>

           
            <ul
                className={`${menuOpen ? 'flex' : 'hidden'} absolute left-0 top-full w-full flex-col gap-5 bg-white p-6 text-[#334155] shadow-md md:static md:flex md:w-auto md:flex-row md:gap-6 md:bg-transparent md:p-0 md:shadow-none`}
            >
                <li className="text-[#DB2777]">Home</li>
                <li>Technologies</li>
                <li>Projects</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

            <div className="flex items-center gap-3 md:gap-5">
                <span className="cursor-pointer text-sm text-[#334155] md:text-base">
                    Sign In
                </span>

                <button className="rounded-full bg-[#DB2777] px-4 py-2 text-sm text-white md:px-5">
                    Sign Up
                </button>
            </div>

        </div>
    );
};

export default Navbar;

