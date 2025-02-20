import { motion } from "framer-motion";

const Feature = ({ title, description }) => (
  <motion.div
    className="md:text-left"
    initial={{ opacity: 0, y: 30 }} // Start lower and fade-in
    whileInView={{ opacity: 1, y: 0 }} // Moves up slightly on scroll
    transition={{ duration: 1, ease: "easeOut" }}
    viewport={{ once: false, amount: 0.3 }} // Triggers when 30% is in view
  >
    <h3 className="text-2xl sm:text-3xl inline-block bg-gradient-to-r from-[#9CE2FC] to-[#DA46F2] text-transparent bg-clip-text font-semibold mb-4">
      {title}
    </h3>
    <p className="text-gray-300 text-base sm:text-lg max-w-md mx-auto md:mx-0">
      {description}
    </p>
  </motion.div>
);

const Features = () => (
  <section className="py-16 px-6">
    <div className="container mx-auto space-y-16">
      
      {/* Feature 1 (Image slides from left, Text from right) */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <motion.img
          src="/coins-cpy.png"
          alt="Coins Image"
          className="max-w-xs sm:max-w-sm mx-auto"
          initial={{ x: -100, opacity: 0, scale: 0.9 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        />
        <Feature
          title="Your web3 wallet"
          description="Available as both a browser extension and mobile app, 1FUEL Wallet offers secure and easy ways to manage all of your digital assets..."
        />
      </div>

      {/* Feature 2 (Text slides from left, Image from right) */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <Feature
          title="Explore blockchain apps"
          description="1FUEL Wallet provides a simple and secure way to connect to blockchain-based applications..."
        />
        <motion.img
          src="/fuel-tank.png"
          alt="Fuel Tank"
          className="max-w-xs sm:max-w-sm mx-auto"
          initial={{ x: 100, opacity: 0, scale: 0.9 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        />
      </div>

      {/* Feature 3 (Image slides from left, Text from right) */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <motion.img
          src="/disk.png"
          alt="Disk Image"
          className="max-w-xs sm:max-w-sm mx-auto"
          initial={{ x: -100, opacity: 0, scale: 0.9 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        />
        <Feature
          title="Own your data"
          description="1FUEL Wallet generates passwords and keys directly on your device, ensuring only you have access to your accounts and data..."
        />
      </div>

    </div>
  </section>
);

export default Features;