import { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { MD5 } from "../../libs/md5";
import { Chevron } from "../Icons/Chevron";

import Link from "next/link";

export function Dropdown() {}

Dropdown.Divider = ({ marginVertical }) => (
  <hr
    className={`border-gray-700 ${marginVertical ? marginVertical : "my-1"}`}
  />
);

Dropdown.Details = ({ children }) => (
  <div className="group-hover:bg-gray-700 flex flex-col px-5 pl-12">
    {children}
  </div>
);

Dropdown.Auth = ({ auth }) => {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight + 30);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height + 30);
  }

  function DropdownItem({ goToMenu, leftIcon, rightIcon, height, children }) {
    return (
      <a
        className={`menu-item group ${
          height ? height : "h-12"
        } inline-flex items-center p-2 px-5 hover:bg-gray-700 transition-colors duration-200 ${
          goToMenu ? " cursor-pointer" : " cursor-default"
        }`}
        onClick={() => goToMenu && setActiveMenu(goToMenu)}
      >
        <span className="h-8 w-8 group-hover:bg-gray-600 rounded-full bg-gray-700 mr-2 flex items-center justify-center transition duration-300">
          {leftIcon}
        </span>
        <span className="text-sm">{children}</span>
        {rightIcon && (
          <span className="h-8 w-8 group-hover:bg-gray-600 rounded-full bg-gray-700 ml-auto flex items-center justify-center transition duration-300">
            {rightIcon}
          </span>
        )}{" "}
      </a>
    );
  }

  return (
    <div
      className="absolute right-4 md:right-32 mb-12 top-20 md:top-24 w-72 bg-gray-800 py-4 overflow-hidden auth__dropdown"
      style={{ height: menuHeight }}
      ref={dropdownRef}
    >
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="w-full flex flex-col">
          <DropdownItem
            leftIcon={
              <img
                src={`https://www.gravatar.com/avatar/${MD5(auth.email)}`}
              ></img>
            }
            height="h-full"
          >
            <Link href="/profile">
              <a className="text-base font-bold">{auth.fullname}</a>
            </Link>
          </DropdownItem>

          <Dropdown.Divider></Dropdown.Divider>
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
            <Link href="/library">
              <a>Library</a>
            </Link>
          </DropdownItem>
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
            <Link href="/store">
              <a>Store</a>
            </Link>
          </DropdownItem>
          <DropdownItem
            leftIcon={
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
              </svg>
            }
          >
            <Link href="/messages">
              <a>Messages</a>
            </Link>
          </DropdownItem>
          <Dropdown.Divider />
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
                  d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>
            }
            rightIcon={<Chevron.Right />}
            goToMenu="settings"
          >
            Settings
          </DropdownItem>
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
                  d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z"
                  clipRule="evenodd"
                />
              </svg>
            }
            rightIcon={<Chevron.Right></Chevron.Right>}
            goToMenu="experimental"
          >
            Experimental
          </DropdownItem>
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
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "settings"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="w-full flex flex-col">
          <DropdownItem goToMenu="main" leftIcon={<Chevron.Left />}>
            <h2>Back</h2>
          </DropdownItem>
          <Dropdown.Divider />
          <h3 className="text-center font-bold my-2">Settings</h3>

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
        <div className="w-full flex flex-col">
          <DropdownItem goToMenu="main" leftIcon={<Chevron.Left />}>
            <h2>Back</h2>
          </DropdownItem>
          <Dropdown.Divider />
          <h3 className="text-center font-bold my-2">Experimental</h3>

        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "settings_appearance"}
        timeout={500}
        classNames="menu-tertiary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="w-full flex flex-col">
          <DropdownItem goToMenu="settings" leftIcon={<Chevron.Left />}>
            <h2>Back</h2>
          </DropdownItem>
          <Dropdown.Divider />
          <h3 className="text-center font-bold my-2">Appearance</h3>
          <div className="flex flex-col md:grid grid-cols-2 gap-2 p-2 px-3">
            <div className="flex flex-col group hover:bg-gray-700 p-2 rounded duration-300 transition">
              <p className="text-sm font-bold text-gray-500 group-hover:text-gray-200 mb-3 duration-300 transition">Topography</p>
              <div className="h-20 bg-topography rounded"></div>
            </div>
            <div className="flex flex-col group hover:bg-gray-700 p-2 rounded duration-300 transition">
              <p className="text-sm font-bold text-gray-500 group-hover:text-gray-200 mb-3 duration-300 transition">Lines in motion</p>
              <div className="h-20 bg-lines rounded"></div>
            </div>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};
