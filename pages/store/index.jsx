import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { GameCard } from "../../components/Game/GameCard";
import { Layout } from "../../components/Layout/Layout";
import { Skeleton } from "../../components/Skeleton/Skeleton";
import { useTheme } from "../../hooks/useTheme";
import firebase from "../../libs/firebase";

function Index() {
  const { theme } = useTheme();
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
        <h1
          className={`inline-flex pl-6 mb-12 text-5xl font-extrabold tracking-tighter ${
            theme === "bg-black" ? "text-white" : "text-gray-800"
          } select-none md:text-6xl leading-tighter lg:pl-24`}
        >
          Shop your <span className="hidden ml-4 lg:flex">favorites</span>
          <span className="pb-6 ml-4 text-transparent bg-clip-text bg-gradient-to-tr from-yellow-400 to-orange-600">
            games
          </span>
        </h1>
        <div className="px-6 pt-6 lg:px-24">
          {games !== null ? (
            <>
              {games?.length > 0 ? (
                <section className="flex flex-col grid-cols-3 gap-4 space-y-6 transition duration-300 sm:space-y-0 sm:grid lg:grid-cols-4 xl:grid-cols-6">
                  {games.map((el, key) => (
                    <motion.div layoutId={el.slug + "_test"}>
                      <GameCard vertical key={key} {...el} />
                    </motion.div>
                  ))}
                </section>
              ) : (
                <div className="flex flex-col items-center justify-center w-full h-screen/2">
                  <h3 className="inline-flex items-end text-5xl font-extrabold leading-relaxed text-gray-200">
                    No Games 😰
                    <span className="mb-4 ml-4 text-xl text-gray-500">yet</span>
                  </h3>
                  <p className="text-lg text-gray-300">
                    Huh, there's a problem.
                  </p>
                </div>
              )}
            </>
          ) : (
            <div className="flex flex-col text-gray-50">
              <section className="flex flex-col grid-cols-3 gap-4 space-y-6 md:space-y-0 sm:grid lg:grid-cols-4 xl:grid-cols-6">
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
