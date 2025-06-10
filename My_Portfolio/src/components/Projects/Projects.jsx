import foodDel from "../../assets/food-del.png";
import movieapp from "../../assets/movie-watchlist.png";
import bookmyshow from "../../assets/BookMyShow.png";
import weather from "../../assets/weather-app.png";
const ProjectList = [
  {
    name: "Food delivery MERN",
    description: "xyz",
    image: foodDel,
    link: "https://github.com/gunjan5455/Food-Delivery",
  },
  {
    name: "React MovieApp",
    description: "xyzxyzxy",
    image: movieapp,
    link: "https://github.com/gunjan5455/React-Apps/tree/main/Imdb-app",
  },
  {
    name: "BookMyShow MERN",
    description: "xyz",
    image: bookmyshow,
    link: "https://github.com/gunjan5455/BookMyShow_MERN",
  },
  {
    name: "Js WeatherApp",
    description: "xyz",
    image: weather,
    link: "https://github.com/gunjan5455/WetherApp",
  },
];
const Projects = () => {
  return (
    <div className="">
      <h1 className="work-sans-heading text-4xl p-6 text-center my-14">
        PROJECTS
      </h1>
      {/* <div className="flex flex-wrap justify-around mx-24">
        {ProjectList &&
          ProjectList.map((item, index) => {
            return (
              <a href={item.link} target="_blank " rel="noopner noreferrer">
                <div key={index}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-40 w-40 sm:h-48 sm:w-56 md:h-56 md:w-56 lg:h-64 lg:w-64 rounded-2xl transition-transform duration-200 hover:scale-105 object-cover"
                  />
                  <h1 className="text-center mt-3 text-xl font-semibold">
                    {item.name}
                  </h1>
                  <h2 className="text-center mb-5 text-gray-600">
                    {item.description}
                  </h2>
                </div>
              </a>
            );
          })}
      </div> */}
      <div className="flex flex-wrap justify-around gap-8 px-6 md:mx-20 py-10">
        {ProjectList &&
          ProjectList.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-64 w-64 sm:h-[18rem] sm:w-68 md:h-[18rem] md:w-68 lg:h-[18rem] lg:w-68 rounded-2xl transition-transform duration-200 hover:scale-105 "
                />
                <h1 className="text-center mt-3 text-xl font-semibold">
                  {item.name}
                </h1>
                <h2 className="text-center mb-5 text-gray-600">
                  {item.description}
                </h2>
              </div>
            </a>
          ))}
      </div>
    </div>
  );
};

export default Projects;
