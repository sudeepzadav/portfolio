import { useState } from "react";
import { navLinks } from "../../Constants/navlink";
import Darkmode from "./DarkMode";
import { BiMenu, BiX } from "react-icons/bi";
import { Logo } from "../../Constants/image";
import { Link } from "react-router";

const LogoImage = () => (
  <span className="border border-black dark:border-gray-600 rounded-full overflow-hidden flex items-center justify-center">
    <img src={Logo} alt="Logo" className="w-14 h-14 object-cover" />
  </span>
);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-linear-to-r from-pink-600 to-blue-500 dark:from-gray-900 dark:to-black font-semibold sticky top-0 z-30">

      {/* Desktop */}
      <div className="hidden md:flex items-center justify-between px-10 py-4">
        <LogoImage />

        <div className="flex gap-10">
          <ul className="flex gap-5">
            {navLinks.map((item) => (
              <li
                key={item.id}
                className="
                  text-white text-xl cursor-pointer
                  px-3 py-2 rounded-xl
                  transition-colors duration-200
                  hover:bg-white/20 hover:text-white
                  dark:hover:bg-gray-700 dark:hover:text-white
                "
              >
                <Link
                  to={item.path}
                  onClick={() => {
                    const el = document.querySelector(item.path);
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-white no-underline"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <Darkmode />
        </div>
      </div>

      {/* Mobile header */}
      <div className="flex md:hidden items-center justify-between px-6 py-4">
        <LogoImage />

        <div className="flex items-center gap-4">
          <Darkmode />
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="text-white dark:text-white text-3xl bg-transparent border-none cursor-pointer"
          >
            {menuOpen ? <BiX /> : <BiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <ul className="flex flex-col md:hidden px-6 pb-4 gap-2">
          {navLinks.map((item) => (
            <li
              key={item.id}
              className="
                text-white text-lg cursor-pointer
                px-3 py-2 rounded-xl
                transition-colors duration-200
                hover:bg-white/20 hover:text-white
                dark:hover:bg-gray-700 dark:hover:text-white
              "
            >
              <Link
                to={item.path}
                onClick={() => {
                  const el = document.querySelector(item.path);
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                  setMenuOpen(false);
                }}
                className="text-white no-underline"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;