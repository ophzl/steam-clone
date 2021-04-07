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
      <section className="pt-32 pb-12 md:pt-40 md:pb-20 flex flex-col mx-8 lg:mx-24 md:grid grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="hidden lg:flex py-5 px-4 flex-col justify-center text-center row-span-2 space-y-10 text-gray-200">
          <Link href="/">
            <a className="px-12 py-5 border-b border-black hover:bg-white hover:bg-opacity-5 hover:border-yellow-400 transition duration-500">
              Les jeux du moments
            </a>
          </Link>
          <Link href="/">
            <a className="px-12 py-5 border-b border-black hover:bg-white hover:bg-opacity-5 hover:border-yellow-400 transition duration-500">
              Promotions
            </a>
          </Link>
          <Link href="/">
            <a className="px-12 py-5 border-b border-black hover:bg-white hover:bg-opacity-5 hover:border-yellow-400 transition duration-500">
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
            size="xl"
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

        <div className="col-span-4 row-span-2">
          <GameCard
            size="2xl"
            slug="cyberpunk"
            title="Cyberpunk"
            color="yellow"
            bgUrl="https://media.melty.fr/article-4313652-so/media.jpg"
            logoUrl="https://i.shgcdn.com/6c053630-2241-4b11-8b35-2cec9043d819/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
          ></GameCard>
        </div>
      </section>
    </Layout>
  );
}
