const Footer = () => (
    <footer className="bg-black py-12">
        <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row justify-between items-center">
                <div className="flex items-center mb-8 lg:mb-0">
                    <img src="/api/placeholder/120/40" alt="1FUEL Logo" className="h-8" />
                    <span className="text-white ml-4">Wallet Available Now!</span>
                    <h3 className="text-2xl font-bold text-white ml-4">Don't Miss Out!</h3>
                </div>
                <div className="flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-white">
                        Twitter
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                        Discord
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                        Telegram
                    </a>
                </div>
            </div>
            <div className="mt-8 text-center text-gray-500 text-sm">
                <p>© 2024 1FUEL. All rights reserved.</p>
                <p className="mt-2">
                    Actual experience may not be reflected in your area. User setup can fluctuate during or before. Any prices you have could be subject to market gains or or other rates may apply in your jurisdiction.
                </p>
            </div>
        </div>
    </footer>
);

export default Footer;