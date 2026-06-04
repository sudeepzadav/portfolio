import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdAttachEmail, MdCall } from "react-icons/md";

type FormField = "name" | "email" | "phone" | "message";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Contact = () => {
  const [successMsg, setSuccessMsg] = useState<string>("");
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted!");
    setSuccessMsg("✅ Your message has been sent successfully!");
    setTimeout(() => setSuccessMsg(""), 3000);
  };

  const handleChange = (field: FormField) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [field]: e.target.value });

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 md:p-10">

        {/* LEFT SIDE — form (second on mobile, first on desktop) */}
        <div className="order-last md:order-first">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white hover:underline">
            Contact Me
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-1 text-gray-700 dark:text-gray-300">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange("name")}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                bg-white dark:bg-gray-700 text-gray-800 dark:text-white 
                focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                placeholder="abc@gmail.com"
                value={formData.email}
                onChange={handleChange("email")}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                bg-white dark:bg-gray-700 text-gray-800 dark:text-white 
                focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-700 dark:text-gray-300">
                Phone
              </label>
              <input
                type="text"
                placeholder="9800000000"
                value={formData.phone}
                onChange={handleChange("phone")}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                placeholder="Type your message..."
                value={formData.message}
                onChange={handleChange("message")}
                className="w-full px-4 py-2 border rounded-xl border-gray-300 dark:border-gray-600 
                bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
              />
            </div>

            <div className="flex items-center justify-center">
              <button type="submit" className="bg-Primary px-3 py-2 border-0 rounded-xl cursor-pointer">
                Send Message
              </button>
            </div>

            {successMsg && (
              <p className="text-green-500 text-center text-sm">{successMsg}</p>
            )}
          </form>
        </div>

        {/* RIGHT SIDE — contact info (first on mobile, second on desktop) */}
        <div className="order-first md:order-last flex flex-col justify-center text-center md:text-left">
          <h3 className="text-blue-500 text-2xl font-semibold dark:text-white mb-4 underline">
            Let's Connect :
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Feel free to reach out for collaborations, projects, or just a
            friendly hello. I usually respond within 24 hours.
          </p>

          <div className="mt-6 text-gray-700 dark:text-gray-300 space-y-2">
            <p className="flex items-center justify-center md:justify-start gap-3 cursor-pointer">
              <FaLocationDot className="text-red-500 text-xl" /> Kathmandu, Nepal
            </p>
            <p className="flex items-center justify-center md:justify-start gap-3 cursor-pointer">
              <MdAttachEmail className="text-blue-500 text-xl" />{" "}
              yadavsudeep3676@gmail.com
            </p>
            <p className="flex items-center justify-center md:justify-start gap-3 cursor-pointer">
              <MdCall className="text-green-500 text-xl" /> +977-9805924999
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;