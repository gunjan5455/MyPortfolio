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
    name: "Javascript WeatherApp",
    description: "xyz",
    image: weather,
    link: "https://github.com/gunjan5455/WetherApp",
  },
];
const Projects = () => {
  return (
    <div className="">
      <h1 className="work-sans-heading text-5xl p-6 text-center mb-14">
        PROJECTS
      </h1>
      <div className="flex flex-wrap justify-around mx-24">
        {ProjectList &&
          ProjectList.map((item, index) => {
            return (
              <a href={item.link} target="_blank " rel="noopner noreferrer">
                <div key={index}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-68 w-66 rounded-2xl transition-transform duration-200 hover:scale-105"
                  />
                  <h1 className="text-center mt-3 work-sans-heading text-xl">
                    {item.name}
                  </h1>
                  <h2 className="text-center mb-5">{item.description}</h2>
                </div>
              </a>
            );
          })}
      </div>
    </div>
  );
};

export default Projects;
