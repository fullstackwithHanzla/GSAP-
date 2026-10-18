import { MdOutlineArrowOutward } from "react-icons/md";

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
  return (
    <div
      className="border-b border-white/10 h-14
  flex items-center justify-between px-2
  "
    >
      <div className="flex gap-2 items-center justify-center">
        <img
          src="../../public/NovaLogo.png"
          alt="Nova Logo"
          height={20}
          width={25}
        />
        <h1 className="text-[8px]">NOVA</h1>
      </div>

      <div className="flex text-[10px] items-center justify-between gap-5">
        {navItems.map((item) => (
          <li className="list-none" key={item}>
            {item}
          </li>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <span className="text-[10px]">Let's talk</span>
        <button className="rounded-full border p-1 bg-accent text-background">
          <MdOutlineArrowOutward size={12} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
