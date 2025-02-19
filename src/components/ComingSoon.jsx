import MobileAppBtn from "./ui/Mobile-app";

const ComingSoon = () => (
  <section className="py-16 px-6">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

        {/* Left Content */}
        <div className="text-center lg:text-left w-full max-w-lg mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#9CE2FC] to-[#DA46F2] mb-6">
            Coming Soon!
          </h2>
          <p className="text-gray-300 text-base sm:text-lg lg:text-xl mb-6">
            The 1FUEL Wallet extension is coming soon! Get ready for secure and seamless management of your digital assets, with features like easy backup and multi-chain support. Available soon on the App Store and Google Play. Stay tuned and be the first to experience the future of crypto management!
          </p>

          {/* App Store Buttons */}
          <div className="flex flex-col sm:flex-row items-center sm:justify-center lg:justify-start gap-4">
            <MobileAppBtn src="/apple-logo.png" platform="App Store" text="Coming Soon on" />
            <MobileAppBtn src="/playstore-logo.png" platform="Google Play" text="Coming Soon on" />
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="/iphone-mockups.png"
            alt="Mobile App Preview"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md"
          />
        </div>

      </div>
    </div>
  </section>
);

export default ComingSoon;
