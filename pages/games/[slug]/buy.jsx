import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Layout } from "../../../components/Layout/Layout";

import firebase from "../../../libs/firebase";

import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

const Buy = ({ slug, title, color, backgroundUrl, logoUrl, price }) => {
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

  const [step, setStep] = useState(0);
  const stepsComponents = [
    <div className="h-full">
      <div className="flex flex-col flex-grow">
        <div className="flex flex-col bg-gray-900 p-4 mt-2 mb-4">
          <div className="inline-flex items-center">
            <div className="w-32 h-32">
              <motion.img
                className="w-full h-full object-contain"
                src={logoUrl}
                alt={title + "-logo"}
                layoutId={slug + "_logo"}
              ></motion.img>
            </div>

            <div className="flex flex-col ml-4 justify-center">
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
              className="inline-flex justify-between items-center"
              id="subtotal"
            >
              <div className="text-sm">Subtotal</div>
              <div className="text-normal font-medium">{price}</div>
            </div>
            <div
              className="inline-flex justify-between items-center"
              id="total-discount"
            >
              <div className="text-sm">Discount</div>
              <div className="text-normal">0.00$</div>
            </div>
            <div
              className="inline-flex justify-between items-center"
              id="total-price"
            >
              <div className="text-sm">Total</div>
              <div className="text-normal font-bold text-yellow-400">
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
            className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-10 placeholder-gray-600 hover:bg-opacity-5 focus:bg-opacity-0 mt-2 border border-black font-bold text-gray-100 focus:text-yellow-500 focus:border-yellow-500 focus:bg-black focus:outline-none transition duration-300"
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
        className="bg-green-600 w-full inline-flex flex-shrink justify-center items-center py-4 text-xl uppercase tracking-widest"
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
      <div className="flex flex-col mt-5 pt-5 border-t border-gray-700">
        <div className="inline-flex">
          <input
            type="text"
            name="number"
            placeholder="Card Number"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-10 placeholder-gray-600 hover:bg-opacity-5 focus:bg-opacity-0 mt-2 border border-black font-bold text-gray-100 focus:text-yellow-500 focus:border-yellow-500 focus:bg-black focus:outline-none transition duration-300"
          />
        </div>
        <div className="inline-flex mt-3">
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            className="w-3/5 px-4 py-3 rounded-lg bg-white bg-opacity-10 placeholder-gray-600 hover:bg-opacity-5 focus:bg-opacity-0 mt-2 border border-black font-bold text-gray-100 focus:text-yellow-500 focus:border-yellow-500 focus:bg-black focus:outline-none transition duration-300"
          />
          <input
            type="text"
            name="cvc"
            placeholder="CVC"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            className="w-1/5 mx-2 px-4 py-3 rounded-lg bg-white bg-opacity-10 placeholder-gray-600 hover:bg-opacity-5 focus:bg-opacity-0 mt-2 border border-black font-bold text-gray-100 focus:text-yellow-500 focus:border-yellow-500 focus:bg-black focus:outline-none transition duration-300"
          />

          <input
            name="expiry"
            placeholder="Expiry"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            className="w-1/5 ml-1 px-4 py-3 rounded-lg bg-white bg-opacity-10 placeholder-gray-600 hover:bg-opacity-5 focus:bg-opacity-0 mt-2 border border-black font-bold text-gray-100 focus:text-yellow-500 focus:border-yellow-500 focus:bg-black focus:outline-none transition duration-300"
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
          className="h-screen w-full opacity-50 bg-black"
          layoutId={slug + "_bg"}
          animate={{ scale: 1 }}
        >
          <img
            className="object-cover h-full w-full opacity-75"
            src={backgroundUrl}
            alt={slug + "-background"}
          ></img>
        </div>
        {/* </motion.div> */}

        <div className="absolute h-full w-full flex justify-center items-center inset-0">
          <motion.div
            initial={{ scale: 0.8, opacity: 0.2 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="w-screen md:w-1/2 xl:w-1/3 bg-gray-800 flex flex-col p-6 text-gray-100"
            style={{ height: "90vh" }}
          >
            <div className="inline-flex items-center justify-between">
              <div className="inline-flex items-center">
                {step === 0 ? (
                  <Link href={`/games/${slug}`}>
                    <svg
                      className="w-10 h-10 border-gray-500 border-r pr-4 mr-4 cursor-pointer"
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
                    className="w-10 h-10 border-gray-500 border-r pr-4 mr-4 cursor-pointer"
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
                    <span className="font-bold text-white ml-2">{title}</span>
                  </p>
                </div>

                {/* Logo ? */}
              </div>
              <svg
                className="w-9 h-9 text-gray-600"
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
            <section className="mt-4">{stepsComponents[step]}</section>
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

  return { props: { slug, ...game.data(), specifications } };
};

export default Buy;
