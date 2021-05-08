import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useInstall } from "../../hooks/useInstall";

export default function Login() {
  const { signin, signinWithGoogle } = useAuth();
  const { installed } = useInstall();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className="flex flex-col items-center h-screen bg-black md:flex-row">
      <div className="hidden w-full h-screen bg-black lg:block md:w-1/2 xl:w-2/3">
        <img
          src="https://gpstatic.com/acache/47/27/1/fr/s19-bef9c17706f2412bd3b1422cc020dec8.jpg"
          //   src="https://source.unsplash.com/random"
          alt=""
          className="object-cover w-full h-full opacity-75"
          style={{ WebkitAppRegion: "drag" }}
        />
        <div
          className="absolute top-0 left-0 z-50 flex flex-col p-16"
          style={{ WebkitAppRegion: "no-drag" }}
        >
          <Link href="/" aria-label="Vapor">
            <motion.img
              layoutId="app_logo"
              className="h-16 cursor-pointer"
              src="https://emojis.wiki/emoji-pics/apple/dashing-away-apple.png"
              alt="Vapor"
            />
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center w-full h-screen px-6 bg-black md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 lg:px-16 xl:px-12">
        <motion.div className="w-full h-100" layoutId="auth_form">
          <div className="flex w-full mx-auto lg:hidden">
            <Link href="/" aria-label="Vapor">
              <motion.img
                layoutId="app_logo_sm"
                className="h-16 cursor-pointer"
                src="https://emojis.wiki/emoji-pics/apple/dashing-away-apple.png"
                alt="Vapor"
              />
            </Link>
          </div>
          <h1 className="mt-12 text-xl font-bold leading-tight text-white md:text-2xl">
            Log in to your account
          </h1>
          <form className="mt-6" action="#" method="POST">
            <div>
              <label className="block text-gray-100">Email Address</label>
              <input
                type="email"
                placeholder="johndoe@mail.com"
                className="w-full px-4 py-3 mt-2 font-bold text-gray-100 placeholder-gray-600 transition duration-300 bg-white border border-black rounded-lg bg-opacity-10 hover:bg-opacity-5 focus:bg-opacity-0 focus:text-yellow-500 focus:border-yellow-500 focus:bg-black focus:outline-none"
                autoFocus
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-100">Password</label>
              <input
                type="password"
                placeholder="p@ssw0rd!"
                minLength={6}
                className="w-full px-4 py-3 mt-2 font-bold text-gray-100 placeholder-gray-600 transition duration-300 bg-white border border-black rounded-lg bg-opacity-10 hover:bg-opacity-5 focus:bg-opacity-0 focus:text-yellow-500 focus:border-yellow-500 focus:bg-black focus:outline-none"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mt-2 text-right">
              <Link href="/auth/forgot">
                <a className="text-sm font-semibold text-gray-200 hover:text-yellow-700 focus:text-yellow-700">
                  Forgot Password?
                </a>
              </Link>
            </div>
            <button
              onClick={() => signin(email, password)}
              type="submit"
              className="block w-full px-4 py-3 mt-6 font-semibold text-white transition duration-300 bg-yellow-500 rounded-lg hover:bg-yellow-400 focus:bg-yellow-400"
            >
              Log In
            </button>
          </form>
          <hr className="w-full my-6 border-gray-800" />
          <button
            disabled={installed}
            onClick={() => signinWithGoogle("/")}
            type="button"
            className="block w-full px-4 py-3 font-semibold text-gray-100 transition duration-300 bg-white border border-black rounded-lg disabled:opacity-50 bg-opacity-10 hover:bg-opacity-5 focus:bg-opacity-0"
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
            Need an account?
            <Link href="/auth/register">
              <a className="ml-2 font-semibold text-yellow-500 transition duration-300 hover:text-yellow-700">
                Create an account
              </a>
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
