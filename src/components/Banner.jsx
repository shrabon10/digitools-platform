import React from 'react';
import heroimg from '../assets/banner.png';
import { CiPlay1 } from 'react-icons/ci';
import banimg from '../assets/ban.png';

const Banner = () => {
    return (
        <>
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 pb-16 md:pb-24 relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
                {/* LEFT */}
                <div className="text-center md:text-left">
                    <div className="inline-block bg-purple-200 text-purple-800 text-xs sm:text-sm px-3 sm:px-4 py-1 rounded-full mb-4 sm:mb-5">
                        <div className="flex items-center gap-2">
                            <img src={banimg} alt="" />
                            New: AI-Powered Tools Available
                        </div>
                    </div>

                    <h1 className="text-5xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-4 sm:mb-6 text-gray-800">
                        Supercharge Your <br />
                        Digital Workflow
                    </h1>

                    <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-md mx-auto md:mx-0">
                        Access premium AI tools, design assets, templates, and
                        productivity software—all in one place. Start creating
                        faster today. Explore Products
                    </p>

                    <div className="flex flex-col sm:flex-row items-center md:items-start gap-3 sm:gap-4">
                        <button className="btn w-full sm:w-auto bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gradient-to-r from-[#4f39f6] to-[#9514fa]">
                            Explore Products
                        </button>

                        <button className="btn w-full sm:w-auto border border-purple-500 text-purple-600 px-6 py-3 rounded-full text-sm font-medium hover:bg-purple-50 transition">
                            <div className="flex items-center gap-2">
                                <CiPlay1 /> Watch Demo
                            </div>
                        </button>
                    </div>
                </div>

                <div className="flex justify-center md:justify-end mt-8 md:mt-0 ">
                    <img
                        src={heroimg}
                        alt="Hero"
                        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg  rounded-2xl object-cover"
                    />
                </div>
            </div>
            
        </section>
        <div className='bg-gradient-to-r from-[#4f39f6] to-[#9514fa] p-10 mb-2 justify-evenly text-white flex items-center  '>
                <div className='flex flex-col'>
                    <span className='font-bold text-4xl'>50k+</span>
                    Active Useer
                    
                </div>
                <div className='flex flex-col'>
                    <span className='font-bold text-4xl'>200k+</span>
                    Premium Tools
                </div>
                <div className='flex flex-col'>
                    <span className='font-bold text-4xl'>4.9</span>
                    Rating
                </div>
            </div>
            </>
    );
};

export default Banner;
