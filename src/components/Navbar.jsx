import React from 'react';
import { Menu } from 'lucide-react';
import Button from './ui/Button';

const NavBar = () => (
    <nav className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center">
                <img src="/Logo.png" alt="1FUEL Logo" width={"175px"} />
            </div>

            <div className="hidden lg:flex items-center space-x-8">
                <a href="#" className="text-gray-300 hover:text-white">Features</a>
                <a href="#" className="text-gray-300 hover:text-white">Build</a>
                <a href="#" className="text-gray-300 hover:text-white">Resources</a>
                <a href="#" className="text-gray-300 hover:text-white">Cryptocurrencies</a>
                <a href="#" className="text-gray-300 hover:text-white">Learn</a>
                <Button />

            </div>

            <button className="lg:hidden text-white">
                <Menu size={24} />
            </button>
        </div>
    </nav>
);

export default NavBar;