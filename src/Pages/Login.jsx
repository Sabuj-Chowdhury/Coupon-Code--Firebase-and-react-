import { useContext, useState } from "react";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { authContext } from "../Provider/AuthProvider";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const { handleGoogleLogin, handleLogin } = useContext(authContext);
  const [error, setError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLoginForm = (e) => {
    e.preventDefault();
    setError("");
    const email = e.target.email.value;
    const password = e.target.password.value;
    handleLogin(email, password)
      .then((res) => {
        const redirectTo = location.state?.from || "/";
        navigate(redirectTo);
      })
      .catch((err) => toast.error(err.message));
  };

  const googleHandler = () => {
    handleGoogleLogin().then((res) => {
      const redirectTo = location.state?.from || "/";
      navigate(redirectTo);
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 py-6 sm:py-8">
      <div className="max-w-md w-full p-6 sm:p-8 bg-white border border-gray-200 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Login
        </h2>

        <form onSubmit={handleLoginForm}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4 relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              name="password"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="absolute top-9 right-3 text-gray-500 hover:text-gray-700"
            >
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <div className="flex justify-end mb-4">
            <a className="text-sm text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>

          <div className="mb-4">
            <button className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-blue-300 transition-all duration-200">
              Login
            </button>
          </div>

          <div className="mt-4 text-center">
            <button
              onClick={googleHandler}
              className="flex items-center justify-center w-full py-2 px-4 border border-gray-300 rounded-md text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            >
              <FaGoogle className="mr-2 text-xl" />
              <span>Login with Google</span>
            </button>
          </div>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          New to this page?{" "}
          <NavLink to="/register" className="text-blue-600 hover:underline">
            <em>Register</em>
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
