import { useEffect, useState } from "react";
import AuthContext from "../Context/AuthContext";
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // update profile
  const updateUser = (updateData) => {
    return updateProfile(auth.currentUser, updateData);
  };
  // google login
  const userGoogleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };
  //github login
  const userGitHubSignIn = () => {
    return signInWithPopup(auth, githubProvider);
  };
  const userLogout = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setLoading(false);
        setUsers(currentUser);
      } else {
        setUsers(null);
        setLoading(false);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const userInfo = {
    loading,
    setLoading,
    users,
    createUser,
    userLogin,
    updateUser,
    userLogout,
    userGoogleSignIn,
    userGitHubSignIn,
    setUsers,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
