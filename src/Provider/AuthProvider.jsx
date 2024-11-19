import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import PropTypes from "prop-types";

export const authContext = createContext();
const AuthProvider = ({ route }) => {
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log(currentUser);
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
      setLoading(false);

      return () => {
        unsubscribe();
      };
    });
  }, []);

  // registration
  const handleRegistration = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   login
  const handleLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //   google login
  const handleGoogleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  //   logout
  const handleLogout = () => {
    signOut(auth);
  };
  // manage profile
  const manageUser = (name, image) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };

  const authInfo = {
    user,
    setUser,
    handleRegistration,
    handleLogin,
    handleGoogleLogin,
    handleLogout,
    manageUser,
    loading,
  };
  return (
    <div>
      <authContext.Provider value={authInfo}>{route}</authContext.Provider>
    </div>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  route: PropTypes.object,
};
