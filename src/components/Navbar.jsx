import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './ui/Button';
import { IoIosArrowDown } from 'react-icons/io';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-sm">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="flex items-center">
                    <img src="/Logo.png" alt="1FUEL Logo" width={"175px"} />
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center space-x-8">
                    <a href="#" className="text-gray-300 hover:text-white transition-all duration-300 ease-in-out group">
                        Features
                        <IoIosArrowDown className="inline-block transition-transform duration-300 group-hover:rotate-180" />
                    </a>
                    <a href="#" className="text-gray-300 hover:text-white transition-all duration-300 ease-in-out group">
                        Build
                        <IoIosArrowDown className="inline-block transition-transform duration-300 group-hover:rotate-180" />
                    </a>
                    <a href="#" className="text-gray-300 hover:text-white transition-all duration-300 ease-in-out group">
                        Resources
                        <IoIosArrowDown className="inline-block transition-transform duration-300 group-hover:rotate-180" />
                    </a>
                    <a href="#" className="text-gray-300 hover:text-white transition-all duration-300 ease-in-out group">
                        Cryptocurrencies
                        <IoIosArrowDown className="inline-block transition-transform duration-300 group-hover:rotate-180" />
                    </a>
                    <a href="#" className="text-gray-300 hover:text-white transition-all duration-300 ease-in-out">
                        Learn
                    </a> 
                   <a href="http://1fuel.io/" target='_blank'>
                   <Button text="Get 1FUEL" showArrow={true} gradientFrom="#E0519B" gradientTo="#B04BEB" /></a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`
                    lg:hidden 
                    fixed 
                    w-full 
                    h-screen
                    bg-black/95 
                    backdrop-blur-sm 
                    top-[72px] 
                    left-0 
                    transition-all 
                    duration-300 
                    ease-in-out
                    ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
                `}
            >
                <div className="container mx-auto px-6 py-8 flex flex-col space-y-8">
                    <a href="#" className="text-gray-300 hover:text-white text-lg">Features</a>
                    <a href="#" className="text-gray-300 hover:text-white text-lg">Build</a>
                    <a href="#" className="text-gray-300 hover:text-white text-lg">Resources</a>
                    <a href="#" className="text-gray-300 hover:text-white text-lg">Cryptocurrencies</a>
                    <a href="#" className="text-gray-300 hover:text-white text-lg">Learn</a>
                    <Button />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;