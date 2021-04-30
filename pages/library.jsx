import { GameCard } from "../components/Game/GameCard";
import { Layout } from "../components/Layout/Layout";
import { Skeleton } from "../components/Skeleton/Skeleton";
import { useAuth } from "../hooks/useAuth";
import { useInstall } from "../hooks/useInstall";

function Library() {
  const { user, library } = useAuth();
  const { installed } = useInstall();
  console.log("games", library);
  return (
    <Layout>
      <div className="pt-32 pb-6 lg:pt-24 xl:pb-12">
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
        <div className="px-6 lg:px-24 pt-6">
          {library !== null ? (
            <>
              {library?.length > 0 ? (
                <section className="flex flex-col space-y-6 md:space-y-0 sm:grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                  {library.map((el, key) => (
                    <GameCard vertical key={key} {...el} />
                  ))}
                </section>
              ) : (
                <div className="h-screen/2 w-full flex flex-col items-center justify-center">
                  <h3 className="text-5xl leading-relaxed items-end inline-flex text-gray-200 font-extrabold">
                    No Games 😰{" "}
                    <span className="text-xl ml-4 mb-4 text-gray-500">yet</span>
                  </h3>
                  <p className="text-lg text-gray-300">
                    There's no game in your library, go to shopping.
                  </p>
                </div>
              )}
            </>
          ) : (
            <div className="text-gray-50 flex flex-col">
              <section className="flex flex-col space-y-6 md:space-y-0 sm:grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                {new Array(12).fill(null).map((_, key) => (
                  <Skeleton key={key} />
                ))}
              </section>
              {JSON.stringify(library, undefined, 1)}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Library;

