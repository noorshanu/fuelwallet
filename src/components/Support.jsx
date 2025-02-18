const BrowserSupport = () => (
    <section className="py-20 text-center bg-transparent">
      <p className="text-gray-300 mb-8">The 1FUEL Wallet Browser Extension works on</p>
      <div className="flex justify-center space-x-8">
        {['Chrome', 'Brave', 'Firefox', 'Opera'].map((browser) => (
          <img
            key={browser}
            src="/api/placeholder/48/48"
            alt={`${browser} browser`}
            className="w-12 h-12"
          />
        ))}
      </div>
    </section>
  );

export default BrowserSupport;