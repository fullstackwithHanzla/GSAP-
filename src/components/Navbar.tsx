import { MdOutlineArrowOutward } from "react-icons/md";
import useAnimation from "./useAnimation";
import { useRef } from "react";

const Navbar = () => {
  const navItems: string[] = [
    "Work",
    "About",
    "Services",
    "Testimonials",
    "Contact",
    "Journal",
    "Career",
  ];

  const containerRef = useRef<HTMLDivElement>(null);

  useAnimation({container : containerRef})

  return (
    <div
      ref={containerRef}
      className="border-b overflow-x-hidden px-4 cursor-pointer w-full border-white/10 h-14
  flex items-center justify-between 
  "
    >
      <div className="navLogo flex gap-2 items-center justify-center">
        <img
          src="../../public/NovaLogo.png"
          alt="Nova Logo"
          height={20}
          width={25}
        />
        <h1 className="text-[14px]">NOVA</h1>
      </div>

      <div className="navItems flex text-[14px] items-center justify-between gap-8">
        {navItems.map((item) => (
          <li className="list-none" key={item}>
            {item}
          </li>
        ))}
      </div>

      <div className="connect-letsTalk flex items-center gap-2">
        <span className="text-[14px]">Let's talk</span>
        <button className="rounded-full border p-1 bg-accent text-background">
          <MdOutlineArrowOutward size={12} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
