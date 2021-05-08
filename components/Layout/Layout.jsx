import { useInstall } from "../../hooks/useInstall";
import { useTheme } from "../../hooks/useTheme";
import { Cross } from "../Icons/Cross";
import { Expand } from "../Icons/Expand";
import { Minus } from "../Icons/Minus";
import { Navbar } from "./Navbar";
import Sidebar from "./Sidebar";

// import electron from "electron";
// const ipcRenderer = electron.ipcRenderer || false;

export const Layout = ({ noPadding, children }) => {
  const { background, theme } = useTheme();
  const { installed } = useInstall();
  return (
    <>
      {installed ? (
        <div className="flex flex-col">
          <div className="fixed z-40 inline-flex items-center w-full h-8 pl-16 mb-1 bg-gray-900 border-t-2 border-b-2 border-r-2 border-gray-800 border-opacity-30">
            <h3
              className="flex-grow ml-2 font-extrabold tracking-tighter text-gray-800 uppercase cursor-default select-none font-xs"
              style={{ WebkitAppRegion: "drag" }}
            >
              Vapor
            </h3>
            <div className="inline-flex h-full space-x-3">
              {/* <div
                className="flex items-center justify-center h-full px-3 transition duration-200 cursor-pointer hover:bg-gray-800"
                onClick={() => {
                  // if (ipcRenderer) ipcRenderer.send("window-minus");
                }}
              >
                <Minus className="w-4 h-4 text-gray-700" />
              </div> */}
              <div
                onClick={() => {
                  if (window) {
                    window.moveTo(0, 0);
                    window.resizeTo(screen.width, screen.height);
                  }
                }}
                className="flex items-center justify-center h-full px-3 transition duration-200 cursor-pointer hover:bg-gray-800"
              >
                <Expand className="w-4 h-4 text-gray-700" />
              </div>
              <div
                onClick={() => window && window.close()}
                className="flex items-center justify-center h-full px-4 text-gray-500 transition duration-200 cursor-pointer hover:bg-red-700 hover:text-white"
              >
                <Cross className="w-4 h-4" />
              </div>
            </div>
          </div>
          <div className="flex">
            <Sidebar />
            <main className="relative w-full border-b-2 border-r-2 border-gray-800 border-opacity-40">
              {children}
            </main>
          </div>
        </div>
      ) : (
        <div
          className={`${theme} ${background} min-h-screen h-full ${
            noPadding ? "" : "pb-32 md:pb-12"
          }`}
        >
          <Navbar />
          <main className="relative">{children}</main>
        </div>
      )}
    </>
  );
};
