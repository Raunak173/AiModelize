import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { useState } from "react";

const Header = () => {
  const [selectedPage, setSelectedPage] = useState("Home");
  return (
    <div className="bg-gray-700 h-36 shadow-xl flex items-center px-14 justify-between">
      <div className="flex items-center w-2/3 gap-x-5">
        <NavLink to="/">
          <img src={logo} className="mt-2" />
        </NavLink>
      </div>
      <div className="flex gap-x-7 items-center">
        <NavLink to="/" onClick={() => setSelectedPage("Home")}>
          <p
            className={
              selectedPage === "Home"
                ? `text-[#A995DC] font-semibold text-2xl`
                : `text-white`
            }
          >
            Home
          </p>
        </NavLink>
        <NavLink to="/featured" onClick={() => setSelectedPage("Featured")}>
          <p
            className={
              selectedPage === "Featured"
                ? `text-[#A995DC] font-semibold text-2xl`
                : `text-white`
            }
          >
            Featured
          </p>
        </NavLink>
        <NavLink to="/mine" onClick={() => setSelectedPage("Mine")}>
          <p
            className={
              selectedPage === "Mine"
                ? `text-[#A995DC] font-semibold text-2xl`
                : `text-white`
            }
          >
            Mine
          </p>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
