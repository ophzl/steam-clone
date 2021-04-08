import { Layout } from "../components/Layout/Layout";
import Link from "next/link";
import { GameCard } from "../components/GameCard";
import dynamic from "next/dynamic";

const { MotionSlider } = dynamic(() => import("../components/MotionSlider"), {
  ssr: false,
});

export default function Home({ games }) {
  return (
    <Layout>
      <h4 className="w-full text-2xl lg:text-5xl text-white font-semibold tracking-wider text-opacity-90 pt-24 px-16 lg:px-32 py-12 inline-flex items-center">
        Suggestions
        <hr className="w-full border-yellow-500 opacity-70 ml-12"></hr>

      </h4>
      <section className=" flex flex-col px-8 lg:px-24 md:grid grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="hidden lg:flex  flex-col justify-center text-center row-span-2 space-y-4 text-gray-200">
          <Link href="/">
            <a className="px-12 py-5 bg-gray-900 bg-opacity-50 rounded-md h-full flex items-center border-b border-black hover:bg-white hover:bg-opacity-5 hover:border-yellow-400 transition duration-500">
              Les jeux du moments
            </a>
          </Link>
          <Link href="/">
            <a className="px-12 py-5 bg-gray-900 bg-opacity-50 border-b rounded-md h-full flex items-center border-black hover:bg-white hover:bg-opacity-5 hover:border-yellow-400 transition duration-500">
              Promotions
            </a>
          </Link>
          <Link href="/">
            <a className="px-12 py-5 bg-gray-900 bg-opacity-50 border-b rounded-md h-full flex items-center border-black hover:bg-white hover:bg-opacity-5 hover:border-yellow-400 transition duration-500">
              Jeux indépendants
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
            bgUrl="https://i.imgur.com/8QCax1W.png"
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
          slug="adibou"
          title="Adibou et l'Ombre verte"
          color="purple"
          bgUrl="https://adibou.mrtino.eu/img/adibou2.jpg"
          logoUrl="https://images.launchbox-app.com/ddceecee-4038-411f-99a0-be67b2d3f206.png"
        ></GameCard>
      </section>

      <h4 className="w-full text-2xl lg:text-5xl text-white font-semibold tracking-wider text-opacity-90 px-16 lg:px-32 py-12 inline-flex items-center">
        Library
        <hr className="w-full border-yellow-500 opacity-70 ml-12"></hr>
      </h4>
      <section className="flex flex-col px-8 lg:px-24 md:grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        <GameCard
          vertical
          slug="cyberpunk"
          title="Cyberpunk"
          color="yellow"
          bgUrl="https://media.melty.fr/article-4313652-so/media.jpg"
          logoUrl="https://i.shgcdn.com/6c053630-2241-4b11-8b35-2cec9043d819/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
        ></GameCard>
      </section>
    </Layout>
  );
}
