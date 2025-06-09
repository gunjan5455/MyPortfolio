const Contact = () => {
  return (
    <div>
      <h1 className="work-sans-heading text-5xl p-6 text-center mt-22 mb-14">
        CONTACT
      </h1>
      <form action="" className="flex flex-col items-center space-x-10">
        <input
          type="text"
          placeholder="Name"
          className="text-2xl h-16 md:w-1/2 p-4 m-4 rounded-3xl border border-gray-500 shadow-sm focus:outline-none focus:ring-1 focus:ring-black"
        />
        <input
          type="email"
          placeholder="Email"
          className="text-2xl h-16 md:w-1/2 p-4 m-4 rounded-3xl border border-gray-500 shadow-sm focus:outline-none focus:ring-1 focus:ring-black"
        />
        <textarea
          rows="7"
          placeholder="Message"
          className="text-2xl md:w-1/2 p-4 m-4 border border-gray-500 rounded-3xl shadow-sm resize-none focus:outline-none focus:ring-1 focus:ring-black"
        />
        <button className="bg-black w-52 md:w-96 h-14 mt-4 text-white text-xl font-semibold rounded-2xl shadow-2xl transition-transform duration-200 hover:scale-110">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
