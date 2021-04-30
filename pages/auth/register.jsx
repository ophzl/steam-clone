import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";

export default function Register() {
  const { register, signinWithGoogle } = useAuth();
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  return (
    <section className="bg-black flex flex-col md:flex-row h-screen items-center">
      <div className="bg-black hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
        <img
          src="https://images6.alphacoders.com/483/thumb-1920-483285.jpg"
          //   src="https://source.unsplash.com/random"
          alt=""
          className="w-full h-full object-cover opacity-75"
          style={{ WebkitAppRegion: "drag" }}
        />
        <div
          className="p-16 flex flex-col absolute top-0 left-0 z-50"
          style={{ WebkitAppRegion: "no-drag" }}
        >
          <Link href="/" aria-label="Vapor">
            <motion.svg
              layoutId="app_logo"
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16 cursor-pointer text-white "
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M9.406 17.183c.431-1.025-.05-2.206-1.076-2.637l-1.762-.741c.331-.125.654-.182.982-.183 1.518 0 2.765 1.236 2.779 2.754.014 1.538-1.217 2.792-2.753 2.806-1.159.005-2.138-.684-2.571-1.665l1.763.741c1.027.432 2.207-.05 2.638-1.075zm9.594-17.183h-14c-2.761 0-5 2.239-5 5v6.043l5.585 2.349c.596-.39 1.283-.599 2.046-.583l3.017-4.221c.048-2.541 2.122-4.588 4.674-4.588 2.582 0 4.678 2.094 4.678 4.677 0 2.581-2.098 4.703-4.732 4.675l-4.115 3.067-.009.004c-.012 1.962-1.593 3.558-3.561 3.577-1.777.015-3.234-1.249-3.56-2.895l-4.023-1.692v3.587c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3.678 11.857c-1.752 0-3.179-1.427-3.179-3.18 0-1.753 1.427-3.179 3.179-3.179 1.754 0 3.179 1.426 3.179 3.179s-1.425 3.18-3.179 3.18zm0-.779c1.325 0 2.4-1.077 2.4-2.401 0-1.323-1.075-2.401-2.4-2.401-1.324 0-2.401 1.078-2.401 2.401 0 1.324 1.077 2.401 2.401 2.401z" />
            </motion.svg>
          </Link>
        </div>
      </div>
      <div className="bg-black w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-2/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
        <motion.div className="w-full h-100" layoutId="auth_form">
          <div className="mx-auto w-full flex md:hidden">
            <Link href="/" aria-label="Vapor">
              <motion.svg
                layoutId="app_logo_sm"
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16 cursor-pointer text-white "
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M9.406 17.183c.431-1.025-.05-2.206-1.076-2.637l-1.762-.741c.331-.125.654-.182.982-.183 1.518 0 2.765 1.236 2.779 2.754.014 1.538-1.217 2.792-2.753 2.806-1.159.005-2.138-.684-2.571-1.665l1.763.741c1.027.432 2.207-.05 2.638-1.075zm9.594-17.183h-14c-2.761 0-5 2.239-5 5v6.043l5.585 2.349c.596-.39 1.283-.599 2.046-.583l3.017-4.221c.048-2.541 2.122-4.588 4.674-4.588 2.582 0 4.678 2.094 4.678 4.677 0 2.581-2.098 4.703-4.732 4.675l-4.115 3.067-.009.004c-.012 1.962-1.593 3.558-3.561 3.577-1.777.015-3.234-1.249-3.56-2.895l-4.023-1.692v3.587c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3.678 11.857c-1.752 0-3.179-1.427-3.179-3.18 0-1.753 1.427-3.179 3.179-3.179 1.754 0 3.179 1.426 3.179 3.179s-1.425 3.18-3.179 3.18zm0-.779c1.325 0 2.4-1.077 2.4-2.401 0-1.323-1.075-2.401-2.4-2.401-1.324 0-2.401 1.078-2.401 2.401 0 1.324 1.077 2.401 2.401 2.401z" />
              </motion.svg>
            </Link>
          </div>
          <h1 className="text-xl md:text-2xl text-white font-bold leading-tight mt-12">
            Create an account
          </h1>
          <form className="mt-6" action="#" method="POST">
            <div className="mt-4">
              <label className="block text-gray-100">Username</label>
              <input
                type="text"
                placeholder="johndoe1"
                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-10 placeholder-gray-600 hover:bg-opacity-5 focus:bg-opacity-0 mt-2 border border-black font-bold text-gray-100 focus:text-yellow-500 focus:border-yellow-500 focus:bg-black focus:outline-none transition duration-300"
                autoFocus
                required
                onChange={(e) => setPseudo(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-100">Email Address</label>
              <input
                type="email"
                placeholder="johndoe@mail.com"
                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-10 placeholder-gray-600 hover:bg-opacity-5 focus:bg-opacity-0 mt-2 border border-black font-bold text-gray-100 focus:text-yellow-500 focus:border-yellow-500 focus:bg-black focus:outline-none transition duration-300"
                autoFocus
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mt-4 inline-flex w-full">
              <div className="w-1/2 pr-1">
                <label className="block text-gray-100">Password</label>
                <input
                  type="password"
                  placeholder="p@ssw0rd!"
                  minLength={6}
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-10 placeholder-gray-600 hover:bg-opacity-5 focus:bg-opacity-0 mt-2 border border-black font-bold text-gray-100 focus:text-yellow-500 focus:border-yellow-500 focus:bg-black focus:outline-none transition duration-300"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="w-1/2 pl-1">
                <label className="block text-gray-100">
                  Password confirmation
                </label>
                <input
                  type="password"
                  placeholder="p@ssw0rd!"
                  minLength={6}
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-10 placeholder-gray-600 hover:bg-opacity-5 focus:bg-opacity-0 mt-2 border border-black font-bold text-gray-100 focus:text-yellow-500 focus:border-yellow-500 focus:bg-black focus:outline-none transition duration-300"
                  required
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
              </div>
            </div>
            <div className="text-right mt-2">
              <Link href="/auth/forgot">
                <a className="text-sm font-semibold text-gray-200 hover:text-yellow-700 focus:text-yellow-700">
                  Forgot Password?
                </a>
              </Link>
            </div>
            <button
              onClick={() =>
                password === passwordConfirmation && register(email, password, pseudo)
              }
              type="button"
              className="w-full block bg-yellow-500 hover:bg-yellow-400 focus:bg-yellow-400 text-white font-semibold rounded-lg px-4 py-3 mt-6 transition duration-300"
            >
              Create your account
            </button>
          </form>
          <hr className="my-6 border-gray-800 w-full" />
          <button
            onClick={signinWithGoogle}
            type="button"
            className="w-full block bg-white bg-opacity-10 hover:bg-opacity-5 focus:bg-opacity-0 text-gray-100 font-semibold rounded-lg px-4 py-3 border border-black transition duration-300"
          >
            <div className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                className="w-6 h-6"
                viewBox="0 0 48 48"
              >
                <defs>
                  <path
                    id="a"
                    d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                  />
                </defs>
                <clipPath id="b">
                  <use xlinkHref="#a" overflow="visible" />
                </clipPath>
                <path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
                <path
                  clipPath="url(#b)"
                  fill="#EA4335"
                  d="M0 11l17 13 7-6.1L48 14V0H0z"
                />
                <path
                  clipPath="url(#b)"
                  fill="#34A853"
                  d="M0 37l30-23 7.9 1L48 0v48H0z"
                />
                <path
                  clipPath="url(#b)"
                  fill="#4285F4"
                  d="M48 48L17 24l-4-3 35-10z"
                />
              </svg>
              <span className="ml-4">Log in with Google</span>
            </div>
          </button>
          <p className="mt-8 text-gray-300">
            Already have an account?
            <Link href="/auth/login">
              <a className="text-yellow-500 hover:text-yellow-700 font-semibold transition duration-300 ml-2">
                Log into your account
              </a>
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
