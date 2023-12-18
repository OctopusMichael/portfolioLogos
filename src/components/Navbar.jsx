import React from "react";
import logo from "../assets/logoOctopus.png";
import { motion } from "framer-motion";
import blur from "../assets/Vector 8.png";

const Navbar = () => {
  const menu = [
    {
      id: 0,
      name: "Home",
    },
    {
      id: 1,
      name: "About Me",
    },
    {
      id: 2,
      name: "My Works",
    },
    {
      id: 3,
      name: "Contact",
    },
  ];
  return (
    <nav className=" container p-[80px] md:p-0 md:px-[80px] flex justify-center md:justify-between items-center">
      <div>
        <a className="relative" href="#">
          {" "}
          <img className="w-[150px]" src={logo} alt="logo OctopusDev" />
        </a>
      </div>
      <ul className=" hidden  md:flex items-center gap-[60px]">
        {menu.map((e) => (
          <li key={e.id}>
            <a
              className={`${
                e.id === 3
                  ? "bg-black border-2 border-[#9EA3AE]  hover:bg-blueAquaHover hover:border-black hover:border-2 hover:text-black  rounded-3xl   p-3 text-white font-bold"
                  : "text-[#9EA3AE] hover:text-white hover:underline"
              } uppercase text-[14px] transition-all duration-150 ease-linear`}
              href="#"
            >
              {e.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
