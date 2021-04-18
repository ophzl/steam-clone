import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MD5 } from "../../libs/md5";
import { Dropdown } from "semantic-ui-react";

export const Navbar = () => {
  const [top, setTop] = useState(true);

  const [installed, setInstalled] = useState(false);
  const [auth, setAuth] = useState({
    uuid: "floriaaan",
    fullname: "Florian Leroux",
    email: "florian.leroux3@laposte.net",
    friends: [{ uuid: "ophzl", fullname: "oph@zl.fr" }],
  });

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
        !top && "bg-black blur shadow-lg"
      }`}
    >
      <div className="max-w-6xl mx-auto px-8 md:px-12 py-3">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <span className="hidden md:block">
              <Link href="/" aria-label="Vapor" scroll={false}>
                <motion.svg
                  layoutId="app_logo"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12 cursor-pointer text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M9.406 17.183c.431-1.025-.05-2.206-1.076-2.637l-1.762-.741c.331-.125.654-.182.982-.183 1.518 0 2.765 1.236 2.779 2.754.014 1.538-1.217 2.792-2.753 2.806-1.159.005-2.138-.684-2.571-1.665l1.763.741c1.027.432 2.207-.05 2.638-1.075zm9.594-17.183h-14c-2.761 0-5 2.239-5 5v6.043l5.585 2.349c.596-.39 1.283-.599 2.046-.583l3.017-4.221c.048-2.541 2.122-4.588 4.674-4.588 2.582 0 4.678 2.094 4.678 4.677 0 2.581-2.098 4.703-4.732 4.675l-4.115 3.067-.009.004c-.012 1.962-1.593 3.558-3.561 3.577-1.777.015-3.234-1.249-3.56-2.895l-4.023-1.692v3.587c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3.678 11.857c-1.752 0-3.179-1.427-3.179-3.18 0-1.753 1.427-3.179 3.179-3.179 1.754 0 3.179 1.426 3.179 3.179s-1.425 3.18-3.179 3.18zm0-.779c1.325 0 2.4-1.077 2.4-2.401 0-1.323-1.075-2.401-2.4-2.401-1.324 0-2.401 1.078-2.401 2.401 0 1.324 1.077 2.401 2.401 2.401z" />
                </motion.svg>
              </Link>
            </span>
            <span className="block md:hidden">
              <Link href="/" aria-label="Vapor">
                <motion.svg
                  layoutId="app_logo_sm"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12 cursor-pointer text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M9.406 17.183c.431-1.025-.05-2.206-1.076-2.637l-1.762-.741c.331-.125.654-.182.982-.183 1.518 0 2.765 1.236 2.779 2.754.014 1.538-1.217 2.792-2.753 2.806-1.159.005-2.138-.684-2.571-1.665l1.763.741c1.027.432 2.207-.05 2.638-1.075zm9.594-17.183h-14c-2.761 0-5 2.239-5 5v6.043l5.585 2.349c.596-.39 1.283-.599 2.046-.583l3.017-4.221c.048-2.541 2.122-4.588 4.674-4.588 2.582 0 4.678 2.094 4.678 4.677 0 2.581-2.098 4.703-4.732 4.675l-4.115 3.067-.009.004c-.012 1.962-1.593 3.558-3.561 3.577-1.777.015-3.234-1.249-3.56-2.895l-4.023-1.692v3.587c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3.678 11.857c-1.752 0-3.179-1.427-3.179-3.18 0-1.753 1.427-3.179 3.179-3.179 1.754 0 3.179 1.426 3.179 3.179s-1.425 3.18-3.179 3.18zm0-.779c1.325 0 2.4-1.077 2.4-2.401 0-1.323-1.075-2.401-2.4-2.401-1.324 0-2.401 1.078-2.401 2.401 0 1.324 1.077 2.401 2.401 2.401z" />
                </motion.svg>
              </Link>
            </span>
          </div>

          {/* Site navigation */}
          {/* TODO: fix galaxy fold display */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center md:space-x-5">
              {!installed && (
                <li className="hidden md:block">
                  <Link href="/install">
                    <a className="font-medium text-gray-200 hover:text-gray-100 px-5 py-3 flex items-center transition hover:bg-green-600  duration-300 ease-in-out">
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
              {auth ? (
                <li>
                  <Dropdown
                    trigger={
                      <img
                        src={`https://www.gravatar.com/avatar/${MD5(
                          auth.email
                        )}`}
                        className="w-12 h-12 rounded-full object-cover"
                      ></img>
                    }
                    options={[
                      { key: "profile", text: "Your Profile" },
                      { key: "stars", text: "Your Stars" },
                      { key: "explore", text: "Explore" },
                    ]}
                  />
                </li>
              ) : (
                <>
                  <li>
                    <Link href="/auth/login">
                      <a className="font-medium text-gray-200 hover:text-gray-100 px-5 py-3 flex items-center transition bg-black border-black hover:border-yellow-500 border-b duration-300 ease-in-out">
                        Sign in
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/auth/register">
                      <a className="inline-flex items-center px-5 py-3  text-gray-200 bg-black border-black hover:border-yellow-500 border-b duration-300 transition">
                        <span>Sign up</span>
                        <svg
                          className="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1 hidden md:block"
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
