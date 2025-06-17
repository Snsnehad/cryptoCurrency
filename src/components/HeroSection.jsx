"use client";

import { FaGoogle, FaApple } from "react-icons/fa";
import { FiGrid } from "react-icons/fi";
import PopularCoinsCard from "./PopularCoinsCard";
import NewsCard from "./NewsCard";

export default function HeroSection() {
    return (
        <section className="text-white flex flex-col lg:flex-row justify-between items-center py-12 lg:py-20 gap-10 max-w-[1248px] mx-auto px-4 sm:px-6 md:px-8">
            <div className="flex-1 w-full">
                <div className="text-[40px] sm:text-[52px] md:text-[72px] lg:text-[84px] leading-tight max-md:flex max-md:justify-center max-md:items-center max-md:flex-col">
                    <h1 className="text-yellow-400 font-bold">277,486,789</h1>
                    <h2 className="font-extrabold mt-2 text-[#EAECEF]">
                        USERS
                    </h2>
                    <h2 className="font-extrabold text-[#EAECEF]">TRUST US</h2>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row max-w-md w-full gap-3 max-md:hidden">
                    <input
                        type="text"
                        placeholder="Email/Phone number"
                        className="flex-grow px-4 py-3 border border-gray-700 text-[#5E6673] rounded-lg h-12 font-bold"
                    />
                    <button className="bg-[#FCD535] text-[#202630] font-medium px-6 py-3 rounded-md">
                        Get Started
                    </button>
                </div>

                <div className="flex flex-col sm:flex-row gap-10 sm:gap-20 mt-6 max-md:hidden">
                    <div>
                        <p className="text-gray-400 text-sm">Or Continue With</p>
                        <div className="flex gap-4 mt-2">
                            <div className="bg-gray-800 p-3 rounded">
                                <FaGoogle />
                            </div>
                            <div className="bg-gray-800 p-3 rounded">
                                <FaApple />
                            </div>
                        </div>
                    </div>

                    <div className="max-md:hidden">
                        <p className="text-gray-400 text-sm">Download App</p>
                        <div className="bg-gray-800 inline-block p-3 rounded mt-2">
                            <FiGrid />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col max-w-lg w-full gap-6">
                <PopularCoinsCard />
                <NewsCard />
            </div>
        </section>
    );
}