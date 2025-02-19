import MobileAppBtn from "./ui/Mobile-app";

const ComingSoon = () => (
    <section className="py-20">
        <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 items-center">
                <div className="w-full max-w-md mx-auto">
                    <h2 className="text-4xl inline-block lg:text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#9CE2FC] to-[#DA46F2] mb-8">
                        Coming Soon!
                    </h2>
                    <p className="text-gray-300 text-xl mb-8">
                        The 1FUEL Wallet extension is coming soon! Get ready for secure and seamless management of your digital assets, with features like easy backup and multi-chain support. Available soon on the App Store and Google Play. Stay tuned and be the first to experience the future of crypto management!
                    </p>
                    <div className="flex space-x-4">
                        <MobileAppBtn src="/apple-logo.png" platform="App Store" text="Coming Soon on" />
                        <MobileAppBtn src="/playstore-logo.png" platform="Google Play" text="Coming Soon on" />
                    </div>
                </div>
                <div>
                    <img
                        src="/iphone-mockups.png"
                        alt="Mobile App Preview"
                        className="w-full max-w-md mx-auto"
                    />
                </div>
            </div>
        </div>
    </section>
);

export default ComingSoon;