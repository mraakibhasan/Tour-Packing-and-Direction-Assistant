import React from 'react';

const NavBar = () => {
    return (
        <nav className="bg-white shadow-md py-0 flex items-center h-[70px] border-b-[3px] border-black">
            {/* Left Links */}
            <div className="flex items-center pr-6 relative h-full">
                <a
                    href="#chat"
                    className="text-gray-600 hover:text-red-400 transition duration-300 border-r-[3px] border-black h-full flex items-center justify-center w-28"
                >
                    Chat
                </a>
                <a
                    href="#partnership"
                    className="text-gray-600 hover:text-red-400 transition duration-300 border-r-[3px] border-black h-full flex items-center justify-center w-28"
                >
                    Partnership
                </a>
                <a
                    href="#blog"
                    className="text-gray-600 hover:text-red-400 transition duration-300 border-r-[3px] border-black h-full flex items-center justify-center w-28"
                >
                    Blog
                </a>
                {/* Full-Height Border */}
                {/* <div className="absolute right-0 top-0 h-full w-[3px] bg-black"></div> */}
            </div>

            {/* Centered MatchMaker Logo */}
            <div className="flex-1 text-center relative h-full flex items-center justify-center">
                <div className="text-2xl font-bold text-red-400">
                    MY<span className="text-black">DATE</span>
                </div>
                {/* Full-Height Border */}
                {/* <div className="absolute right-0 top-0 h-full w-[1px] bg-gray-300"></div> */}
            </div>

            {/* Right Links */}
            <div className="flex items-center h-full">
                <a
                    href="#login"
                    className="text-gray-600 bg-[rgb(255,243,242)] hover:text-red-400 transition duration-300  border-l-[3px] border-black h-full flex items-center justify-center w-32"
                >
                    Log In
                </a>
                <a
                    href="#signup"
                    className="text-gray-600 bg-[rgb(255,180,180)] hover:text-red-400 transition duration-300  border-l-[3px] border-black h-full flex items-center justify-center w-32"
                >
                    Sign Up
                </a>
            </div>
        </nav>
    );
};

export default NavBar;
