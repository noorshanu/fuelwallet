import { FaInstagram } from "react-icons/fa";
import CircularText from "./ui/CircularText";
import { IoMdArrowUp } from "react-icons/io";
import SocialIcons from "./ui/SocialIcons";


const Footer = () => (
    <footer className=" bg-gray-900/50 backdrop-blur-lg shadow-lg">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center mb-8 lg:mb-0">
                    <img src="/logo-gradient.png" alt="1FUEL Logo" className="" />
                    <div>
                        <h2 className="ml-4 text-6xl bg-gradient-to-r from-[#929394] to-[#ffffff] bg-clip-text text-transparent">1FUEL Wallet Available Now!</h2>
                        <h3 className="text-6xl font-bold ml-4 bg-gradient-to-r from-[#8d8e8f] to-[#d1cece] bg-clip-text text-transparent">Don't Miss Out!</h3>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center max-w-5xl w-full mx-auto border-b border-gray-400">
                <p className="text-gray-300 text-lg">The new 1FUEL Wallet extension is here! Don't miss out on secure, seamless digital asset management with cross chain support and cold security. Get it now and take control of your Crypto!</p>
                {/* <img src="" alt="" /> */}
                <CircularText />
            </div>


            <section className="max-w-5xl w-full mx-auto text-gray-200 text-sm">
                <div className="flex justify-between">
                    <div className="flex items-center gap-4">
                        <img src="/logo.png" alt="Logo" />
                        <a href="#" className="hover:text-white">info@1fuel.io</a>
                        <a href="#" className="hover:text-white">investors@1fuel.io</a>
                        <a href="#" className="hover:text-white">marketing@1fuel.io</a>
                    </div>
                    <div className="flex items-center gap-4">
                        <a href="#" className="hover:text-white transition-all group">
                            Whitepaper <span><IoMdArrowUp className="inline-block rotate-45 group-hover:scale-125 transition-transform" /></span>
                        </a>
                        <a href="#" className="hover:text-white transition-all group">
                            Login <span><IoMdArrowUp className="inline-block rotate-45 group-hover:scale-125 transition-transform" /></span>
                        </a>
                        <a href="#" className="hover:text-white transition-all group">
                            Join presale <span><IoMdArrowUp className="inline-block rotate-45 group-hover:scale-125 transition-transform" /></span>
                        </a>
                    </div>
                </div>

                <div className="flex justify-between py-10">
                    <p className="w-160">Digital currencies may not be regulated in your area.Their value can fluctuate, rising or falling. Any profits you make could be subject to capital gains tax or other taxes that apply in your jurisdiction.</p>
                    <SocialIcons />
                </div>
            </section>

        </div>
    </footer>
);

export default Footer;