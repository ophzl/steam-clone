import { useInstall } from "../../hooks/useInstall";
import { useTheme } from "../../hooks/useTheme";
import { Navbar } from "./Navbar";
import Sidebar from "./Sidebar";

export const Layout = ({ noPadding, children }) => {
  const { background, theme } = useTheme();
  const { installed } = useInstall();
  return (
    <>
      {installed ? (
        <div className="flex ">
          <Sidebar />
          <main className="w-full relative rounded-l-xl">{children}</main>
        </div>
      ) : (
        <div
          className={`${theme} ${background} min-h-screen h-full ${
            noPadding ? "" : "pb-32 md:pb-64"
          }`}
        >
          <Navbar />
          <main className="relative">{children}</main>
        </div>
      )}
    </>
  );
};
