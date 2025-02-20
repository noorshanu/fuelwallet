import { motion } from "framer-motion";
import Button from "./ui/Button";

const GetStarted = () => {
  return (
    <section className="py-16 relative overflow-hidden bg-[#0f0f0f56]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Background Arrows (Animated) */}
          <motion.img
            src="/arrow.png"
            alt="lines"
            className="absolute top-5 -left-50"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 50, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", repeat: Infinity, repeatType: "mirror" }}
            viewport={{ once: false }}
          />
          <motion.img
            src="/arrow.png"
            alt="lines"
            className="absolute top-7 left-80"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 50, opacity: 1 }}
            transition={{ duration: 1.4, ease: "easeOut", repeat: Infinity, repeatType: "mirror" }}
            viewport={{ once: false }}
          />
          <motion.img
            src="/arrow.png"
            alt="lines"
            className="absolute top-25 left-196"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 50, opacity: 1 }}
            transition={{ duration: 1.6, ease: "easeOut", repeat: Infinity, repeatType: "mirror" }}
            viewport={{ once: false }}
          />
          <motion.img
            src="/three-lines.png"
            alt="lines"
            className="absolute top-20 left-0 w-30"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false }}
          />

          {/* Racing Car (Scroll Triggered + Slight Bounce Effect) */}
          <motion.img
            src="/sports-car.png"
            alt="Racing Car"
            className="w-full max-w-[400px] lg:max-w-[70%] z-10"
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, scale: [1, 1.02, 1] }} // Subtle bounce
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }} // Triggers when 30% is in view
          />

          {/* Text & Button Section (Slide Up on Scroll) */}
          <motion.div
            className="text-white text-center md:text-right"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2 className="text-4xl md:text-5xl popfont lg:text-6xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-b from-gray-400 via-white to-gray-400 relative z-10">
              Get Started
            </h2>
            <div className="flex justify-end">
              <Button text="Get 1FUEL" showArrow={false} gradientFrom="#E31587" gradientTo="#4A0EB8" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;