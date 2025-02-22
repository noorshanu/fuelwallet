import { FaInstagram } from "react-icons/fa";
import CircularText from "./ui/CircularText";
import { IoMdArrowUp } from "react-icons/io";
import SocialIcons from "./ui/SocialIcons";

const Footer = () => (
  <footer className="bg-[#12101A] backdrop-blur-lg shadow-lg pt-10">
    <div className="container mx-auto px-6">

      {/* Main Banner */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 lg:text-left">
        <div className="flex flex-col md:flex-row items-center space-x-4 mx-auto">
          <img src="/logo-gradient.png" alt="1FUEL Logo" className="w-23 md:w-70 h-23 md:h-full" />
          <div>
            <h2 className="text-4xl md:text-6xl font-semibold bg-gradient-to-r from-[#929394] to-[#ffffff] bg-clip-text text-transparent">
              1FUEL Wallet Available Now!
            </h2>
            <h3 className="text-3xl md:text-6xl font-bold bg-gradient-to-r from-[#8d8e8f] to-[#d1cece] bg-clip-text text-transparent">
              Don't Miss Out!
            </h3>
          </div>
        </div>
      </div>

      {/* Description & CircularText */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl w-full mx-auto border-b border-gray-400 py-8 gap-6">
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed  md:text-left">
          The new 1FUEL Wallet extension is here! Don't miss out on secure, seamless digital asset management with cross-chain support and cold security. Get it now and take control of your Crypto!
        </p>
        <CircularText />
      </div>

      {/* Footer Links */}
      <section className="max-w-5xl w-full mx-auto text-gray-200 text-sm py-8">
        <div className="flex flex-col md:flex-row justify-between gap-6">

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row items-center gap-4  md:text-left">
            <img src="/Logo.png" alt="Logo" className="" />
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
              <a href="mailto:info@1fuel.io" className="hover:text-white">info@1fuel.io</a>
              <a href="mailto:investors@1fuel.io" className="hover:text-white">investors@1fuel.io</a>
              <a href="mailto:marketing@1fuel.io" className="hover:text-white">marketing@1fuel.io</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
           
              <a href="https://whitepaper.1fuel.io/" target="_blank" className="hover:text-white transition-all group">
               Whitepaper
                <IoMdArrowUp className="inline-block rotate-45 group-hover:scale-125 transition-transform" />
              </a>
              <a href="https://presale.1fuel.io/login" target="_blank" className="hover:text-white transition-all group">
            Login
                <IoMdArrowUp className="inline-block rotate-45 group-hover:scale-125 transition-transform" />
              </a>
              <a href="https://presale.1fuel.io/register" target="_blank" className="hover:text-white transition-all group">
              Join Presale
                <IoMdArrowUp className="inline-block rotate-45 group-hover:scale-125 transition-transform" />
              </a>
          
          </div>
        </div>

        {/* Disclaimer & Social Icons */}
        <div className="flex flex-col md:flex-row justify-between items-center py-6 md:py-10  md:text-left gap-6">
          <p className="text-gray-400  max-w-lg">
            Digital currencies may not be regulated in your area. Their value can fluctuate, rising or falling. Any profits you make could be subject to capital gains tax or other taxes that apply in your jurisdiction.
          </p>
          <SocialIcons />
        </div>
      </section>
    </div>
  </footer>
);

export default Footer;
