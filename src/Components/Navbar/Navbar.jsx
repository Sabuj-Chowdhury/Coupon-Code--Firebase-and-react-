import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 shadow-lg">
      <div className="max-w-7xl mx-auto p-5">
        <div className="flex justify-between items-center">
          <div className="">
            <img className="h-20 w-24" src={logo} alt="Discount PRO Logo" />
          </div>

          <div className="space-x-5 text-white font-semibold">
            <NavLink className="hover:text-yellow-300 transition duration-300">
              Home
            </NavLink>
            <NavLink className="hover:text-yellow-300 transition duration-300">
              Brands
            </NavLink>
            <NavLink className="hover:text-yellow-300 transition duration-300">
              My Profile
            </NavLink>
            <NavLink className="hover:text-yellow-300 transition duration-300">
              About Dev
            </NavLink>
          </div>
          <div>
            <NavLink className="hover:text-yellow-300 transition duration-300">
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
