import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [color, setColor] = useState("text-white");

  // rendering navbar elements
  return (
    <header className="header">
      <NavLink
        to="/ "
        className={({ isActive }) =>
          `w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md ${
            isActive ? `${setColor("text-white")} additionalClass` : ""
          }`
        }
      >
        <p className=" blue-gradient_text">AK</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        {/* dynamic navigation : if clicked  => color blue else text black */}
        <NavLink
          to="/about "
          className={({ isActive }) =>
            isActive ? `text-blue-500 ${setColor("text-black")}` : color
          }
        >
          About
        </NavLink>
        {/* same here */}
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? `text-blue-500 ${setColor("text-black")}` : color
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? `text-blue-500 ${setColor("text-black")}` : color
          }
        >
          Contact
        </NavLink>

        {/* those were the links to the pages  */}
      </nav>
    </header>
  );
};

export default Navbar;
