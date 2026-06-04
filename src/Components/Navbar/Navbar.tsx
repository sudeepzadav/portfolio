import { useState } from "react";
import { navLinks } from "../../Constants/navlink";
import Darkmode from "./DarkMode";
import { BiMenu, BiX } from "react-icons/bi";
import { Logo } from "../../Constants/image";

const LogoImage = () => (
  <span className="border border-black dark:border-gray-600 rounded-full overflow-hidden flex items-center justify-center">
    <img src={Logo} alt="Logo" className="w-14 h-14 object-cover" />
  </span>
);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleScroll = (selector: string): void => {
    const el = document.querySelector<HTMLElement>(selector);

    if (!el) return;

    const navbarHeight = 90;

    const y = el.getBoundingClientRect().top + window.scrollY - navbarHeight;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-30 bg-linear-to-r from-pink-600 to-blue-500 dark:from-gray-900 dark:to-black font-semibold backdrop-blur-md">
      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center justify-between px-10 py-4">
        <LogoImage />

        <div className="flex items-center gap-10">
          <ul className="flex gap-4">
            {navLinks.map((item) => (
              <li
                key={item.id}
                onClick={() => handleScroll(item.path)}
                className="group relative
  text-white text-lg
  px-4 py-2 rounded-xl
  cursor-pointer
  transition-all duration-300 ease-out
  hover:scale-105
  hover:shadow-lg
  hover:bg-linear-to-r
  hover:from-pink-500
  hover:to-purple-500
  hover:bg-clip-text
  hover:text-transparent
"
              >
                {item.name}

                <span
                  className="
                    absolute left-0 bottom-0
                    h-0.5 w-0
                    bg-cyan-300
                    transition-all duration-300
                    group-hover:w-full
                  "
                />
              </li>
            ))}
          </ul>

          <Darkmode />
        </div>
      </div>

      {/* Mobile Header */}
      <div className="flex md:hidden items-center justify-between px-6 py-4">
        <LogoImage />

        <div className="flex items-center gap-4">
          <Darkmode />

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
            className="text-white text-3xl"
          >
            {menuOpen ? <BiX /> : <BiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden overflow-hidden
          transition-all duration-300 ease-in-out
          ${menuOpen ? "max-h-105 pb-4" : "max-h-0"}
        `}
      >
        <ul className="flex flex-col gap-2 px-6">
          {navLinks.map((item) => (
            <li
              key={item.id}
              onClick={() => handleScroll(item.path)}
              className="
                text-white text-lg
                px-4 py-3 rounded-xl
                cursor-pointer
                transition-all duration-300
                hover:bg-white/20
              "
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
