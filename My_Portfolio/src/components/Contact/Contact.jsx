import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <h1 className="work-sans-heading text-4xl p-6 text-center mt-22 mb-14">
        CONTACT
      </h1>
      <form action="" className="flex flex-col items-center space-x-10">
        <input
          type="text"
          placeholder="Name"
          className={`${
            theme === "light" ? "placeholder-black" : "placeholder-white"
          } text-base h-16 w-72 md:w-1/2 p-4 m-4 rounded-3xl border border-gray-500 shadow-sm focus:outline-none focus:ring-1 focus:ring-black`}
        />
        <input
          type="email"
          placeholder="Email"
          className={`${
            theme === "light" ? "placeholder-black" : "placeholder-white"
          } text-base h-16 w-72 md:w-1/2 p-4 m-4 rounded-3xl border border-gray-500 shadow-sm focus:outline-none focus:ring-1 focus:ring-black`}
        />
        <textarea
          rows="7"
          placeholder="Message"
          className={`${
            theme === "light" ? "placeholder-black" : "placeholder-white"
          } text-base w-72 md:w-1/2 p-4 m-4 border border-gray-500 rounded-3xl shadow-sm resize-none focus:outline-none focus:ring-1 focus:ring-black`}
        />
        <button
          className={`${
            theme === "light" ? "bg-black text-white" : "bg-white text-black"
          } cursor-pointer w-40 md:w-80 lg:w-[300px] h-14 mt-4 text-base font-semibold rounded-2xl shadow-2xl transition-transform duration-200 hover:scale-110`}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
