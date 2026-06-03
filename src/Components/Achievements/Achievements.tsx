import {
  FaAward,
  FaChalkboardUser,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaPython,
  FaLayerGroup,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";

const Achievements = () => {
  return (
    <div className="px-6 sm:px-12 lg:px-20 py-10 dark:bg-dark h-180">
      <h1 className="text-Primary font-semibold text-2xl hover:underline mb-6 mt-30">
        Achievements:
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Left column */}
        <div>
          <p className="font-bold text-xl sm:text-2xl text-gray-800 dark:text-gray-200 mb-6 leading-relaxed">
            I've been fortunate to work with and for people from some{" "}
            <span className="text-Primary">amazing Organizations</span>
          </p>

          {/* Card 1 */}
          <div className="flex items-center gap-4 rounded-2xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-5 py-4 mb-4 hover:shadow-md dark:hover:shadow-gray-900 transition-shadow duration-300">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-Primary/10 text-Primary text-2xl shrink-0">
              <FaChalkboardUser />
            </div>
            <div>
              <h2 className="font-bold text-xl text-gray-900 dark:text-white">1+</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Years of experience as designer, developer and tester
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-center gap-4 rounded-2xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-5 py-4 hover:shadow-md dark:hover:shadow-gray-900 transition-shadow duration-300">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-amber-400/10 text-amber-500 text-2xl shrink-0">
              <FaAward />
            </div>
            <div>
              <h2 className="font-bold text-xl text-gray-900 dark:text-white">5+</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                National and international honors and awards in related fields
              </p>
            </div>
          </div>
        </div>

        {/* Right column — orbit layout */}
        <div className="flex items-center justify-center">
          <div className="relative w-80 h-80 sm:w-96 sm:h-96 cursor-pointer">

            {/* Center large circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-linear-to-br from-amber-400 to-amber-500 dark:from-amber-500 dark:to-amber-600 flex items-center justify-center z-10 shadow-lg shadow-amber-300/40 dark:shadow-amber-900/40">
              <div className="flex flex-col items-center justify-center font-semibold text-amber-900 dark:text-amber-100">
                <FaLayerGroup className="text-3xl mb-1" />
                <p className="text-sm">Web Developer</p>
              </div>
            </div>

            {/* Top center */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white dark:bg-gray-800 border-2 border-orange-400 dark:border-orange-500 flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-200">
              <div className="flex flex-col items-center justify-center text-orange-500 dark:text-orange-400">
                <RiTailwindCssFill className="text-xl" />
                <p className="text-xs font-semibold mt-0.5">Tailwind</p>
              </div>
            </div>

            {/* Top left */}
            <div className="absolute top-6 left-2 w-16 h-16 rounded-full bg-white dark:bg-gray-800 border-2 border-cyan-400 dark:border-cyan-500 flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-200">
              <div className="flex flex-col items-center justify-center text-cyan-500 dark:text-cyan-400">
                <FaReact className="text-xl" />
                <p className="text-xs font-semibold mt-0.5">React</p>
              </div>
            </div>

            {/* Top right */}
            <div className="absolute top-6 right-2 w-14 h-14 rounded-full bg-white dark:bg-gray-800 border-2 border-blue-400 dark:border-blue-500 flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-200">
              <div className="flex flex-col items-center justify-center text-blue-500 dark:text-blue-400">
                <FaCss3Alt className="text-lg" />
                <p className="text-xs font-semibold mt-0.5">CSS</p>
              </div>
            </div>

            {/* Middle left */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 w-18 h-18 rounded-full bg-white dark:bg-gray-800 border-2 border-green-400 dark:border-green-500 flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-200">
              <div className="flex flex-col items-center justify-center text-green-500 dark:text-green-400">
                <FaNodeJs className="text-xl" />
                <p className="text-xs font-semibold mt-0.5">Next.js</p>
              </div>
            </div>

            {/* Middle right */}
            <div className="absolute top-1/2 -translate-y-1/2 right-0 w-16 h-16 rounded-full bg-white dark:bg-gray-800 border-2 border-indigo-400 dark:border-indigo-500 flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-200">
              <div className="flex flex-col items-center justify-center text-indigo-500 dark:text-indigo-400">
                <FaDatabase className="text-xl" />
                <p className="text-xs font-semibold mt-0.5">SQL</p>
              </div>
            </div>

            {/* Bottom left */}
            <div className="absolute bottom-6 left-2 w-16 h-16 rounded-full bg-white dark:bg-gray-800 border-2 border-yellow-400 dark:border-yellow-500 flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-200">
              <div className="flex flex-col items-center justify-center text-yellow-500 dark:text-yellow-400">
                <FaPython className="text-xl" />
                <p className="text-xs font-semibold mt-0.5">Python</p>
              </div>
            </div>

            {/* Bottom center — CSS */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white dark:bg-gray-800 border-2 border-orange-300 dark:border-orange-400 flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-200">
              <div className="flex flex-col items-center justify-center text-orange-400 dark:text-orange-300">
                <FaHtml5 className="text-xl" />
                <p className="text-xs font-semibold mt-0.5">HTML5</p>
              </div>
            </div>

            {/* Bottom right — larger Shopify-style circle */}
            <div className="absolute bottom-4 right-0 w-20 h-20 rounded-full bg-white dark:bg-gray-800 border-2 border-emerald-400 dark:border-emerald-500 flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-200">
              <div className="flex flex-col items-center justify-center text-emerald-500 dark:text-emerald-400">
                <FaNodeJs className="text-2xl" />
                <p className="text-xs font-semibold mt-0.5">Node.js</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;