import { Navbar } from "./Navbar";

export const Layout = ({ transparent, background, children }) => {
  return (
    <div className="bg-black min-h-screen h-full pb-12 md:pb-64">
      <Navbar background={background} transparent={transparent} />
      <main className="relative">{children}</main>
    </div>
  );
};
