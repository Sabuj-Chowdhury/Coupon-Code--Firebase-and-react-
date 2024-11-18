import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

const authContext = createContext();
const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);

      return () => {
        unsubscribe();
      };
    });
  }, []);

  // registration
  const handleRegistration = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };
  //   login
  const handleLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };
  //   google login
  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider);
  };
  //   logout
  const handleLogout = () => {
    signOut(auth);
  };

  const authInfo = {
    handleRegistration,
    handleLogin,
    handleGoogleLogin,
    handleLogout,
  };
  return (
    <div>
      <authContext.Provider value={authInfo}>{children}</authContext.Provider>
    </div>
  );
};

export default AuthProvider;
