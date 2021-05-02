import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { GameCard } from "../../components/Game/GameCard";
import { Layout } from "../../components/Layout/Layout";
import { Skeleton } from "../../components/Skeleton/Skeleton";
import { useInstall } from "../../hooks/useInstall";
import firebase from "../../libs/firebase";

function Index() {
  const { installed } = useInstall();
  const [games, setGames] = useState(null);
  useEffect(() => {
    const storeSnapshot = firebase
      .firestore()
      .collection("games")
      .onSnapshot(async function (querySnapshot) {
        let _tmpList = [];

        querySnapshot.forEach(function (doc) {
          _tmpList.push({ ...doc.data(), slug: doc.id });
        });

        setGames(_tmpList);
      });
    return () => storeSnapshot() && console.log("store: unmounted");
  }, []);
  return (
    <Layout>
      <div className="pt-32 pb-6 lg:pt-24 xl:pb-12">
        {/* <h4 className="w-full text-2xl lg:text-5xl text-white font-light tracking-wider text-opacity-90 px-16 lg:px-32 py-12 inline-flex items-center">
          Library
          <hr className="w-full border-yellow-500 opacity-70 ml-12"></hr>
        </h4> */}
        {installed && (
          <h1
            className="select-none text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-12  text-white inline-flex pl-6 lg:pl-24"
            data-aos="zoom-y-out"
          >
            Shop your <span className="ml-4 hidden lg:flex">favorites</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-tr from-yellow-400  to-orange-600 ml-4 pb-6">
              games
            </span>
          </h1>
        )}
        <div className="px-6 lg:px-24 pt-6">
          {games !== null ? (
            <>
              {games?.length > 0 ? (
                <section className="flex flex-col space-y-6 sm:space-y-0 sm:grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 transition duration-300">
                  {games.map((el, key) => (
                    <motion.div layoutId={el.slug + "_test"}>
                      <GameCard vertical key={key} {...el} />
                    </motion.div>
                  ))}
                </section>
              ) : (
                <div className="h-screen/2 w-full flex flex-col items-center justify-center">
                  <h3 className="text-5xl leading-relaxed items-end inline-flex text-gray-200 font-extrabold">
                    No Games 😰{" "}
                    <span className="text-xl ml-4 mb-4 text-gray-500">yet</span>
                  </h3>
                  <p className="text-lg text-gray-300">
                    Huh, there's a problem.
                  </p>
                </div>
              )}
            </>
          ) : (
            <div className="text-gray-50 flex flex-col">
              <section className="flex flex-col space-y-6 md:space-y-0 sm:grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                {new Array(12).fill(null).map((_, key) => (
                  <Skeleton key={key} />
                ))}
              </section>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Index;
