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
          <div className="h-8 mb-1 w-full inline-flex items-center fixed bg-gray-900 z-40 pl-16 border-b-2 border-r-2 border-opacity-30 border-t-2 border-gray-800">
            <h3
              className="ml-2 text-gray-700 uppercase font-xs font-black tracking-widest cursor-default select-none flex-grow"
              style={{ WebkitAppRegion: "drag" }}
            >
              Vapor 💨
            </h3>
            <div className="inline-flex space-x-3 h-full">
              {/* <div
                className="h-full flex hover:bg-gray-800 justify-center items-center cursor-pointer px-3 transition duration-200"
                onClick={() => {
                  // if (ipcRenderer) ipcRenderer.emit("window-minus");
                }}
              >
                <Minus className="w-4 h-4  text-gray-700" />
              </div> */}
              <div
                onClick={() => {
                  if (window) {
                    window.moveTo(0, 0);
                    window.resizeTo(screen.width, screen.height);
                  }
                }}
                className="h-full flex hover:bg-gray-800 justify-center items-center cursor-pointer px-3 transition duration-200"
              >
                <Expand className="w-4 h-4 text-gray-700" />
              </div>
              <div
                onClick={() => window && window.close()}
                className="h-full flex hover:bg-red-700 text-gray-500 hover:text-white justify-center items-center cursor-pointer px-4 transition duration-200"
              >
                <Cross className="w-4 h-4" />
              </div>
            </div>
          </div>
          <div className="flex">
            <Sidebar />
            <main className="w-full relative border-opacity-40 border-gray-800 border-r-2 border-b-2">
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
