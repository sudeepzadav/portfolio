import { footerData, socialLinks } from "../../Constants/footer";

const Footer = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-700 py-10 px-4 sm:px-10 lg:px-20 transition-colors duration-300">
      <div className="rounded-2xl dark:bg-dark px-4 sm:px-10 py-8 sm:py-10 mb-10 shadow-lg">
        <div className="px-2 sm:px-6 lg:px-20">
          <div className="flex flex-col justify-center items-center gap-3 border-b-2 py-5 border-dotted border-blue-200 text-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold dark:text-blue-500">
              Briliant solution for your ideas
            </h1>
            <p className="dark:text-gray-400 text-base sm:text-lg lg:text-xl">
              Build modern websites fast and easy using Now!
            </p>
          </div>

          {/* top */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
            <div className="col-span-1">
              <p className="flex flex-col py-3 dark:text-gray-400 text-sm sm:text-base">
                <span className="text-lg sm:text-xl font-semibold py-2 dark:text-gray-200">
                  About Me
                </span>
                I’m a passionate React Developer who loves creating modern and
                scalable web applications. With experience in React, Tailwind
                CSS, and backend tools like Node.js, I focus on writing clean
                code and designing smooth user experiences. I also leverage AI
                tools to work more efficiently and build smarter solutions.
              </p>
            </div>

            <div className="col-span-1 lg:col-span-2 py-5 lg:px-10">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {footerData.map((items) => (
                  <div key={items.title}>
                    <h2 className="text-sm sm:text-base font-semibold dark:text-gray-200 mb-4">
                      {items.title}
                    </h2>
                    <ul>
                      {items.links.map((link) => (
                        <li
                          key={link.label}
                          className="dark:text-gray-400 text-sm sm:text-base"
                        >
                          <a href={link.href}>{link.label}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-5">
        <div className="text-sm sm:text-base dark:text-gray-400 text-center sm:text-left">
          &copy; 2026 Cybur all rights reserved
        </div>

        <div className="w-40 lg:w-220 h-2px bg-black dark:bg-gray-600"></div>

        <div>
          <ul className="flex gap-3 text-xl sm:text-2xl cursor-pointer">
            {socialLinks.map((app) => (
              <li
                key={app.id}
                className="hover:scale-110 ease-in duration-200 text-Primary"
              >
                <app.icon />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;