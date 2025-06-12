import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import { toast } from "sonner";
import axios from "axios";
import { useState } from "react";
const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  // const url = "http://localhost:4000/api/mail"
  const url = "https://gunjan-dbrg.onrender.com/api/mail";
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${url}`, form);
      console.log(res);

      if (res.data.success) {
        toast.success("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        toast.error(
          res.data.error || "Something went wrong. Please try again."
        );
      }
    } catch (err) {
      console.error(err);

      // Handle express-rate-limit or other backend errors
      if (err.response && err.response.data && err.response.data.error) {
        toast.error(err.response.data.error);
      } else {
        toast.error("Failed to send message. Try again later.");
      }
    }
  };
  return (
    <div>
      <h1 className="work-sans-heading text-4xl p-6 text-center mt-22 mb-14">
        CONTACT
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center space-x-10"
      >
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className={`${
            theme === "light" ? "placeholder-black" : "placeholder-white"
          } text-base h-16 w-72 md:w-1/2 p-4 m-4 rounded-3xl border border-gray-500 shadow-sm focus:outline-none focus:ring-1 focus:ring-black`}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className={`${
            theme === "light" ? "placeholder-black" : "placeholder-white"
          } text-base h-16 w-72 md:w-1/2 p-4 m-4 rounded-3xl border border-gray-500 shadow-sm focus:outline-none focus:ring-1 focus:ring-black`}
        />
        <textarea
          rows="7"
          placeholder="Message"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          className={`${
            theme === "light" ? "placeholder-black" : "placeholder-white"
          } text-base w-72 md:w-1/2 p-4 m-4 border border-gray-500 rounded-3xl shadow-sm resize-none focus:outline-none focus:ring-1 focus:ring-black`}
        />
        <button
          type="submit"
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
