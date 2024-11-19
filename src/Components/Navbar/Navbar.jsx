import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo2.jpeg";
import "../Navbar/Navbar.css";
import { CiMenuBurger } from "react-icons/ci";
import { authContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user, setUser, handleLogout } = useContext(authContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const HandleLogout = () => {
    handleLogout();
    setUser(null);
  };

  return (
    <div>
      {user && (
        <div className="bg-cyan-500 text-white text-center py-2 font-semibold">
          <span>Welcome, {user.displayName}!</span>
        </div>
      )}

      <div className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 shadow-lg">
        <div className="max-w-7xl mx-auto p-5 flex justify-between items-center">
          <div className="flex-shrink-0">
            <NavLink to="/">
              <img className="h-20 w-24" src={logo} />
            </NavLink>
          </div>

          {/* Desktop Navigation */}
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
            {user && (
              <NavLink
                className="hover:text-yellow-300 transition duration-300"
                to="/profile"
              >
                My Profile
              </NavLink>
            )}
            <NavLink
              className="hover:text-yellow-300 transition duration-300"
              to="/about"
            >
              About Dev
            </NavLink>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <img src={user.photoURL} className="w-8 h-8 rounded-full" />
                <span className="text-white">{user.email}</span>
                <button
                  onClick={HandleLogout}
                  className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300"
                >
                  Log Out
                </button>
              </div>
            ) : (
              <div className="flex space-x-4">
                <NavLink
                  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                  to="/login"
                >
                  Login
                </NavLink>
                <NavLink
                  className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
                  to="/register"
                >
                  Register
                </NavLink>
              </div>
            )}
          </div>

          <div className="lg:hidden">
            <button
              className="text-white focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <CiMenuBurger className="text-2xl font-extrabold" />
            </button>
          </div>

          {/* Mobile Menu */}
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
              {user && (
                <NavLink
                  className="block hover:text-yellow-300 transition duration-300"
                  to="/profile"
                >
                  My Profile
                </NavLink>
              )}
              <NavLink
                className="block hover:text-yellow-300 transition duration-300"
                to="/about"
              >
                About Dev
              </NavLink>
              {user ? (
                <button
                  onClick={HandleLogout}
                  className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300 w-full"
                >
                  Log Out
                </button>
              ) : (
                <>
                  <NavLink
                    className="block hover:text-yellow-300 transition duration-300"
                    to="/login"
                  >
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 w-full">
                      Login
                    </button>
                  </NavLink>
                  <NavLink
                    className="block hover:text-yellow-300 transition duration-300"
                    to="/register"
                  >
                    <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300 w-full">
                      Register
                    </button>
                  </NavLink>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
