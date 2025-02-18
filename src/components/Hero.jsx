import { useEffect } from "react";
import Button from "./ui/Button";

const Hero = () => {
    useEffect(() => {
        const stars = document.querySelectorAll(".star");
        stars.forEach((star) => {
            gsap.to(star, {
                x: "random(-50, 50)",
                y: "random(-50, 50)",
                opacity: "random(0.3, 1)",
                duration: "random(1, 3)",
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut",
            });
        });
    }, []);

    return (
        <section className="min-h-screen bg-gradient-to-b from-black to-purple-900 pt-20">
            <div className="container mx-auto px-6 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-white space-y-6">
                        <h1 className="text-5xl lg:text-6xl font-bold leading-tight gradient-text">
                            A crypto wallet to blockchain apps
                        </h1>

                        <p className="text-xl text-gray-300">
                            Start exploring blockchain applications in seconds. Trusted by over 100 million users worldwide.
                        </p>
                        <Button />
                    </div>
                    <div className="relative h-[500px]">
                        <div className="absolute right-0 top-0 w-full text-white transform group">
                            {[
                                // '/extension1 3.png',
                                '/extension1 1.png',
                                '/extension1 2.png',
                            ].map((imgPath, index) => (
                                <img
                                    key={index}
                                    src={imgPath}
                                    alt={`Wallet Screenshot ${index + 1}`}
                                    className={`absolute top-0 right-30 w-64 rounded-xl shadow-2xl transition-transform duration-300 ${index === 0 ? 'rotate-0' : index === 1 ? 'rotate-0' : 'rotate-0'} `}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Hero;  