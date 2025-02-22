import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  { href: "https://t.me/Portal_1Fuel", icon: FaTelegramPlane, label: "Telegram" },
  { href: "https://www.instagram.com/1fuel/", icon: FaInstagram, label: "Instagram" },
  { href: "https://x.com/1fuel_?s=21", icon: FaXTwitter, label: "Twitter" },
];

const SocialIcons = () => {
  return (
    <div className="flex gap-4">
      {socialLinks.map(({ href, icon: Icon, label }, index) => (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-black text-xl shadow-md transition-transform duration-300 hover:scale-110"
        >
          <Icon />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;