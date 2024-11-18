import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import "../Navbar/Navbar.css";
import { CiMenuBurger } from "react-icons/ci";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 shadow-lg">
      <div className="max-w-7xl mx-auto p-5 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img className="h-20 w-24" src={logo} alt="Discount PRO Logo" />
        </div>

        {/* Links for Large & Medium Screens */}
        <div className="hidden lg:flex flex-grow justify-center space-x-8 text-white font-semibold">
          <NavLink
            className="hover:text-yellow-300 transition duration-300"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="hover:text-yellow-300 transition duration-300"
            to="/brands"
          >
            Brands
          </NavLink>
          <NavLink
            className="hover:text-yellow-300 transition duration-300"
            to="/profile"
          >
            My Profile
          </NavLink>
          <NavLink
            className="hover:text-yellow-300 transition duration-300"
            to="/about"
          >
            About Dev
          </NavLink>
        </div>

        {/* Login Button */}
        <div className="hidden lg:block">
          <NavLink
            className="hover:text-yellow-300 transition duration-300 text-white font-semibold"
            to="/login"
          >
            Login
          </NavLink>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="lg:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <CiMenuBurger className="text-2xl font-extrabold" />
          </button>
        </div>

        {/* Links in Hamburger Menu */}
        {isMenuOpen && (
          <div className="absolute top-20 right-5 w-60 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-lg shadow-lg p-5 space-y-4 text-white font-semibold z-50">
            <NavLink
              className="block hover:text-yellow-300 transition duration-300"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className="block hover:text-yellow-300 transition duration-300"
              to="/brands"
            >
              Brands
            </NavLink>
            <NavLink
              className="block hover:text-yellow-300 transition duration-300"
              to="/profile"
            >
              My Profile
            </NavLink>
            <NavLink
              className="block hover:text-yellow-300 transition duration-300"
              to="/about"
            >
              About Dev
            </NavLink>
            <NavLink
              className="block hover:text-yellow-300 transition duration-300"
              to="/login"
            >
              Login
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
