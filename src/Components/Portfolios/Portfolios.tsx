import { useState } from "react";
import { filters, reactCards } from "../../Constants/Portfolios";
import { FaGithub } from "react-icons/fa6";

const Portfolios = () => {
  const [active, setActive] = useState("React");

  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-14 px-4 sm:px-8 lg:px-16 flex flex-col items-center justify-center gap-8 transition-colors duration-300">
      <span className="font-extrabold text-4xl tracking-tight bg-linear-to-r from-cyan-500 via-sky-500 to-purple-600 dark:from-cyan-300 dark:via-sky-300 dark:to-purple-400 bg-clip-text text-transparent cursor-pointer hover:underline decoration-cyan-400">
        Portfolios
      </span>

      <div
        className="flex flex-wrap justify-center gap-1 p-1.5 rounded-2xl border border-gray-300 dark:border-white/10 bg-white/60 dark:bg-white/0.4 backdrop-blur-md transition-colors duration-300"
        style={{
          boxShadow:
            "0 8px 32px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.6)",
        }}
      >
        {filters.map((label) => (
          <button
            key={label}
            onClick={() => setActive(label)}
            className={`px-5 py-2 rounded-xl text-sm font-semibold hover:scale-105 transition-all duration-300
              ${
                active === label
                  ? "bg-linear-to-r from-cyan-500 to-purple-600 dark:from-cyan-300 dark:to-purple-400 text-white dark:text-[#1a1f2e] shadow-[0_4px_16px_rgba(110,231,247,0.35)] -translate-y-px"
                  : "text-gray-500 dark:text-white/50 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-white/10 hover:-translate-y-px"
              }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="py-16 px-6 bg-gray-100 dark:bg-gray-900 transition-colors border-0 rounded-2xl">
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {reactCards.map((card) => (
            <li
              key={card.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center group"
            >
              <div className="mb-4 flex justify-center">
                <img
                  src={card.image}
                  alt=""
                  className="w-60 h-40 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <h3 className="text-lg font-semibold text-blue-500 mb-2">
                {card.title}
              </h3>

              <div className="flex justify-between mb-2">
                <button className="bg-linear-to-r from-purple-600 to-pink-500 py-1 px-3 rounded-xl cursor-pointer text-white text-sm font-medium hover:from-pink-500 hover:to-purple-600 hover:scale-105 transition-all duration-300">
                  View Demo
                </button>
                <button className="flex items-center gap-2 bg-linear-to-r from-purple-600 to-pink-500 py-1 px-3 rounded-xl cursor-pointer text-white text-sm font-medium hover:from-pink-500 hover:to-purple-600 hover:scale-105 transition-all duration-300">
                  <FaGithub /> Github
                </button>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {card.description}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <button className="px-10 border-0 bg-Primary py-2 rounded-xl cursor-pointer ">
        Show More
      </button>
    </div>
  );
};

export default Portfolios;
