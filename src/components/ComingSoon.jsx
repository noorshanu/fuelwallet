const ComingSoon = () => (
    <section className="py-20 bg-gradient-to-b from-transparent to-black">
        <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-white space-y-6">
                    <h2 className="text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                        Coming Soon!
                    </h2>
                    <p className="text-gray-300">
                        The 1FUEL Wallet extension is coming soon! Get ready for secure and seamless management of your digital assets, with features like easy backup and multi-chain support. Available soon on the App Store and Google Play. Stay tuned and be the first to experience the future of crypto management!
                    </p>
                    <div className="flex space-x-4">
                        <img src="/api/placeholder/140/40" alt="App Store" className="h-12" />
                        <img src="/api/placeholder/140/40" alt="Google Play" className="h-12" />
                    </div>
                </div>
                <div className="relative">
                    <img
                        src="/api/placeholder/400/800"
                        alt="Mobile App Preview"
                        className="w-full max-w-md mx-auto"
                    />
                </div>
            </div>
        </div>
    </section>
);

export default ComingSoon;