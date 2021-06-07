import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Layout } from "../../../components/Layout/Layout";

import firebase from "../../../libs/firebase";

import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { useAuth } from "../../../hooks/useAuth";
import { useRouter } from "next/router";

const Buy = ({ slug, title, color, backgroundUrl, logoUrl, price }) => {
  const { user } = useAuth();
  const router = useRouter();
  const [card, setCard] = useState({
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCard({ ...card, [name]: value });
  };

  const handleInputFocus = (e) => {
    setCard({ ...card, focus: e.target.name });
  };

  const addToLibrary = async () => {
    const game = await firebase.firestore().collection("games").doc(slug).get();

    const gameInLibrary = await firebase
      .firestore()
      .collection("users")
      .doc(user.uid)
      .collection("library")
      .doc(slug)
      .set({ ...game.data(), slug, timePlayed: 0 });

    router.push(`/games/${slug}`);
  };

  const [step, setStep] = useState(0);
  const stepsComponents = [
    <div className="h-full">
      <div className="flex flex-col flex-grow">
        <div className="flex flex-col p-4 mt-2 mb-4 bg-gray-900">
          <div className="inline-flex items-center">
            <div className="w-32 h-32">
              <motion.img
                className="object-contain w-full h-full"
                src={logoUrl}
                alt={title + "-logo"}
                layoutId={slug + "_logo"}
              ></motion.img>
            </div>

            <div className="flex flex-col justify-center ml-4">
              <h5 className="text-2xl font-semibold">{title}</h5>
              <div className="inline-flex space-x-2">
                <span className="bg-gray-800 px-2 py-0.5 text-xs">PC</span>
                <span className="bg-gray-800 px-2 py-0.5 text-xs">-0%</span>
              </div>
            </div>
          </div>
          <div className="inline-flex mt-3">
            <img
              src="https://i0.wp.com/www.pedagojeux.fr/wp-content/uploads/2016/05/PEGI_7_PDGJ.png"
              alt="pegi7"
              className="w-16 h-16"
            />
            <div className="flex flex-col ml-2">
              <div className="text-xs">Légère violence, Violence implicite</div>
              <div className="text-xs">Les utilisateurs interagissent</div>
            </div>
          </div>
        </div>

        <div className="summary">
          <div className="flex flex-col">
            <div
              className="inline-flex items-center justify-between"
              id="subtotal"
            >
              <div className="text-sm">Subtotal</div>
              <div className="font-medium text-normal">{price}</div>
            </div>
            <div
              className="inline-flex items-center justify-between"
              id="total-discount"
            >
              <div className="text-sm">Discount</div>
              <div className="text-normal">0.00$</div>
            </div>
            <div
              className="inline-flex items-center justify-between"
              id="total-price"
            >
              <div className="text-sm">Total</div>
              <div className="font-bold text-yellow-400 text-normal">
                {price}
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* <div className="discount-code">
              <div className="discount-code__empty">
                <form className="discount-code__code-container">
                  <input
                    type="text"
                    className="discount-code__input"
                    placeholder="Saisissez le code de réduction"
                    name="discountCodeInput"
                    defaultValue
                  />
                </form>
                <div />
              </div>
            </div> */}
          <div className="my-3">
            <h2 className="text-2xl ">Payment method</h2>
            <div></div>
          </div>
        </div>
        <div className="password-prompt">
          <input
            type="password"
            className="w-full px-4 py-2 mt-2 font-bold text-gray-100 placeholder-gray-600 transition duration-300 bg-white border border-black rounded-lg bg-opacity-10 hover:bg-opacity-5 focus:bg-opacity-0 focus:text-yellow-500 focus:border-yellow-500 focus:bg-black focus:outline-none"
            name="passwordPromptInput"
            placeholder="Enter your password"
          />
        </div>
      </div>
      <motion.button
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="inline-flex items-center justify-center flex-shrink w-full py-4 text-xl tracking-widest uppercase bg-green-600"
        onClick={() => setStep(1)}
      >
        Next
      </motion.button>
    </div>,
    <div className="flex flex-col">
      <div className="inline-flex justify-center w-full">
        <Cards
          cvc={card.cvc}
          expiry={card.expiry}
          focused={card.focus}
          name={card.name}
          number={card.number}
        />
      </div>
      <div className="flex flex-col pt-5 mt-5 border-t border-gray-700">
        <div className="inline-flex">
          <input
            type="text"
            name="number"
            placeholder="Card Number"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            className="w-full px-4 py-3 mt-2 font-bold text-gray-100 placeholder-gray-600 transition duration-300 bg-white border border-black rounded-lg bg-opacity-10 hover:bg-opacity-5 focus:bg-opacity-0 focus:text-yellow-500 focus:border-yellow-500 focus:bg-black focus:outline-none"
          />
        </div>
        <div className="inline-flex mt-3">
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            className="w-3/5 px-4 py-3 mt-2 font-bold text-gray-100 placeholder-gray-600 transition duration-300 bg-white border border-black rounded-lg bg-opacity-10 hover:bg-opacity-5 focus:bg-opacity-0 focus:text-yellow-500 focus:border-yellow-500 focus:bg-black focus:outline-none"
          />
          <input
            type="text"
            name="cvc"
            placeholder="CVC"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            className="w-1/5 px-4 py-3 mx-2 mt-2 font-bold text-gray-100 placeholder-gray-600 transition duration-300 bg-white border border-black rounded-lg bg-opacity-10 hover:bg-opacity-5 focus:bg-opacity-0 focus:text-yellow-500 focus:border-yellow-500 focus:bg-black focus:outline-none"
          />

          <input
            name="expiry"
            placeholder="Expiry"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            className="w-1/5 px-4 py-3 mt-2 ml-1 font-bold text-gray-100 placeholder-gray-600 transition duration-300 bg-white border border-black rounded-lg bg-opacity-10 hover:bg-opacity-5 focus:bg-opacity-0 focus:text-yellow-500 focus:border-yellow-500 focus:bg-black focus:outline-none"
          />
        </div>
      </div>
    </div>,
  ];

  return (
    <Layout noPadding>
      <section className="relative w-full h-full">
        {/* <motion.div */}
        <div
          className="w-full h-screen bg-black opacity-50"
          layoutId={slug + "_bg"}
          animate={{ scale: 1 }}
        >
          <img
            className="object-cover w-full h-full opacity-75"
            src={backgroundUrl}
            alt={slug + "-background"}
          ></img>
        </div>
        {/* </motion.div> */}

        <div className="absolute inset-0 flex items-center justify-center w-full h-full">
          <motion.div
            initial={{ scale: 0.8, opacity: 0.2 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col w-screen p-6 mt-6 text-gray-100 bg-gray-800 md:w-1/2 xl:w-1/3"
            style={{ height: "90vh" }}
          >
            <div className="inline-flex items-center justify-between">
              <div className="inline-flex items-center">
                {step === 0 ? (
                  <Link href={`/games/${slug}`}>
                    <svg
                      className="w-10 h-10 pr-4 mr-4 border-r border-gray-500 cursor-pointer"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </Link>
                ) : (
                  <svg
                    className="w-10 h-10 pr-4 mr-4 border-r border-gray-500 cursor-pointer"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => setStep(step - 1)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                )}
                <div className="flex flex-col">
                  <p className="text-2xl">
                    Buy
                    <span className="ml-2 font-bold text-white">{title}</span>
                  </p>
                </div>

                {/* Logo ? */}
              </div>
              <svg
                className="text-gray-600 w-9 h-9"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </div>
            {/* <section className="mt-4">{stepsComponents[step]}</section> */}
            <section className="flex items-end h-full my-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={addToLibrary}
                className="inline-flex items-center justify-center flex-shrink w-full py-4 text-xl tracking-widest uppercase bg-green-600"
              >
                Add to your library
              </motion.button>
            </section>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const { slug } = ctx.query;
  const gameRef = firebase.firestore().collection("games").doc(slug);
  const game = await gameRef.get();

  return { props: { slug, ...game.data() } };
}

export default Buy;
