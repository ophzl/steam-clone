import React, { createContext, useContext, useEffect, useState } from "react";
const AuthContext = createContext();
import firebase, { createUser } from "../libs/firebase";
import Router from "next/router";

function AuthProvider({ children }) {
  const [user, setUser] = useState({
    uuid: "floriaaan",
    fullname: "Florian Leroux",
    email: "florian.leroux3@laposte.net",
    friends: [{ uuid: "ophzl", fullname: "oph@zl.fr" }],
  });

  const auth = useFirebaseAuth();

  function useFirebaseAuth() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const handleUser = async (rawUser) => {
      if (rawUser) {
        const user = await formatUser(rawUser);
        const { token, ...userWithoutToken } = user;

        createUser(user.uid, userWithoutToken);
        setUser(user);
        // getUser(user.uid, userWithoutToken);

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
      }
    };

    const register = async (email, password, redirect) => {
      setLoading(true);
      const response = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      handleUser(response.user);
      if (redirect) {
        Router.push(redirect);
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

    useEffect(() => (user ? Router.push("/") : Router.push("/auth/login")), [
      user,
    ]);

    return {
      user,
      loading,
      signin,
      signinWithGoogle,
      signout,
      register,
    };
  }

  // const getUser = async (uid, user) => {
  //   try {
  //     let document = await firebase
  //       .firestore()
  //       .collection("users")
  //       .doc(uid)
  //       .get();
  //     if (document && document.exists) {
  //       setUser({ uid, ...document.data() });
  //     } else {
  //       await document.ref.set({ id: uid, ...user }, { merge: true });
  //       setUser({ id: uid, ...user });
  //     }
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  const [library, setLibrary] = useState([
    {
      slug: "cyberpunk",
      title: "Cyberpunk 2077",
      color: "yellow",
      bgUrl: "https://media.melty.fr/article-4313652-so/media.jpg",
      logoUrl:
        "https://i.shgcdn.com/6c053630-2241-4b11-8b35-2cec9043d819/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
    },
    {
      slug: "half-life-alyx",
      title: "Half-Life: Alyx",
      color: "gray",
      bgUrl:
        "https://gameranx.com/wp-content/uploads/2020/01/Half-Life-Alyx-4K-Wallpaper.jpg",
      logoUrl: "https://i.imgur.com/l6zTfqc.png",
    },
    {
      slug: "fifa-21",
      title: "Fifa 21",
      color: "green",
      bgUrl: "https://wallpaperaccess.com/full/1108509.jpg",
      logoUrl:
        "https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-21/buy/common/fifa21-logo-buy-odhfowwo18r-xl-m.png",
    },
    {
      slug: "black-ops-cold-war",
      title: "Call of Duty: Black Ops Cold War",
      color: "gray",
      bgUrl:
        "https://compass-ssl.xbox.com/assets/f5/61/f5611b5a-0405-4eb3-ad13-acabc6310b7f.jpg?n=242149_GLP-Page-Hero-1084_1920x1080.jpg",
      logoUrl:
        "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/zeus/common/logos/zeus-logo-light.png",
    },
    {
      slug: "bioshock-collection",
      title: "BioShock Collection",
      color: "blue",
      bgUrl: "https://wallpapercave.com/wp/wp5251596.jpg",
      logoUrl:
        "https://img2.pngio.com/bioshock-logo-transparent-png-clipart-free-download-ywd-bioshock-the-collection-png-980_485.png",
    },
  ]);
  return (
    <AuthContext.Provider value={{ ...auth, library, setLibrary }}>
      {children}
    </AuthContext.Provider>
  );
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
