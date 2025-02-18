const GetStarted = () => (
    <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
            <div className="flex justify-between items-center">
                <img
                    src="/api/placeholder/600/200"
                    alt="Racing Car"
                    className="w-2/3 lg:w-1/2"
                />
                <div className="text-white">
                    <h2 className="text-4xl font-bold mb-4">Get Started</h2>
                    <button className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700">
                        GET 1FUEL
                    </button>
                </div>
            </div>
        </div>
    </section>
);

export default GetStarted;