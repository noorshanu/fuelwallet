

const BrowserSupport = () => (
    <section className="py-20 text-center bg-transparent">
      <p className="text-gray-300">The 1FUEL Wallet Browser Extension works on</p>
      <div className="flex justify-center space-x-18 my-18">
        {['/chrome-icon.png', '/brave-icon.png', '/firefox-icon.png', '/edge-icon.png'].map((browser) => (
          <img
            key={browser}
            src={browser}
            alt={`${browser} browser`}
            className=""
          />
        ))}
      </div>
      <p className="text-[#6D6D6D] mb-15">
        <a href="#" alt="see-all-browser-support">See all</a>
      </p>
    </section>
  );

export default BrowserSupport;