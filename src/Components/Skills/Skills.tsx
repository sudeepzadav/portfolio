const Skills = () => {
  return (
    <div className="py-16 px-4 sm:px-6 md:px-10 lg:px-20 dark:bg-gray-900 dark:text-white">
      
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
        Skills
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">

        {/* HTML */}
        <div className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow-md">
          <div className="flex justify-between mb-2">
            <span className="font-semibold">HTML</span>
            <span>95%</span>
          </div>
          <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
            <div className="bg-blue-500 h-2 rounded-full w-[95%]"></div>
          </div>
        </div>

        {/* CSS */}
        <div className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow-md">
          <div className="flex justify-between mb-2">
            <span className="font-semibold">CSS</span>
            <span>90%</span>
          </div>
          <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
            <div className="bg-blue-500 h-2 rounded-full w-[90%]"></div>
          </div>
        </div>

        {/* React */}
        <div className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow-md">
          <div className="flex justify-between mb-2">
            <span className="font-semibold">React</span>
            <span>85%</span>
          </div>
          <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
            <div className="bg-blue-500 h-2 rounded-full w-[85%]"></div>
          </div>
        </div>

        {/* Tailwind CSS */}
        <div className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow-md">
          <div className="flex justify-between mb-2">
            <span className="font-semibold">Tailwind CSS</span>
            <span>90%</span>
          </div>
          <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
            <div className="bg-blue-500 h-2 rounded-full w-[90%]"></div>
          </div>
        </div>

        {/* Node.js */}
        <div className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow-md">
          <div className="flex justify-between mb-2">
            <span className="font-semibold">Node.js</span>
            <span>80%</span>
          </div>
          <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
            <div className="bg-blue-500 h-2 rounded-full w-[80%]"></div>
          </div>
        </div>

        {/* Python */}
        <div className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow-md">
          <div className="flex justify-between mb-2">
            <span className="font-semibold">Python</span>
            <span>75%</span>
          </div>
          <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
            <div className="bg-blue-500 h-2 rounded-full w-[75%]"></div>
          </div>
        </div>

        {/* SQL */}
        <div className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow-md">
          <div className="flex justify-between mb-2">
            <span className="font-semibold">SQL</span>
            <span>70%</span>
          </div>
          <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
            <div className="bg-blue-500 h-2 rounded-full w-[70%]"></div>
          </div>
        </div>

        {/* JavaScript */}
        <div className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow-md">
          <div className="flex justify-between mb-2">
            <span className="font-semibold">JavaScript</span>
            <span>88%</span>
          </div>
          <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
            <div className="bg-blue-500 h-2 rounded-full w-[88%]"></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Skills;