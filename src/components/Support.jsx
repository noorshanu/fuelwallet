const BrowserSupport = () => (
  <section className="relative py-8 md:py-20 text-center">
    {/* Background Image */}
    <div 
      className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: "url('/bg-gradient.png')" }}
    ></div>

    {/* Content Wrapper (Ensures text is above background) */}
    <div className="relative z-10">
      <p className="text-gray-300 px-4">The 1FUEL Wallet Browser Extension works on</p>
      <div className="flex justify-center items-center gap-4 md:gap-8 lg:gap-18 my-8 md:my-18 px-4">
        {['/chrome-icon.png', '/brave-icon.png', '/firefox-icon.png', '/edge-icon.png'].map((browser) => (
          <img
            key={browser}
            src={browser}
            alt={`${browser.replace('-icon.png', '').replace('/', '')} browser`}
            className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain"
          />
        ))}
      </div>
      <p className="text-[#6D6D6D] mb-8 md:mb-15">
        <a href="#" className="hover:text-gray-400 transition-colors" aria-label="See all supported browsers">See all</a>
      </p>
    </div>
  </section>
);

export default BrowserSupport;
