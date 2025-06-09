// import React from "react";

// const Navbar = () => {
//   return (
//     <div className="flex justify-around md:justify-center text-sm m-5">

//       <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"">
//         Profile
//       </div>

//       <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"">
//         Projects
//       </div>

//       <span  className="absolute left-0 -bottom-1 h-0.5 w-full bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"">Skills</div>
//
// <span lassName="absolute left-0 -bottom-1 h-0.5 w-full bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"">
//         Contact Me
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React from "react";
import { useState } from "react";

const Navbar = ({ refs }) => {
  const [active, setActive] = useState("Profile");
  const navItems = ["Profile", "Projects", "Skills", "Contact Me"];
  const handleScroll = (key) => {
    if (key === "Contact Me") {
      key = "Contact";
    }
    refs[key]?.current?.scrollIntoView({ behavior: "smooth" });
    setActive(key);
  };
  return (
    <div className="flex justify-around md:justify-center text-sm m-5">
      {navItems.map((item, index) => (
        <div
          onClick={() => handleScroll(item)}
          key={index}
          className="md:mx-10 md:text-lg cursor-pointer uppercase relative group"
        >
          {item}
          <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        </div>
      ))}
    </div>
  );
};

export default Navbar;
