import Button from "./ui/Button";

const Hero = () => {


    return (
        <section className="relative pt-20">
            {/* Background Image */}
        
<img src="/blur2.png" alt=""  className="absolute -top-[25%] left-[12%]  "/>

    

            <div className="container mx-auto px-6 py-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-white space-y-6">
                        <h1 className="text-4xl lg:text-6xl font-bold leading-tight gradient-text popfont">
                            A crypto wallet to blockchain apps
                        </h1>
                        <p className="text-xl text-gray-300 popfont">
                            Start exploring blockchain applications in seconds. Trusted by over 100 million users worldwide.
                        </p>
                        <Button text="Get 1FUEL" showArrow={false} gradientFrom="#E0519B" gradientTo="#B04BEB" />
                    </div>

                    {/* Right Side Images */}
                    <div className="relative  md:mx-30 ">
                        <div className="relative w-full h-full">
                        <img src="/herowall.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
