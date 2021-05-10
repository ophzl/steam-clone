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
      {/* <h3 className="flex flex-col px-16 py-12 pt-24 pl-6 text-3xl font-extrabold tracking-tight text-white select-none md:text-5xl lg:px-32 lg:pl-24">
        Featured
      </h3> */}
      <section className="flex flex-col grid-cols-3 gap-4 px-8 pt-32 pb-24 lg:px-24 md:grid lg:grid-cols-4">
        <div className="flex-col justify-center hidden row-span-2 space-y-4 text-center text-gray-200 lg:flex">
          <h3 className="flex flex-col mb-6 text-3xl font-extrabold tracking-tight text-white select-none md:text-5xl ">
            Featured
          </h3>
          <LinkCard href="/" title="Now" />
          <LinkCard href="/store/promotions" title="Promotions" />
          <LinkCard href="/store/independants" title="Independants" />
          <LinkCard href="/store/friends" title="Friends games" />
        </div>

        <div className="flex col-span-2 row-span-2">
          {/* <MotionSlider allowSlideToLast padding={30}> */}

          <GameCard
            size="2xl"
            slug="minecraft"
            title="Minecraft"
            color="green"
            backgroundUrl="https://compass-ssl.xbox.com/assets/34/bb/34bb1efc-0142-4ef3-bb04-c15c8439937e.jpg?n=Minecraft_Sneaky-Slider-1084_Buzzy-Bees_1600x675.jpg"
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
        <div className="flex col-span-2 row-span-2">
          <GameCard
            size="2xl"
            slug="cyberpunk-2077"
            title="Cyberpunk"
            color="yellow"
            backgroundUrl="https://media.melty.fr/article-4313652-so/media.jpg"
            logoUrl="https://i.shgcdn.com/6c053630-2241-4b11-8b35-2cec9043d819/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
          ></GameCard>
        </div>
        <div className="row-span-2">
          <GameCard
            slug="adibou-3"
            title="Adibou et l'Ombre verte"
            color="purple"
            backgroundUrl="https://adibou.mrtino.eu/img/adibou2.jpg"
            logoUrl="https://images.launchbox-app.com/ddceecee-4038-411f-99a0-be67b2d3f206.png"
          ></GameCard>
        </div>
        <LinkCard
          href="/store"
          icon={<Store className="w-5 h-5 mr-2" />}
          title="Store"
        />
        <GameCard
          slug="ori-2"
          title="Ori and the Blind Forest"
          color="blue"
          backgroundUrl="https://www.fanbyte.com/wp-content/uploads/2020/07/ori.jpg"
          logoUrl="https://steamcdn-a.akamaihd.net/steam/apps/261570/logo.png?t=1424994057"
        ></GameCard>
      </section>
    </Layout>
  );
}

const LinkCard = ({ icon, title, href }) => (
  <Link href={href}>
    <a
      className={`bg-gray-800 bg-opacity-90 py-5 w-full rounded-lg inline-flex ${
        icon ? "justify-center" : "pl-12"
      } items-center text-gray-200 font-extrabold tracking-tight hover:bg-opacity-100 hover:text-black hover:bg-yellow-500 transition duration-500`}
    >
      {icon}
      {title}
    </a>
  </Link>
);
