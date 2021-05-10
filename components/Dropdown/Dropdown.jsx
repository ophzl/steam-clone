import { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { MD5 } from "../../libs/md5";
import { Chevron } from "../Icons/Chevron";

import Link from "next/link";
import { useTheme } from "../../hooks/useTheme";
import { Check } from "../Icons/Check";
import { setSettingState } from "../../libs/localStorage";
import { useAuth } from "../../hooks/useAuth";
import { motion } from "framer-motion";
import { Messages } from "../Icons/Messages";
import { Settings } from "../Icons/Settings";
import { Experimental } from "../Icons/Experimental";
import { useInstall } from "../../hooks/useInstall";

export function Dropdown() {}

Dropdown.Divider = ({ marginVertical }) => (
  <hr
    className={`border-gray-700 ${marginVertical ? marginVertical : "my-1"}`}
  />
);

Dropdown.Details = ({ children }) => (
  <div className="flex flex-col px-5 pl-12 group-hover:bg-gray-700">
    {children}
  </div>
);

Dropdown.Auth = ({ isOpen }) => {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  const { background, setBackground, theme, setTheme } = useTheme();
  const { user, signout } = useAuth();
  const { setInstalled } = useInstall();

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight + 30);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height + 30);
  }

  function DropdownItem({
    goToMenu,
    leftIcon,
    rightIcon,
    height,
    children,
    pointer,
    onClick,
  }) {
    return (
      <div
        className={`menu-item group ${
          height ? height : "h-12"
        } inline-flex w-full items-center p-2 px-6 hover:bg-gray-700 transition-colors duration-200${
          goToMenu ? " cursor-pointer" : ""
        }
        ${pointer ? "cursor-pointer" : ""}`}
        onClick={() => {
          if (goToMenu) {
            setActiveMenu(goToMenu);
            return;
          }
          if (onClick) {
            onClick();
            return;
          }
        }}
      >
        <span className="flex items-center justify-center w-8 h-8 mr-2 transition duration-300 bg-gray-700 rounded-full group-hover:bg-gray-600">
          {leftIcon}
        </span>
        <span className="text-sm">{children}</span>
        {rightIcon && (
          <span className="flex items-center justify-center w-8 h-8 ml-auto transition duration-300 bg-gray-700 rounded-full group-hover:bg-gray-600">
            {rightIcon}
          </span>
        )}
      </div>
    );
  }

  return (
    <motion.div
      className="absolute py-4 mb-12 overflow-hidden bg-gray-800 rounded-lg right-4 md:right-32 top-20 md:top-24 w-80 auth__dropdown"
      style={{ height: menuHeight }}
      ref={dropdownRef}
      animate={isOpen ? "open" : "closed"}
      variants={{
        open: { opacity: 1 },
        closed: { opacity: 0 },
      }}
      transition={{ duration: 2 }}
    >
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="flex flex-col w-full">
          <Link href="/profile">
            <a className="w-full cursor-pointer">
              <DropdownItem
                leftIcon={
                  <img
                    src={
                      user.photoUrl ||
                      `https://www.gravatar.com/avatar/${MD5(user.email)}`
                    }
                  ></img>
                }
                height="h-full"
              >
                <span className="text-base font-bold">{user.fullname}</span>
              </DropdownItem>
            </a>
          </Link>

          <Dropdown.Divider></Dropdown.Divider>
          <Link href="/library">
            <a className="w-full cursor-pointer">
              <DropdownItem
                leftIcon={
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                  </svg>
                }
              >
                <span>Library</span>
              </DropdownItem>
            </a>
          </Link>
          <Link href="/store">
            <a className="w-full cursor-pointer">
              <DropdownItem
                leftIcon={
                  <svg
                    className="w-5 h-5"
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
                }
              >
                <span>Store</span>
              </DropdownItem>
            </a>
          </Link>
          <Link href="/messages">
            <a className="w-full cursor-pointer">
              <DropdownItem leftIcon={<Messages className="w-5 h-5" />}>
                Messages
              </DropdownItem>
            </a>
          </Link>
          <Dropdown.Divider />
          <DropdownItem
            leftIcon={<Settings className="w-5 h-5" />}
            rightIcon={<Chevron.Right />}
            goToMenu="settings"
          >
            Settings
          </DropdownItem>
          <DropdownItem
            leftIcon={<Experimental className="w-5 h-5" />}
            rightIcon={<Chevron.Right></Chevron.Right>}
            goToMenu="experimental"
          >
            Experimental
          </DropdownItem>
          <div className="w-full cursor-pointer" onClick={signout}>
            <DropdownItem
              leftIcon={
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
              }
            >
              Log out
            </DropdownItem>
          </div>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "settings"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="flex flex-col w-full">
          <DropdownItem goToMenu="main" leftIcon={<Chevron.Left />}>
            <h2>Back</h2>
          </DropdownItem>
          <Dropdown.Divider />
          <h3 className="my-2 font-bold text-center">Settings</h3>

          <DropdownItem
            goToMenu="settings_appearance"
            leftIcon={
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
                  clipRule="evenodd"
                />
              </svg>
            }
            rightIcon={<Chevron.Right />}
          >
            Appearance
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "experimental"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="flex flex-col w-full">
          <DropdownItem goToMenu="main" leftIcon={<Chevron.Left />}>
            <h2>Back</h2>
          </DropdownItem>
          <Dropdown.Divider />
          <h3 className="my-2 font-bold text-center">Experimental</h3>
          <DropdownItem
            pointer
            leftIcon={<Experimental className="w-5 h-5" />}
            onClick={() => setInstalled(true)}
          >
            <div>Change the Layout</div>
          </DropdownItem>
          <Dropdown.Divider />
          <p className="m-3 text-xs">
            {JSON.stringify(navigator.userAgent.toLowerCase())}
          </p>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "settings_appearance"}
        timeout={500}
        classNames="menu-tertiary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="flex flex-col w-full">
          <DropdownItem goToMenu="settings" leftIcon={<Chevron.Left />}>
            <h2>Back</h2>
          </DropdownItem>
          <Dropdown.Divider />
          <h3 className="my-2 font-bold text-center">Appearance</h3>

          <h4 className="mx-3 font-extrabold text-gray-400">Color Theme</h4>
          <div className="flex flex-col grid-cols-2 gap-2 p-2 px-3 md:grid">
            <div
              className="flex flex-col p-2 transition duration-300 rounded group hover:bg-gray-700"
              onClick={() =>
                setSettingState("vapor_theme", "bg-white", setTheme)
              }
            >
              <p className="mb-3 text-sm font-bold text-gray-500 transition duration-300 group-hover:text-gray-200">
                Light
              </p>
              <div className="relative h-12 bg-white rounded">
                {theme === "bg-white" && <Check.Selected />}
              </div>
            </div>
            <div
              className="flex flex-col p-2 transition duration-300 rounded group hover:bg-gray-700"
              onClick={() =>
                setSettingState("vapor_theme", "bg-black", setTheme)
              }
            >
              <p className="mb-3 text-sm font-bold text-gray-500 transition duration-300 group-hover:text-gray-200">
                Dark
              </p>
              <div className="relative h-12 bg-black rounded">
                {theme === "bg-black" && <Check.Selected />}
              </div>
            </div>
          </div>

          <h4 className="mx-3 font-extrabold text-gray-400">Backgrounds</h4>

          <div className="flex flex-col grid-cols-2 gap-2 p-2 px-3 md:grid">
            <div
              className="flex flex-col p-2 transition duration-300 rounded group hover:bg-gray-700"
              onClick={() =>
                setSettingState(
                  "vapor_background",
                  "bg-topography",
                  setBackground
                )
              }
            >
              <p className="mb-3 text-sm font-bold text-gray-500 transition duration-300 group-hover:text-gray-200">
                Topography
              </p>
              <div className={`h-20 bg-topography rounded relative ${theme}`}>
                {background === "bg-topography" && <Check.Selected />}
              </div>
            </div>
            <div
              className="flex flex-col p-2 transition duration-300 rounded group hover:bg-gray-700"
              onClick={() =>
                setSettingState("vapor_background", "bg-lines", setBackground)
              }
            >
              <p className="mb-3 text-sm font-bold text-gray-500 transition duration-300 group-hover:text-gray-200">
                Lines in motion
              </p>
              <div className={`h-20 bg-lines rounded relative ${theme}`}>
                {background === "bg-lines" && <Check.Selected />}
              </div>
            </div>
            <div
              className="flex flex-col p-2 transition duration-300 rounded group hover:bg-gray-700"
              onClick={() =>
                setSettingState("vapor_background", "", setBackground)
              }
            >
              <p className="mb-3 text-sm font-bold text-gray-500 transition duration-300 group-hover:text-gray-200">
                No background
              </p>
              <div className={`h-20 rounded relative ${theme}`}>
                {background === "" && <Check.Selected />}
              </div>
            </div>
          </div>
        </div>
      </CSSTransition>
    </motion.div>
  );
};
