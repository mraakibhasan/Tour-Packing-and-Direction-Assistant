import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const leftNavLink = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Love Meter",
      link: "/love-calculator",
    },

  ];

  const rightNavLink = [
    {
      title: "Log In",
      link: "/login/",
    },
    {
      title: "Sign Up",
      link: "/register/",
    },
  ];

  return (
    <nav className="bg-white shadow-md py-0 flex items-center h-[70px] border-b-[3px] border-black">
      <div className="flex items-center pr-6 relative h-full">
        {leftNavLink.map((item, index) => (
          <Link
            key={index}
            to={`${item?.link}`}
            className="text-gray-600 hover:bg-red-400 hover:text-white font-semibold transition duration-700 border-r-[3px] border-black h-full flex items-center justify-center w-32"
          >
            {item?.title}
          </Link>
        ))}

      </div>

      <div className="flex-1 text-center relative h-full flex items-center justify-center">
        <div className="text-2xl font-bold text-red-400">
          <span className="text-black">MY</span>DATE
        </div>
      </div>

      <div className="flex items-center h-full">
        {rightNavLink.map((item, index) => (
          <Link
            to={`${item?.link}`}
            className="text-black font-bold bg-red-200 transition duration-200  border-l-[3px] border-black h-full flex items-center justify-center w-32"
          >
            {item?.title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
