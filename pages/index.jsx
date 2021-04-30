import { Layout } from "../components/Layout/Layout";
import { useAuth } from "../hooks/useAuth";
import { useEffect } from "react";
import { useInstall } from "../hooks/useInstall";
import { useRouter } from "next/router";
import { GameCard } from "../components/Game/GameCard";

import Link from "next/link";
import dynamic from "next/dynamic";
import { Store } from "../components/Icons/Store";

const { MotionSlider } = dynamic(() => import("../components/MotionSlider"), {
  ssr: false,
});

export default function Index() {
  const { user, library } = useAuth();
  const { installed } = useInstall();
  const router = useRouter();

  useEffect(() => {
    if (installed) router.push("/library", "/");
  }, [installed]);

  return (
    <Layout noPadding>
      <h4 className="w-full text-2xl lg:text-5xl text-white font-light tracking-wider text-opacity-90 pt-24 px-16 lg:px-32 py-12 inline-flex items-center">
        Featured
        {/* <hr className="w-full border-yellow-500 opacity-70 ml-12"></hr> */}
      </h4>
      <section className=" flex flex-col px-8 lg:px-24 md:grid grid-cols-3 lg:grid-cols-4 gap-4 pb-24">
        <div className="hidden lg:flex  flex-col justify-center text-center row-span-2 space-y-4 text-gray-200">
          <LinkCard href="/" title="Now" />
          <LinkCard href="/store/promotions" title="Promotions" />
          <LinkCard href="/store/independants" title="Independants" />
          <LinkCard href="/store/friends" title="Friends games" />
        </div>

        <div className="flex  col-span-2 row-span-2">
          {/* <MotionSlider allowSlideToLast padding={30}> */}

          <GameCard
            size="2xl"
            slug="minecraft"
            title="Minecraft"
            color="red"
            backgroundUrl="https://pbs.twimg.com/media/Eauzw3CXgAAJaVR.jpg:large"
            logoUrl="https://pngimg.com/uploads/minecraft/minecraft_PNG16.png"
          ></GameCard>
          {/* </MotionSlider> */}
        </div>

        <GameCard
          slug="ori"
          title="Ori and the Blind Forest"
          color="blue"
          backgroundUrl="https://www.fanbyte.com/wp-content/uploads/2020/07/ori.jpg"
          logoUrl="https://steamcdn-a.akamaihd.net/steam/apps/261570/logo.png?t=1424994057"
        ></GameCard>

        <GameCard
          slug="adibou-2"
          title="Adibou et l'Ombre verte"
          color="purple"
          backgroundUrl="https://adibou.mrtino.eu/img/adibou2.jpg"
          logoUrl="https://images.launchbox-app.com/ddceecee-4038-411f-99a0-be67b2d3f206.png"
        ></GameCard>

        <GameCard
          size="2xl"
          slug="cyberpunk-2077"
          title="Cyberpunk"
          color="yellow"
          backgroundUrl="https://media.melty.fr/article-4313652-so/media.jpg"
          logoUrl="https://i.shgcdn.com/6c053630-2241-4b11-8b35-2cec9043d819/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
        ></GameCard>
        <div className="col-start-3 lg:col-start-4">
          <LinkCard
            href="/store"
            icon={<Store className="w-5 h-5 mr-2" />}
            title="Store"
          />
        </div>
      </section>
    </Layout>
  );
}

const LinkCard = ({ icon, title, href }) => (
  <Link href={href}>
    <a
      className={`bg-black bg-opacity-70 py-5 w-full inline-flex ${
        icon ? "justify-center" : "pl-12"
      } items-center text-gray-200 border-b font-bold uppercase tracking-widest leading-tight border-black  hover:bg-opacity-20 hover:border-yellow-400 transition duration-500`}
    >
      {icon}
      {title}
    </a>
  </Link>
);
