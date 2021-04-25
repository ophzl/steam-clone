import { GameCard } from "../components/Game/GameCard";
import { Layout } from "../components/Layout/Layout";
import { useAuth } from "../hooks/useAuth";

function Library() {
  const { user, library } = useAuth();

  return (
    <Layout>
      <div className="pt-24">
        {/* <h4 className="w-full text-2xl lg:text-5xl text-white font-light tracking-wider text-opacity-90 px-16 lg:px-32 py-12 inline-flex items-center">
          Library
          <hr className="w-full border-yellow-500 opacity-70 ml-12"></hr>
        </h4> */}
        <section className="flex flex-col space-y-24 md:space-y-0 px-8 lg:px-24 md:grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {library.map((el, key) => (
            <GameCard vertical key={key} {...el} />
          ))}
        </section>
      </div>
    </Layout>
  );
}

export default Library;
