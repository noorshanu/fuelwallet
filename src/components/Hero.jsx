import Button from "./ui/Button";

const Hero = () => {

    const screenShots = [
        { src: "/extension1 2.png", rotate: "-15deg", position: "-translate-x-45" },
        { src: "/extension1 1.png", rotate: "0deg", position: "z-10" },
        { src: "/extension1 3.png", rotate: "15deg", position: "translate-x-32" },
    ]
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
                    <div className="relative md:h-[500px] h-[300px] md:mx-30 ">
                        <div className="relative w-full h-full">
                            {screenShots.map((img, index) => (
                                <img
                                    key={index}
                                    src={img.src}
                                    alt={`Wallet Screenshot ${index + 1}`}
                                    className={`absolute shadow-2xl transition-transform duration-500 ease-in-out transform ${img.position} rotate-${img.rotate}`}
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
