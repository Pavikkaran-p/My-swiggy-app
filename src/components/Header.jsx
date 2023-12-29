import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";

const Header = () => {
  return (
    <>
      
      <div className=" p-2">
        <nav className='m-2 p-x-4 py-6 justify-end shadow-2xl  rounded-3xl bg-gray-100'>
              <div>
                {/* <img className="flex w-15 h-20 rounded-3xl flex-row p-5" src={logo} alt="Swiggy logo" /> */}
                <Link className="p-10 font-semibold text-2xl" to="/">Home</Link>
                <Link className="p-10 font-semibold text-2xl" to="/about">About</Link>
                <Link className="p-10 font-semibold text-2xl" to="/contact">Contact </Link>
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-25 h-10 float-end pr-5">
                  <path stroke-linecap="round" stroke-line join="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg> */}

              </div>
        </nav>
      </div>
    </>
  );
};

export default Header;