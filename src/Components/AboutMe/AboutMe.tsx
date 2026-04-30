import { FaDownload } from "react-icons/fa6";
import { photo } from "../../Constants/image";

const AboutMe = () => {
  return (
    <div className="grid grid-cols-5 dark:bg-gray-800 py-20">
      {/* Image */}
      <div className="col-span-2 px-10">
        <img src={photo} alt="Profile" className="border rounded-xl" />
      </div>

      {/* Content */}
      <div className="col-span-3 flex flex-col justify-center px-5 gap-4">
        <h2 className="text-2xl font-bold hover:underline dark:text-gray-200 cursor-pointer">
          About Me
        </h2>

        <div>
          <p className="text-lg font-semibold dark:text-gray-200">
            Sudeep Yadav
          </p>
          <p className="text-lg font-semibold text-blue-500 py-3 border-b">
            React Developer, Web Developer, Programmer
          </p>
        </div>

        {/* Info */}
        <div className="space-y-1 dark:text-gray-200 py-3 border-b">
          <p>
            <span className="font-semibold">Nationality:</span> Nepali
          </p>
          <p>
            <span className="font-semibold">City:</span> Kathmandu
          </p>
          <p>
            <span className="font-semibold">DOB:</span> 15th April 2001
          </p>
        </div>

        {/* Description */}
        <p className="dark:text-gray-300 text-base py-3 border-b">
          I’m a passionate React Developer who loves creating modern and
          scalable web applications. With experience in React, Tailwind CSS, and
          backend tools like Node.js, I focus on writing clean code and
          designing smooth user experiences. I also leverage AI tools to work
          more efficiently and build smarter solutions.
        </p>

        {/* Skills */}
        <div className="space-y-5">
          <div className="gap-3 grid sm:grid-cols-3 md:grid-cols-5">
            {[
              "Tailwind CSS",
              "CSS",
              "React",
              "Node.js",
              "Python",
              "HTML5",
              "SQL",
            ].map((skill, index) => (
              <span
                key={index}
                className="container2 hover:scale-110 duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
          <button className="flex items-center gap-2 py-2 px-3 text-white dark:text-gray-300 text-xl font-semibold border-0 rounded-xl bg-gray-400 dark:bg-blue-400 cursor-pointer">
            Download CV <FaDownload />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
