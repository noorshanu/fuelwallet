import Button from "./ui/Button";

const GetStarted = () => (
    <section className="py-16 relative overflow-hidden ">
        <div
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat top-0 left-50"
            style={{ backgroundImage: "url('/bg-gradient.png')" }}
        ></div>
        <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

                {/* Racing Car Image */}

                <img src="/arrow.png" alt="lines" className="absolute top-5 -left-50" />
                <img src="/arrow.png" alt="lines" className="absolute top-7 left-80 " />
                <img src="/arrow.png" alt="lines" className="absolute top-25 left-196" />
                <img src="/three-lines.png" alt="lines" className="absolute top-20 left-0 w-30" />
                <img
                    src="/sports-car.png"
                    alt="Racing Car"
                    className="w-full max-w-[400px] lg:max-w-[70%] z-10"
                />

                {/* Text & Button Section */}
                <div className="text-white text-center md:text-right">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-b from-gray-400 via-white to-gray-400 relative z-10">
                        Get Started
                    </h2>
                    <div className="flex justify-end">
                        <Button text="Get 1FUEL" showArrow={false} gradientFrom="#E31587" gradientTo="#4A0EB8" />
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default GetStarted;
