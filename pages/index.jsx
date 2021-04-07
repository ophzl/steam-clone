import { Layout } from "../components/Layout/Layout";
import Link from "next/link";
import { GameCard } from "../components/GameCard";

import dynamic from "next/dynamic";

const Carousel = dynamic(() => import("@brainhubeu/react-carousel"), {
  ssr: false,
});

import "@brainhubeu/react-carousel/lib/style.css";

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

        <div className="flex  col-span-2 row-span-2 p-1">
          <Carousel offset={15} plugins={['autoplay']}>
            <GameCard
              size="xl"
              slug="cyberpunk"
              title="Cyberpunk"
              color="yellow"
              bgUrl="https://media.melty.fr/article-4313652-so/media.jpg"
              logoUrl="https://i.shgcdn.com/6c053630-2241-4b11-8b35-2cec9043d819/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
            ></GameCard>
            <GameCard
              size="xl"
              slug="minecraft"
              title="Minecraft"
              color="red"
              bgUrl="https://i.imgur.com/8QCax1W.png"
              logoUrl="https://pngimg.com/uploads/minecraft/minecraft_PNG16.png"
            ></GameCard>
          </Carousel>
        </div>

        <GameCard
          slug="ori"
          title="Ori and the Blind Forest"
          color="blue"
          bgUrl="https://www.fanbyte.com/wp-content/uploads/2020/07/ori.jpg"
          logoUrl="https://steamcdn-a.akamaihd.net/steam/apps/261570/logo.png?t=1424994057"
        ></GameCard>

        <div className="flex flex-col bg-purple-400 rounded-md h-full">
          <div className="group rounded-md w-full h-full relative bg-gradient-to-bl from-purple-300 to-black hover:bg-gradient-to-b hover:from-purple-300 hover:to-black">
            <img
              className="object-cover h-auto w-full rounded-md opacity-75 hover:scale-110 group-hover:opacity-25 transition duration-200 "
              src="https://adibou.mrtino.eu/img/adibou2.jpg"
              alt="adibou-background"
            ></img>
            <div className="p-5 flex flex-col absolute bottom-0 left-0 ">
              <img
                className="w-36 h-auto"
                src="https://images.launchbox-app.com/ddceecee-4038-411f-99a0-be67b2d3f206.png"
                alt="ori"
              ></img>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
