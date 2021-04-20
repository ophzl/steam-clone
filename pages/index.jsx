import { Layout } from "../components/Layout/Layout";
import Link from "next/link";
import { GameCard } from "../components/Game/GameCard";
import dynamic from "next/dynamic";
import { useAuth } from "../hooks/useAuth";

const { MotionSlider } = dynamic(() => import("../components/MotionSlider"), {
  ssr: false,
});

export default function Home({ games }) {
  const { user, library } = useAuth();

  return (
    <Layout>
      <h4 className="w-full text-2xl lg:text-5xl text-white font-light tracking-wider text-opacity-90 pt-24 px-16 lg:px-32 py-12 inline-flex items-center">
        Featured
        {/* <hr className="w-full border-yellow-500 opacity-70 ml-12"></hr> */}
      </h4>
      <section className=" flex flex-col px-8 lg:px-24 md:grid grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="hidden lg:flex  flex-col justify-center text-center row-span-2 space-y-4 text-gray-200">
          <Link href="/">
            <a className="px-4 xl:px-12 py-5 bg-black bg-opacity-70 h-full flex items-center border-b border-black hover:bg-opacity-20 hover:border-yellow-400 transition duration-500">
              Les jeux du moments
            </a>
          </Link>
          <Link href="/store/promotions">
            <a className="px-4 xl:px-12 py-5 bg-black bg-opacity-70 h-full flex items-center border-b border-black hover:bg-opacity-20 hover:border-yellow-400 transition duration-500">
              Promotions
            </a>
          </Link>
          <Link href="/store/independants">
            <a className="px-4 xl:px-12 py-5 bg-black bg-opacity-70 h-full flex items-center border-b border-black hover:bg-opacity-20 hover:border-yellow-400 transition duration-500">
              Independants games
            </a>
          </Link>
          <Link href="/store/friends">
            <a className="px-4 xl:px-12 py-5 bg-black bg-opacity-70 h-full flex items-center border-b border-black hover:bg-opacity-20 hover:border-yellow-400 transition duration-500">
              Friends games
            </a>
          </Link>
        </div>

        <div className="flex  col-span-2 row-span-2">
          {/* <MotionSlider allowSlideToLast padding={30}> */}
          {/* <GameCard
            size="xl"
            slug="cyberpunk"
            title="Cyberpunk"
            color="yellow"
            bgUrl="https://media.melty.fr/article-4313652-so/media.jpg"
            logoUrl="https://i.shgcdn.com/6c053630-2241-4b11-8b35-2cec9043d819/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
          ></GameCard> */}
          <GameCard
            size="2xl"
            slug="minecraft"
            title="Minecraft"
            color="red"
            bgUrl="https://pbs.twimg.com/media/Eauzw3CXgAAJaVR.jpg:large"
            logoUrl="https://pngimg.com/uploads/minecraft/minecraft_PNG16.png"
          ></GameCard>
          {/* </MotionSlider> */}
        </div>

        <GameCard
          slug="ori"
          title="Ori and the Blind Forest"
          color="blue"
          bgUrl="https://www.fanbyte.com/wp-content/uploads/2020/07/ori.jpg"
          logoUrl="https://steamcdn-a.akamaihd.net/steam/apps/261570/logo.png?t=1424994057"
        ></GameCard>

        <GameCard
          slug="adibou-2"
          title="Adibou et l'Ombre verte"
          color="purple"
          bgUrl="https://adibou.mrtino.eu/img/adibou2.jpg"
          logoUrl="https://images.launchbox-app.com/ddceecee-4038-411f-99a0-be67b2d3f206.png"
        ></GameCard>

        <div className="col-start-3 lg:col-start-4">
          <Link href="/store">
            <a className="bg-black bg-opacity-70 py-5 w-full inline-flex justify-center items-center text-gray-200 border-b border-black  hover:bg-opacity-20 hover:border-yellow-400 transition duration-500">
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                  clipRule="evenodd"
                />
              </svg>
              Store
            </a>
          </Link>
        </div>
      </section>

      <h4 className="w-full text-2xl lg:text-5xl text-white font-light tracking-wider text-opacity-90 px-16 lg:px-32 py-12 inline-flex items-center">
        Library
        <hr className="w-full border-yellow-500 opacity-70 ml-12"></hr>
      </h4>
      <section className="flex flex-col space-y-24 md:space-y-0 px-8 lg:px-24 md:grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {library.map((el, key) => (
          <GameCard vertical key={key} {...el} />
        ))}
        
      </section>
    </Layout>
  );
}
