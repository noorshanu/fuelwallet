import { motion } from "framer-motion";
import Button from "./ui/Button";

const Hero = () => {
  return (
    <section className="relative pt-20 ">
      {/* Background Image */}
      <img
        src="/blur2.png"
        alt=""
        className="absolute -top-[25%] left-[12%]"
      />

      <div className="container mx-auto px-6 py-20 relative z-30">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content (Sliding in from Left) */}
          <motion.div
            className="text-white space-y-6"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight gradient-text popfont">
              A crypto wallet to blockchain apps
            </h1>
            <p className="text-xl text-gray-300 popfont">
              Start exploring blockchain applications in seconds. Trusted by
              over 100 million users worldwide.
            </p>
            <Button
              text="Get 1FUEL"
              showArrow={false}
              gradientFrom="#E0519B"
              gradientTo="#B04BEB"
            />
          </motion.div>

          {/* Right Side Images (Sliding in from Right) */}
          <motion.div
            className="relative md:mx-30"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="relative w-full h-full">
              <img src="/herowall.png" alt="" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;