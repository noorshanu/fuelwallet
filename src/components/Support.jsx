import { motion } from "framer-motion";

const BrowserSupport = () => {
  return (
    <section className="relative py-8 md:py-20 text-center ">
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 50 }} // Start lower with fade-out
        whileInView={{ opacity: 1, y: 0 }} // Slide up to normal position
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true , amount: 0.3 }}
      >
        <p className="text-gray-300 px-4 popfont">
          The 1FUEL Wallet Browser Extension works on
        </p>

        {/* Browser Icons with Staggered Animation */}
        <motion.div
          className="flex justify-center items-center gap-4 md:gap-8 lg:gap-18 my-8 md:my-18 px-4"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.2, ease: "easeOut", duration: 0.8 },
            },
          }}
          viewport={{ once: true , amount: 0.3  }}
        >
          {["/chrome-icon.png", "/brave-icon.png", "/firefox-icon.png", "/edge-icon.png"].map(
            (browser) => (
              <motion.img
                key={browser}
                src={browser}
                alt={`${browser.replace("-icon.png", "").replace("/", "")} browser`}
                className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              />
            )
          )}
        </motion.div>

        <motion.p
          className="text-[#6D6D6D] mb-8 md:mb-15"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true  , amount: 0.3 }}
        >
          <a
            href="#"
            className="hover:text-gray-400 transition-colors"
            aria-label="See all supported browsers"
          >
            See all
          </a>
        </motion.p>
      </motion.div>
    </section>
  );
};

export default BrowserSupport;