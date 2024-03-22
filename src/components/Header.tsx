import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import menu from "../assets/menu.png";
import { useEffect, useState } from "react";

const Header = () => {
  const [_windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [openMenu, setOpenMenu] = useState(false);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {innerWidth > 768 ? (
        <div className="bg-gray-700 h-36 shadow-xl flex items-center px-14 justify-between">
          <div className="flex items-center w-2/3 gap-x-5">
            <NavLink to="/">
              <img src={logo} className="mt-2" />
            </NavLink>
          </div>
          <div className="flex gap-x-7 items-center">
            <NavLink
              to="/"
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "#A995DC" : "white",
                  fontSize: isActive ? 24 : 16,
                };
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="/featured"
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "#A995DC" : "white",
                  fontSize: isActive ? 24 : 16,
                };
              }}
            >
              Featured
            </NavLink>
            <NavLink
              to="/mine"
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "#A995DC" : "white",
                  fontSize: isActive ? 24 : 16,
                };
              }}
            >
              Mine
            </NavLink>
          </div>
        </div>
      ) : (
        <>
          <div className="bg-gray-700 h-14 shadow-xl flex items-center px-4 justify-between">
            <div onClick={() => setOpenMenu(!openMenu)}>
              <img src={menu} width={32} />
            </div>
            <NavLink to="/">
              <img src={logo} className="mt-2" width={150} />
            </NavLink>
            {openMenu && (
              <div
                className="bg-gray-700 flex flex-col w-2/5 absolute z-30 left-0 min-h-28 top-14 px-5 py-4"
                style={{
                  opacity: openMenu ? 1 : 0,
                  transform: openMenu ? "translateY(0)" : "translateY(-10px)",
                  transition: "opacity 0.3s, transform 0.3s",
                }}
              >
                <NavLink
                  to="/"
                  style={({ isActive }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isActive ? "#A995DC" : "white",
                      fontSize: isActive ? 20 : 16,
                    };
                  }}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/featured"
                  style={({ isActive }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isActive ? "#A995DC" : "white",
                      fontSize: isActive ? 20 : 16,
                    };
                  }}
                >
                  Featured
                </NavLink>
                <NavLink
                  to="/mine"
                  style={({ isActive }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isActive ? "#A995DC" : "white",
                      fontSize: isActive ? 20 : 16,
                    };
                  }}
                >
                  Mine
                </NavLink>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Header;
