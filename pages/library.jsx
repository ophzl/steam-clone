import { GameCard } from "../components/Game/GameCard";
import { Layout } from "../components/Layout/Layout";
import { Skeleton } from "../components/Skeleton/Skeleton";
import { useAuth } from "../hooks/useAuth";
import { useInstall } from "../hooks/useInstall";
import { useTheme } from "../hooks/useTheme";

function Library() {
  const { user, library } = useAuth();
  const { installed } = useInstall();
  const { theme } = useTheme();
  return (
    <Layout>
      <div className="pt-32 pb-6 lg:pt-24 xl:pb-12">
        {/* <h4 className="inline-flex items-center w-full px-16 py-12 text-2xl font-light tracking-wider text-white lg:text-5xl text-opacity-90 lg:px-32">
          Library
          <hr className="w-full ml-12 border-yellow-500 opacity-70"></hr>
        </h4> */}
        {installed ? (
          <h1
            className={`flex flex-col pl-6 mb-12 text-5xl font-extrabold tracking-tighter ${
              theme == "bg-black" ? "text-white" : " text-gray-800"
            } select-none md:text-6xl leading-tighter xl:mb-24 lg:pl-24`}
          >
            Welcome home
            <span className="text-transparent bg-clip-text bg-gradient-to-tr from-yellow-400 to-orange-600">
              {user?.fullname}
            </span>
          </h1>
        ) : (
          <h1
            className={`flex flex-col pl-6 mb-12 text-5xl font-extrabold tracking-tighter ${
              theme == "bg-black" ? "text-white" : " text-gray-800"
            } select-none md:text-6xl leading-tighter xl:mb-24 lg:pl-24`}
          >
            Library
          </h1>
        )}
        <div className="px-6 pt-6 lg:px-24">
          {library !== null ? (
            <>
              {library?.length > 0 ? (
                <section className="flex flex-col grid-cols-3 gap-4 space-y-6 md:space-y-0 sm:grid lg:grid-cols-4 xl:grid-cols-6">
                  {library.map((el, key) => (
                    <GameCard vertical key={key} {...el} />
                  ))}
                </section>
              ) : (
                <div className="flex flex-col items-center justify-center w-full h-screen/2">
                  <h3 className="inline-flex items-end text-5xl font-extrabold leading-relaxed text-gray-200">
                    No Games 😰{" "}
                    <span className="mb-4 ml-4 text-xl text-gray-500">yet</span>
                  </h3>
                  <p className="text-lg text-gray-300">
                    There's no game in your library, go to shopping.
                  </p>
                </div>
              )}
            </>
          ) : (
            <div className="flex flex-col text-gray-50">
              <section className="flex flex-col grid-cols-3 gap-4 space-y-6 transition duration-500 md:space-y-0 sm:grid lg:grid-cols-4 xl:grid-cols-6">
                {new Array(12).fill(null).map((_, key) => (
                  <Skeleton key={key} />
                ))}
              </section>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Library;
