import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialIcons = () => {
  return (
    <div className="flex gap-4">
      {[FaTelegramPlane, FaInstagram, FaXTwitter].map((Icon, index) => (
        <div
          key={index}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-black text-xl shadow-md transition-transform duration-300 hover:scale-110"
        >
          <Icon />
        </div>
      ))}
    </div>
  );
};

export default SocialIcons;
