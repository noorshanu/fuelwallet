import Button from "./ui/Button";

const Hero = () => {
    return (
        <section className="relative pt-20">
            {/* Background Image */}
            <div 
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-80"
                style={{ backgroundImage: "url('/bg-gradient.png')" }}
            ></div>

            <div className="container mx-auto px-6 py-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">                    
                    {/* Left Content */}
                    <div className="text-white space-y-6">
                        <h1 className="text-4xl lg:text-6xl font-bold leading-tight gradient-text">
                            A crypto wallet to blockchain apps
                        </h1>
                        <p className="text-xl text-gray-300">
                            Start exploring blockchain applications in seconds. Trusted by over 100 million users worldwide.
                        </p>
                        <Button text="Get 1FUEL" showArrow={false} gradientFrom="#E0519B" gradientTo="#B04BEB" />
                    </div>

                    {/* Right Side Images */}
                    <div className="relative h-[500px]">
                        <div className="absolute right-0 top-0 w-full text-white transform group">
                            {[
                                '/extension1 1.png',
                                '/extension1 2.png',
                            ].map((imgPath, index) => (
                                <img
                                    key={index}
                                    src={imgPath}
                                    alt={`Wallet Screenshot ${index + 1}`}
                                    className={`absolute top-0 right-30 w-64 rounded-xl shadow-2xl transition-transform duration-300`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
