import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Social } from "../../../components/Game/Social";
import { Specifications } from "../../../components/Game/Specifications";
import { SubInfo } from "../../../components/Game/SubInfo";
import { Layout } from "../../../components/Layout/Layout";
import { useAuth } from "../../../hooks/useAuth";

import firebase from "../../../libs/firebase";

const GamePage = ({
  slug,
  title,
  color,
  backgroundUrl,
  logoUrl,
  price,
  description,
  specifications,
  releaseDate,
  developper,
  publisher,
  tags
}) => {
  const { library } = useAuth();
  const gameIndex = library?.findIndex((el) => el.slug === slug);
  const [owned, setOwned] = useState(false);
  const { timePlayed } = library
    ? library[gameIndex]
      ? library[gameIndex]
      : { timePlayed: 0 }
    : { timePlayed: null };

  useEffect(
    () => setOwned(library?.findIndex((el) => el.slug === slug) !== -1),
    [slug]
  );

  return (
    <Layout>
      <section className="relative w-full overflow-hidden h-96 md:h-auto md:min-h-96">
        <motion.div
          className={`bg-gradient-to-b from-${color}-400 h-screen/2 xl:h-screen 3xl:h-screen/2 to-black w-full overflow-hidden`}
          layoutId={slug + "_bg"}
        >
          <img
            className="object-cover w-full h-full md:h-auto xl:h-screen"
            src={backgroundUrl}
            alt={slug + "-background"}
          ></img>
          <div className="absolute bottom-0 left-0 flex flex-col p-5">
            <motion.img
              layoutId={slug + "_logo"}
              className="max-h-24 md:w-auto md:h-full md:max-h-32"
              src={logoUrl}
              alt={slug + "-logo"}
            ></motion.img>
          </div>
          {owned && (
            <div className="absolute inset-0 flex items-center justify-center invisible md:visible">
              <motion.button
                // animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                // transition={{ duration: 1 }}
                whileTap={{ scale: 0.9 }}
                className={`h-32 w-32  bg-opacity-75 blur-lg rounded-full -mt-16 flex justify-center items-center focus:outline-none`}
              >
                <svg
                  version="1.1"
                  id="play"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 100 100"
                  enableBackground="new 0 0 100 100"
                  xmlSpace="preserve"
                  className="w-full h-full"
                >
                  <path
                    className="stroke-solid"
                    fill="none"
                    stroke="white"
                    d="M49.9,2.5C23.6,2.8,2.1,24.4,2.5,50.4C2.9,76.5,24.7,98,50.3,97.5c26.4-0.6,47.4-21.8,47.2-47.7C97.3,23.7,75.7,2.3,49.9,2.5"
                  />
                  <path
                    className="stroke-dotted"
                    fill="none"
                    stroke="white"
                    d="M49.9,2.5C23.6,2.8,2.1,24.4,2.5,50.4C2.9,76.5,24.7,98,50.3,97.5c26.4-0.6,47.4-21.8,47.2-47.7C97.3,23.7,75.7,2.3,49.9,2.5"
                  />
                  <path
                    className="icon"
                    fill="white"
                    d="M38,69c-1,0.5-1.8,0-1.8-1.1V32.1c0-1.1,0.8-1.6,1.8-1.1l34,18c1,0.5,1,1.4,0,1.9L38,69z"
                  />
                </svg>
              </motion.button>
            </div>
          )}
        </motion.div>
      </section>

      <motion.section
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className={`mt-6 flex flex-col md:grid grid-cols-8 gap-4 md:h-24 mx-6`}
      >
        <div className="flex flex-col justify-center w-full col-span-3 py-4 pl-8 bg-gray-800 bg-opacity-50">
          <h4 className="text-2xl font-light tracking-wider text-gray-200">
            {title}
          </h4>
          {owned ? (
            <p className="inline-flex items-center mt-1 text-gray-600">
              Time played:
              <span className={`text-${color}-500 font-medium ml-2`}>
                {timePlayed} hours
              </span>
            </p>
          ) : (
            <p className="inline-flex items-center mt-1 text-gray-600">
              <span className={`text-${color}-500 font-medium mr-2`}>5</span>
              Friends that have {title}
            </p>
          )}
        </div>
        <div
          className={
            owned
              ? "hidden md:flex justify-end w-full col-span-5"
              : "w-full col-span-5"
          }
        >
          {owned ? (
            <div className="flex items-center justify-end h-full md:pr-16">
              <motion.button
                // animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                // transition={{ duration: 1 }}
                whileTap={{ scale: 0.9 }}
                className="inline-flex items-center px-6 py-3 text-lg font-medium tracking-wider text-white uppercase bg-green-700 focus:outline-none"
              >
                <svg
                  className="w-6 h-6 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
                Play
              </motion.button>
            </div>
          ) : (
            <div className="flex flex-row items-center justify-end h-full md:pr-16">
              <p className="mr-6 text-xl text-gray-400">
                Price:
                <span className={`font-semibold text-${color}-400 ml-2`}>
                  {price}
                </span>
              </p>

              <Link href={`/games/${slug}/buy`}>
                <motion.button
                  // animate={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  // transition={{ duration: 1 }}
                  whileTap={{ scale: 0.9 }}
                  className="inline-flex items-center px-6 py-3 text-lg font-medium tracking-wider text-white uppercase bg-gray-700 focus:outline-none"
                >
                  <svg
                    className="w-6 h-6 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Purchase
                </motion.button>
              </Link>
            </div>
          )}
        </div>
      </motion.section>

      <section className="mt-6 mb-3 text-gray-200">
        <div className="flex flex-col grid-cols-2 gap-6 mx-6 md:grid lg:grid-cols-3 xl:grid-cols-4">
          <SubInfo
            developper={developper}
            publisher={publisher}
            releaseDate={releaseDate}
            img={backgroundUrl}
            color={color}
            tags={tags}
            description={description}
          />
          <div className="row-span-2">
            <Social game={title} />
          </div>
          {specifications.minimal && (
            <Specifications
              title="Minimal specifications"
              // os="win"
              // arch="Système d'exploitation et processeur 64 bits nécessaires"
              // osDetails="Windows 7 or 10"
              // processor="Intel Core i5-3570K or AMD FX-8310"
              // ram="8 GB de mémoire"
              // gpu="NVIDIA GeForce GTX 780 or AMD Radeon RX 470"
              // directX="Version 12"
              // diskSpace="70 GB d'espace disque disponible"
              // more="In this game you
              // will encounter a variety of visual effects that may provide
              // seizures or loss of consciousness in a minority of people. If you
              // or someone you know experiences any of the above symptoms while
              // playing, stop and seek medical attention immediately."
              color={color}
              {...specifications.minimal}
            />
          )}
          {specifications.recommended && (
            <Specifications
              title="Recommended specifications"
              // os="win"
              // arch="Système d'exploitation et processeur 64 bits nécessaires"
              // osDetails="Windows 10"
              // processor="Intel Core i7-4790 or AMD Ryzen 3 3200G"
              // ram="12 GB de mémoire"
              // gpu="GTX 1060 6GB / GTX 1660 Super or Radeon RX 590"
              // directX="Version 12"
              // diskSpace="70 GB d'espace disque disponible"
              // more="SSD recommended"
              color={color}
              {...specifications.recommended}
            />
          )}
        </div>
      </section>
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const { slug } = ctx.query;
  const gameRef = firebase.firestore().collection("games").doc(slug);
  const game = await gameRef.get();

  const minimalSpecs = await gameRef
    .collection("specifications")
    .doc("minimal")
    .get();
  const recommendedSpecs = await gameRef
    .collection("specifications")
    .doc("recommended")
    .get();
  const specifications = {
    minimal: minimalSpecs.exists ? minimalSpecs.data() : null,
    recommended: recommendedSpecs.exists ? recommendedSpecs.data() : null,
  };

  return { props: { slug, ...game.data(), specifications } };
}

export default GamePage;