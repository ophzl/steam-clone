import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MD5 } from "../../libs/md5";
import { Dropdown } from "../Dropdown/Dropdown";
import { useAuth } from "../../hooks/useAuth";
import { useInstall } from "../../hooks/useInstall";
import { Avatar } from "../Icons/Avatar";
import { useRouter } from "next/router";
import { Chevron } from "../Icons/Chevron";
import { useTheme } from "../../hooks/useTheme";

export const Navbar = () => {
  const [top, setTop] = useState(true);

  const { user } = useAuth();
  const { theme } = useTheme();
  const { installed } = useInstall();
  const router = useRouter();

  const [authOpen, setAuthOpen] = useState(false);

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-30 bg-opacity-75 text-white transition duration-300 ease-in-out ${
        !top && `${theme} blur shadow-lg`
      }`}
    >
      <div className="max-w-6xl px-8 py-3 mx-auto md:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="inline-flex items-center flex-shrink-0 mr-4 space-x-3">
            {/* Logo */}
            <span className="hidden md:block">
              <Link href="/" aria-label="Vapor" scroll={false}>
                <motion.img
                  layoutId="app_logo"
                  className="h-12 cursor-pointer"
                  src="https://emojis.wiki/emoji-pics/apple/dashing-away-apple.png"
                  alt="Vapor"
                />
              </Link>
            </span>
            <span className="block md:hidden">
              <Link href="/" aria-label="Vapor">
                <motion.img
                  layoutId="app_logo_sm"
                  className="h-12 cursor-pointer"
                  src="https://emojis.wiki/emoji-pics/apple/dashing-away-apple.png"
                  alt="Vapor"
                />
              </Link>
            </span>
            {router.pathname !== "/" && !router.pathname.includes("/library") && (
              <li
                className={`flex items-center justify-center w-12 h-12 ${
                  theme === "bg-black" || top
                    ? "text-gray-100 hover:bg-gray-900 hover:bg-opacity-50 hover:text-yellow-400"
                    : "text-gray-800 hover:bg-gray-300 hover:bg-opacity-50 hover:text-gray-600"
                } transition duration-300 ease-in-out rounded-lg cursor-pointer `}
                onClick={() => router.back()}
              >
                <Chevron.Left className="w-8 h-8" shadow />
              </li>
            )}
          </div>

          {/* Site navigation */}
          {/* TODO: fix galaxy fold display */}
          <nav className="flex flex-grow">
            <ul className="flex flex-wrap items-center justify-end flex-grow md:space-x-5">
              {!installed && (
                <li className="hidden md:block">
                  <Link href="/install">
                    <a
                      className={`flex items-center px-5 py-3 font-medium ${
                        theme === "bg-black" || top
                          ? "text-gray-100"
                          : "text-gray-800"
                      } transition duration-300 ease-in-out rounded-lg hover:text-gray-100 hover:bg-green-600`}
                    >
                      <svg
                        className="w-6 h-6 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Install
                    </a>
                  </Link>
                </li>
              )}
              {user ? (
                <li>
                  <motion.div
                    onClick={() => setAuthOpen(!authOpen)}
                    className="w-12 h-12 cursor-pointer"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Avatar.Me className="w-12 h-12" />
                  </motion.div>

                  {authOpen && <Dropdown.Auth isOpen={authOpen} />}
                </li>
              ) : (
                <>
                  <li>
                    <Link href="/auth/login">
                      <a
                        className={`flex items-center px-5 py-3 font-medium ${
                          theme === "bg-black" || top
                            ? "text-gray-100"
                            : "text-gray-800"
                        } transition duration-300 ease-in-out bg-black rounded-lg hover:text-gray-800 hover:bg-yellow-500`}
                      >
                        Sign in
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/auth/register">
                      <a
                        className={`inline-flex items-center px-5 py-3 ${
                          theme === "bg-black" || top
                            ? "text-gray-100"
                            : "text-gray-800"
                        } transition duration-300 bg-black rounded-lg hover:text-gray-800 hover:bg-yellow-500`}
                      >
                        <span>Sign up</span>
                        <svg
                          className="hidden w-3 h-3 ml-2 -mr-1 fill-current md:block"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                            fillRule="nonzero"
                          />
                        </svg>
                      </a>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
