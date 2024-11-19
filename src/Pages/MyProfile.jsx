import { useContext } from "react";
import { authContext } from "../Provider/AuthProvider";
import { NavLink } from "react-router-dom";

const MyProfile = () => {
  const { user } = useContext(authContext);
  console.log(user.photoURL);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto mt-5 text-center lg:mt-10 lg:mb-10 mb-5">
        <h1 className="text-4xl font-bold text-blue-950 mb-4">
          Welcome, {user?.displayName || ""}!
        </h1>
        <p className="text-lg text-gray-300">
          Here you can view and update your profile details.
        </p>
      </div>

      <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 border border-gray-200 rounded-lg shadow-lg">
        <div className="flex items-center justify-center mb-6">
          <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-md">
            <img
              src={user?.photoURL}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            {user?.displayName || ""}
          </h2>
          <p className="text-gray-600 text-sm mb-4">{user?.email || ""}</p>

          <NavLink
            to="/update"
            className="py-2 px-6 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-200"
          >
            Update Profile
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
