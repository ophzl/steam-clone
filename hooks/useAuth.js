import React, { createContext, useContext, useEffect, useState } from "react";
const AuthContext = createContext();
import firebase, { createUser } from "../libs/firebase";
import { useRouter } from "next/router";

function AuthProvider({ children }) {
  const auth = useFirebaseAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };

const formatUser = async (user) => {
  return {
    uid: user.uid,
    email: user.email,
    fullname: user.displayName,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL,
  };
};

function useFirebaseAuth() {
  const [user, setUser] = useState(null);
  const [library, setLibrary] = useState(null);
  const [loading, setLoading] = useState(true);

  const Router = useRouter();

  const handleUser = async (rawUser) => {
    if (rawUser) {
      const user = await formatUser(rawUser);

      createUser(user.uid, user);

      setUser(user);

      setLoading(false);
      return user;
    } else {
      setUser(false);
      setLoading(false);
      return false;
    }
  };

  const signin = async (email, password, redirect) => {
    setLoading(true);
    try {
      const response = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      handleUser(response.user);
    } catch (err) {
      return err;
    }
    if (redirect) {
      Router.push(redirect);
    } else {
      Router.push("/");
    }
  };

  const register = async (email, password, pseudo, redirect) => {
    setLoading(true);
    const response = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    handleUser({ ...response.user, displayName: pseudo });
    if (redirect) {
      Router.push(redirect);
    } else {
      Router.push("/");
    }
  };

  const signinWithGoogle = async (redirect) => {
    setLoading(true);
    const response = await firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider());
    handleUser(response.user);
    if (redirect) {
      Router.push(redirect);
    } else {
      Router.push("/");
    }
  };

  const signout = async () => {
    await firebase.auth().signOut();
    return await handleUser(false);
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onIdTokenChanged(handleUser);

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    // user ? Router.push("/") : Router.push("/auth/login");
    if (user?.uid) {
      console.log(user.uid);
      const librarySnapshot = firebase
        .firestore()
        .collection("users")
        .doc(user.uid)
        .collection("library")
        .onSnapshot(async function (querySnapshot) {
          let _tmpList = [];

          querySnapshot.forEach(function (doc) {
            _tmpList.push({ ...doc.data(), slug: doc.id });
          });

          setLibrary(_tmpList);
        });
      return () => librarySnapshot() && console.log('library: unmounted');
    }
  }, [user]);

  return {
    user,
    library,
    loading,
    signin,
    signinWithGoogle,
    signout,
    register,
  };
}
