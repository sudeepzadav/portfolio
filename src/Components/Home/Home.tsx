import { Logo } from "../../Constants/image";

const Home = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 bg-gray-200 dark:bg-gray-900 shadow-gray-600 m-4 md:m-10 rounded-xl transition-colors duration-300">
      
      {/* Text Section */}
      <div className="col-span-1 md:col-span-3 flex flex-col justify-center items-start p-6 md:p-10 order-2 lg:order-1">
        
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-linear-to-r from-cyan-400 to-blue-600 hover:from-pink-400 dark:to-green-300 bg-clip-text text-transparent mb-3 transition-all duration-300">
          Discover my Amazing <br /> Art Space!
        </h1>

        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">
          code | build & | code
        </p>

        <button className="px-4 py-2 w-32 bg-blue-500 text-white rounded-md hover:bg-blue-600 dark:bg-cyan-500 dark:hover:bg-cyan-600 transition">
          Explore Now
        </button>

      </div>

      {/* Image Section */}
      <div className="col-span-1 md:col-span-2 flex justify-center items-center p-4 order-1 lg:order-2">
        <img
          src={Logo}
          alt="logo"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md object-contain border-0 rounded-2xl"
        />
      </div>

    </div>
  );
};

export default Home;