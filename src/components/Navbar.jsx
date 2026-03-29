import React from 'react';
import shoppingimg from '../assets/shoppingcart01.png'

const Navbar = () => {
    return (
        <div className="navbar container mx-auto ">
            <div className="navbar-start">
                <div className="flex items-center gap-1 font-bold text-4xl bg-gradient-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent ">
                     DigTools
                </div>
            </div>
            <div className="navbar-center hidden sm:hidden md:flex lg:flex">
                <ul className="menu menu-horizontal gap-10 px-1 text-lg ">
                    <li>
                        <a>Products</a>
                    </li>
                    <li>
                        <a>Features</a>
                    </li>
                    <li>
                        <a>Pricing</a>
                    </li>
                    <li>
                        <a>FAQ</a>
                    </li>
                    <li>
                        <a></a>
                    </li>
                </ul>
            </div>
            <div className="navbar-end gap-5">
                <img src= {shoppingimg} />


                <ul><li>login</li></ul>
                <a className="btn bg-gradient-to-r from-[#4f39f6] to-[#9514fa] rounded-full text-white">
                    Get in Touch
                </a>
                
            </div>
        </div>
    );
};

export default Navbar;
