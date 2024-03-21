import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="bg-gray-700 h-36 shadow-xl fixed w-screen flex items-center px-14 justify-between">
      <div className="flex items-center w-2/3 gap-x-5">
        <Link to="/">
          <img src={logo} className="mt-2" />
        </Link>
      </div>
      <div className="flex gap-x-7 items-center">
        <p className="text-[#A995DC] font-semibold text-2xl">Home</p>
        <p className="text-white font-semibold text-2xl">Featured</p>
        <p className="text-white font-semibold text-2xl">Mine</p>
      </div>
    </div>
  );
};

export default Header;
