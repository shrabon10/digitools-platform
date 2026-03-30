import React from 'react';
import userimg from '../assets/user.png';
import userimg2 from '../assets/choose.png';
import userimg3 from '../assets/rocket.png';

const Start = () => {
    return (
        <section className="py-20 ">
            <div className="px-6 container mx-auto">
                {/* Section Header */}
                <div className="text-center mb-14">
                    <h2 className="mt-3 font-syne font-extrabold text-[clamp(26px,4vw,40px)]">
                        Get Started in 3 Steps
                    </h2>
                    <span className="hero-badge text-zinc-400">
                        Start using premium digital tools in minutes, not hours.
                    </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white rounded-2xl shadow-md p-8 text-center relative">
                        {/* Number badge */}
                        <div className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white text-sm font-semibold">
                            01
                        </div>

                        {/* Icon */}
                        <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-purple-100">
                            <img src={userimg} className="w-8 h-8" />
                        </div>

                        <h3 className="font-syne font-bold text-lg mb-2">
                            Create Account
                        </h3>

                        <p className="text-gray-500 text-sm leading-6">
                            Sign up for free in seconds. No credit card required
                            to get started.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-md p-8 text-center relative border-purple-300">
                        <div className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white text-sm font-semibold">
                            02
                        </div>

                        <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-purple-100">
                            <img src={userimg2} className="w-8 h-8" />
                        </div>

                        <h3 className="font-syne font-bold text-lg mb-2">
                            Choose Products
                        </h3>

                        <p className="text-gray-500 text-sm leading-6">
                            Browse our catalog and select the tools that fit
                            your needs.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-2xl shadow-md p-8 text-center relative">
                        <div className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white text-sm font-semibold">
                            03
                        </div>

                        <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-purple-100">
                            <img src={userimg3} className="w-8 h-8" />
                        </div>

                        <h3 className="font-syne font-bold text-lg mb-4">
                            Start Creating
                        </h3>

                        <p className="text-gray-500 text-sm leading-6">
                            Download and start using your premium tools
                            immediately.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Start;
