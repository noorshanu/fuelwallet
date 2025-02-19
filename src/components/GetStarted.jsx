const GetStarted = () => (
    <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
            <div className="flex justify-between items-center">
                <img
                    src="/sports-car.png"
                    alt="Racing Car"
                    className="w-2/3 lg:w-1/2"
                />
                <div className="text-white text-right">
                    <h2 className="text-6xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-b from-gray-400 via-white to-gray-400">
                        Get Started
                    </h2>
                    <button className="bg-gradient-to-r from-[#E31587] to-[#4A0EB8] px-6 py-2 rounded-lg hover:opacity-90 transition-opacity">
                        GET 1FUEL
                    </button>
                </div>
            </div>
        </div>
    </section>
);

export default GetStarted;