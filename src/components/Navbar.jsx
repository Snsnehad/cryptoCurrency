'use client';

import { useState } from "react";
import Dropdown from "./DropDown";
import { FaMoon, FaGlobe } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { HiOutlineMenu } from "react-icons/hi";
import { RiQrScan2Line } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowUp } from "react-icons/md";
import LanguageCurrencyDropdown from "./LanguageCurrencyDropdown";

const navItems = [
    { label: "Buy Crypto", href: "#" },
    { label: "Markets", href: "#" },
    { label: "Trade", href: "#", dropdown: true },
    { label: "Futures", href: "#", dropdown: true },
    { label: "Earn", href: "#", dropdown: true },
    { label: "Square", href: "#", dropdown: true },
    { label: "More", href: "#", dropdown: true },
];

export default function Navbar() {
    const [hoveredMenu, setHoveredMenu] = useState(null);
    const [showLangDropdown, setShowLangDropdown] = useState(false);

    return (
        <header className="text-white px-4 sm:px-6 py-2 relative">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-4 sm:gap-6">
                    <img
                        src="/binance.png"
                        alt="Binance Logo"
                        className="h-10 sm:h-12"
                    />

                    <nav className="hidden lg:flex gap-4 sm:gap-6 text-sm font-medium leading-[22px] relative">
                        {navItems.map((item) => (
                            <div
                                key={item.label}
                                className="relative flex items-center"
                                onMouseEnter={() =>
                                    item.dropdown && setHoveredMenu(item.label)
                                }
                                onMouseLeave={() =>
                                    item.dropdown && setHoveredMenu(null)
                                }
                            >
                                <a
                                    href={item.href}
                                    className="hover:text-yellow-400 flex items-center"
                                >
                                    <span className="font-bold">
                                        {item.label}
                                    </span>
                                    {item.dropdown &&
                                        (hoveredMenu === item.label ? (
                                            <MdKeyboardArrowUp className="text-sm font-bold" />
                                        ) : (
                                            <IoIosArrowDown className="text-sm font-bold" />
                                        ))}
                                </a>
                                {hoveredMenu === item.label &&
                                    item.dropdown && (
                                        <Dropdown
                                            type={item.label.toLowerCase()}
                                        />
                                    )}
                            </div>
                        ))}
                    </nav>
                </div>

                <div className="flex items-center gap-4 sm:gap-5 relative">
                    <div className="hidden md:flex items-center gap-4">
                        <FiSearch className="text-lg sm:text-2xl hover:text-yellow-400 font-bold" />
                        <div className="flex gap-2">
                            <button className="text-sm hover:text-yellow-400 bg-[#2B3139] px-2 py-1.5 font-bold rounded">
                                Log In
                            </button>
                            <button className="bg-yellow-400 text-black text-sm py-1.5 px-2 rounded font-bold">
                                Sign Up
                            </button>
                        </div>
                    </div>

                    <div className="hidden lg:flex items-center gap-4">
                        <RiQrScan2Line className="text-lg sm:text-xl" />

                        <div
                            className="relative"
                            onMouseEnter={() => setShowLangDropdown(true)}
                            onMouseLeave={() => setShowLangDropdown(false)}
                        >
                            <FaGlobe className="text-lg cursor-pointer" />
                            {showLangDropdown && <LanguageCurrencyDropdown />}
                        </div>

                        <FaMoon className="text-lg" />
                    </div>

                    <HiOutlineMenu className="text-2xl md:hidden cursor-pointer" />
                </div>
            </div>
        </header>
    );
}
