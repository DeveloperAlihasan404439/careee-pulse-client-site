import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../../shared/Firebase/Firebase";
import axios from "axios";
export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const proviter = new GoogleAuthProvider();
  const createUsers = (email, pass) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };
  const loginUser = (email, pass) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };
  const googleUser = () => {
    setLoading(true);
    return signInWithPopup(auth, proviter);
  };

  const logOutUser = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unSubscrib = onAuthStateChanged(auth, (crrent) => {
      const userCrrent = crrent?.email || user?.email;
      setUser(crrent);
      setLoading(false);
      if (userCrrent) {
        const email = userCrrent;
        axios
          .post(
            "https://serverlite-assignament.vercel.app/jwt",
            { email },
            { withCredentials: true }
          )
          .then((res) => {
            console.log(res.data);
          });
      } else {
        axiosInstance.post("/logout", userCrrent).then((res) => {
          console.log(res.data);
        });
      }
    });
    return () => {
      unSubscrib();
    };
  }, []);
  const authInfo = {
    user,
    loading,
    createUsers,
    loginUser,
    googleUser,
    logOutUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
