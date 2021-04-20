import { useTheme } from "../../hooks/useTheme";
import { Navbar } from "./Navbar";

export const Layout = ({ noPadding, children }) => {
  const {background, theme} = useTheme();
  return (
    <div
      className={`${theme} ${background} min-h-screen h-full ${
        noPadding ? "" : "pb-32 md:pb-64"
      }`}
    >
      <Navbar />
      <main className="relative">{children}</main>
    </div>
  );
};
