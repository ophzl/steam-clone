import { GameCard } from "../components/Game/GameCard";
import { Layout } from "../components/Layout/Layout";
import { useAuth } from "../hooks/useAuth";
import { useInstall } from "../hooks/useInstall";

function Library() {
  const { user, library } = useAuth();
  const { installed } = useInstall();

  return (
    <Layout>
      <div className="pt-12 pb-6 lg:pt-24 xl:pb-24">
        {/* <h4 className="w-full text-2xl lg:text-5xl text-white font-light tracking-wider text-opacity-90 px-16 lg:px-32 py-12 inline-flex items-center">
          Library
          <hr className="w-full border-yellow-500 opacity-70 ml-12"></hr>
        </h4> */}
        {installed && (
          <h1
            className="select-none text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-12 xl:mb-24 text-white flex flex-col pl-6 lg:pl-24"
            data-aos="zoom-y-out"
          >
            Welcome home
            <span className="bg-clip-text text-transparent bg-gradient-to-tr from-yellow-400  to-orange-600">
              {user.fullname}
            </span>
          </h1>
        )}
        <section className="flex flex-col space-y-6 md:space-y-0 px-6 lg:px-24 sm:grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {library.map((el, key) => (
            <GameCard vertical key={key} {...el} />
          ))}
        </section>
      </div>
    </Layout>
  );
}

export default Library;
