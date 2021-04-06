import { Navbar } from "./Navbar";

export const Layout = ({ transparent, background, children }) => {
  return (
    <div className="bg-black min-h-screen w-screen">
      <Navbar background={background} transparent={transparent} />
      <main className="relative">{children}</main>
    </div>
  );
};
