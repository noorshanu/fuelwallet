const Feature = ({ title, description }) => (
  <div>
    <h3 className="text-3xl inline-block bg-gradient-to-r from-[#9CE2FC] to-[#DA46F2] text-transparent bg-clip-text font-semibold mb-4">{title}</h3>
    <p className="text-gray-300 text-lg w-full max-w-sm">{description}</p>
  </div>
);

const Features = () => (
  <section className="py-20">
    <div className="container mx-auto space-y-19">

      <div className="grid grid-cols-1 md:grid-cols-2">
        <img src="/coins.png" alt="Coins Image" className="object-cover mx-auto" />
        <div className="p-8 flex flex-col justify-center">
          <Feature
            title="Your web3 wallet"
            description="Available as both a browser extension and mobile app, 1FUEL Wallet offers secure and easy ways to manage all of your digital assets. With features like a key vault, secure login, and token wallet, it gives you full control over your crypto and tokens, making asset management easier and safer on any device."
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-8 flex flex-col justify-center items-end">
          <Feature
            title="Explore blockchain apps"
            description="1FUEL Wallet provides a simple and secure way to connect to blockchain-based applications. You maintain control over what apps can see and access on the web, ensuring safe and seamless access to your digital assets."
          />
        </div>
        <img src="/fuel-tank.png" alt="Coins Image" className="object-cover mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <img src="/disk.png" alt="Coins Image" className="object-cover mx-auto" />
        <div className="p-8 flex flex-col justify-center">
        <Feature
          title="Own your data"
          description="1FUEL Wallet generates passwords and keys directly on your device, ensuring only you have access to your accounts and data. You have full control over what you share and what remains private."
        />
        </div>
      </div>

    </div>
  </section>
);

export default Features;