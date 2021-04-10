import { Navbar } from "./Navbar";

export const Layout = ({ noPadding, children }) => {
  return (
    <div
      className={`bg-black min-h-screen h-full ${
        noPadding ? "" : "pb-32 md:pb-64"
      }`}
    >
      <Navbar />
      <main className="relative">{children}</main>
    </div>
  );
};
