import React from "react";
import { FaBookOpen } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";


function Navbar(){

    const [showMenu, setShowMenu] = useState(false);

    return (
    <>
        <div className="flex justify-between items-center px-4 md:px-16 py-2 text-black font-inter"> 

            <div className="flex gap-2 text-2xl font-semibold items-center text-[#3766E8] ">
                <FaBookOpen />
                <NavLink to={'/'}><h1>RecipeBook</h1></NavLink>
            </div>

            <div className="hidden md:block">
                <ul className="flex gap-8">
                    <NavLink to={'/'}><li className="hover:text-blue-500 transition duration-100 ease-linear">Home</li></NavLink>
                    <NavLink><li className="hover:text-blue-500 transition duration-100 ease-linear">Recipes</li></NavLink>
                    <NavLink><li className="hover:text-blue-500 transition duration-100 ease-linear">About</li></NavLink>
                </ul>
            </div>

            <div className="hidden md:block">
                <button className="flex items-center gap-2 text-white bg-blue-500 px-4 py-2 rounded-xl">Get Started <FaChevronRight />
                </button>
            </div>

            <div className="flex md:hidden">
                <button onClick={()=> setShowMenu(!showMenu)} className="flex border-blue-500 border px-2 py-2 rounded-lg text-blue-500 items-center">{showMenu ? <IoMdClose /> : <IoIosMenu />
                }</button>
            </div>

        </div>

        {showMenu ?
        <div className="h-screen w-screen bg-white flex justify-center py-10 fixed top-15 left-0 z-50">
            <ul className="flex flex-col gap-5 text-center text-lg font-semibold text-blue-500 font-inter">
                <li>Home</li>
                <li>Recipe</li>
                <li>Get Started</li>
            </ul>
        </div> : ''       }                                                           
    </>
)}



export default Navbar;