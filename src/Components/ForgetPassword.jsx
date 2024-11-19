import { useState, useEffect, useContext } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import auth from "../firebase/firebase.config";
import { authContext } from "../Provider/AuthProvider";

const ForgetPassword = () => {
  const { handleLogout } = useContext(authContext);
  const [email, setEmail] = useState("");
  const location = useLocation();

  useEffect(() => {
    const emailFromState = location.state?.email || "";
    setEmail(emailFromState);
  }, [location.state]);

  const handleResetPassword = async () => {
    if (!email) {
      toast.error("Please enter your email.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent! Redirecting to Gmail...");

      setTimeout(() => {
        window.location.href = "https://mail.google.com";
      }, 2000);

      handleLogout();
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 py-6 sm:py-8">
      <div className="max-w-md w-full p-6 sm:p-8 bg-white border border-gray-200 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Reset Password
        </h2>

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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          onClick={handleResetPassword}
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-200"
        >
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default ForgetPassword;
