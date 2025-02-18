const Feature = ({ title, description }) => (
    <div className="text-white mb-32">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-gray-300">{description}</p>
    </div>
);

const Features = () => (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <Feature
          title="Your web3 wallet"
          description="Available as both a browser extension and mobile app, 1FUEL Wallet offers secure and easy ways to manage all of your digital assets. With features like a key vault, secure login, and token wallet, it gives you full control over your crypto and tokens, making asset management easier and safer on any device."
        />
        <Feature
          title="Explore blockchain apps"
          description="1FUEL Wallet provides a simple and secure way to connect to blockchain-based applications. You maintain control over what apps can see and access on the web, ensuring safe and seamless access to your digital assets."
        />
        <Feature
          title="Own your data"
          description="1FUEL Wallet generates passwords and keys directly on your device, ensuring only you have access to your accounts and data. You have full control over what you share and what remains private."
        />
      </div>
    </section>
  );

export default Features;