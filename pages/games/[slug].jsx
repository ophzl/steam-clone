import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { Social } from "../../components/Game/Social";
import { Specifications } from "../../components/Game/Specifications";
import { SubInfo } from "../../components/Game/SubInfo";
import { Layout } from "../../components/Layout/Layout";

const GamePage = ({ slug }) => {
  // const router = useRouter();

  // const { slug } = router.query;

  let props;

  switch (slug) {
    case "cyberpunk":
      props = {
        bgUrl: "https://media.melty.fr/article-4313652-so/media.jpg",
        logoUrl:
          "https://i.shgcdn.com/6c053630-2241-4b11-8b35-2cec9043d819/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
        color: "yellow",
        title: "Cyberpunk 2077",
      };
      break;
    case "ori":
      props = {
        bgUrl: "https://www.fanbyte.com/wp-content/uploads/2020/07/ori.jpg",
        logoUrl:
          "https://steamcdn-a.akamaihd.net/steam/apps/261570/logo.png?t=1424994057",
        color: "blue",
        title: "Ori and the Blind Forest",
      };
      break;
    case "adibou":
      props = {
        bgUrl: "https://adibou.mrtino.eu/img/adibou2.jpg",
        logoUrl:
          "https://images.launchbox-app.com/ddceecee-4038-411f-99a0-be67b2d3f206.png",
        color: "purple",
        title: "Adibou 2",
      };
      break;
    case "minecraft":
      props = {
        // bgUrl: "https://i.imgur.com/8QCax1W.png",
        bgUrl: "https://pbs.twimg.com/media/Eauzw3CXgAAJaVR.jpg:large",
        logoUrl: "https://pngimg.com/uploads/minecraft/minecraft_PNG16.png",
        color: "red",
        title: "Minecraft",
      };
      break;

    case "half-life-alyx":
      props = {
        bgUrl:
          "https://gameranx.com/wp-content/uploads/2020/01/Half-Life-Alyx-4K-Wallpaper.jpg",
        logoUrl: "https://i.imgur.com/l6zTfqc.png",
        color: "gray",
        title: "Half-Life: Alyx",
      };
      break;

    default:
      props = {
        bgUrl:
          "https://www.wallpapertip.com/wmimgs/181-1813965_cyberpunk-2077-yellow-plain-background-wallpaper.jpg",
        logoUrl:
          "https://i.shgcdn.com/6c053630-2241-4b11-8b35-2cec9043d819/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
        color: "gray",
        title: "Cyberpunk 2077",
      };
      break;
  }

  return (
    <Layout>
      <section className="relative w-full h-96 md:h-auto md:min-h-96 overflow-hidden">
        <motion.div
          className={`bg-gradient-to-b from-${props.color}-400 h-screen/2 xl:h-screen to-black w-full overflow-hidden`}
          layoutId={slug + "_bg"}
        >
          <img
            className="object-cover h-full w-full md:h-auto  opacity-75 xl:h-screen"
            src={props.bgUrl}
            alt={slug + "-background"}
          ></img>
          <div className="p-5 flex flex-col absolute bottom-0 left-0">
            <motion.img
              layoutId={slug + "_logo"}
              className="max-h-24 md:w-auto md:h-full md:max-h-32"
              src={props.logoUrl}
              alt={slug + "-logo"}
            ></motion.img>
          </div>
          <div className="absolute inset-0 flex justify-center items-center invisible md:visible">
            <motion.button
              // animate={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              // transition={{ duration: 1 }}
              whileTap={{ scale: 0.9 }}
              className={`h-32 w-32 bg-${props.color}-500 bg-opacity-75 blur-lg rounded-full -mt-16 flex justify-center items-center focus:outline-none`}
            >
              <svg
                version="1.1"
                id="play"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 100 100"
                enableBackground="new 0 0 100 100"
                xmlSpace="preserve"
                className="w-full h-full"
              >
                <path
                  className="stroke-solid"
                  fill="none"
                  stroke="white"
                  d="M49.9,2.5C23.6,2.8,2.1,24.4,2.5,50.4C2.9,76.5,24.7,98,50.3,97.5c26.4-0.6,47.4-21.8,47.2-47.7C97.3,23.7,75.7,2.3,49.9,2.5"
                />
                <path
                  className="stroke-dotted"
                  fill="none"
                  stroke="white"
                  d="M49.9,2.5C23.6,2.8,2.1,24.4,2.5,50.4C2.9,76.5,24.7,98,50.3,97.5c26.4-0.6,47.4-21.8,47.2-47.7C97.3,23.7,75.7,2.3,49.9,2.5"
                />
                <path
                  className="icon"
                  fill="white"
                  d="M38,69c-1,0.5-1.8,0-1.8-1.1V32.1c0-1.1,0.8-1.6,1.8-1.1l34,18c1,0.5,1,1.4,0,1.9L38,69z"
                />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </section>

      <section className="mt-6 text-white">
        <div className="mx-6 flex flex-col md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <SubInfo
            img={props.bgUrl}
            color={props.color}
            tags={[
              "Cyberpunk",
              "Open World",
              "RPG",
              "Sci-fi",
              "Futuristic",
              "FPS",
              "Atmospheric",
              "Exploration",
              "Nudity",
            ]}
          />
          <div className="row-span-2">
            <Social game={props.title} />
          </div>
          <Specifications
            os="win"
            title="Minimal specifications"
            arch="Système d'exploitation et processeur 64 bits nécessaires"
            osDetails="Windows 7 or 10"
            processor="Intel Core i5-3570K or AMD FX-8310"
            ram="8 GB de mémoire"
            gpu="NVIDIA GeForce GTX 780 or AMD Radeon RX 470"
            directX="Version 12"
            disk_space="70 GB d'espace disque disponible"
            more="In this game you
            will encounter a variety of visual effects that may provide
            seizures or loss of consciousness in a minority of people. If you
            or someone you know experiences any of the above symptoms while
            playing, stop and seek medical attention immediately."
            color={props.color}
          />
          <Specifications
            os="win"
            title="Recommended specifications"
            arch="Système d'exploitation et processeur 64 bits nécessaires"
            osDetails="Windows 10"
            processor="Intel Core i7-4790 or AMD Ryzen 3 3200G"
            ram="12 GB de mémoire"
            gpu="GTX 1060 6GB / GTX 1660 Super or Radeon RX 590"
            directX="Version 12"
            disk_space="70 GB d'espace disque disponible"
            more="SSD recommended"
            color={props.color}
          />
        </div>
      </section>
    </Layout>
  );
};

GamePage.getInitialProps = async (ctx) => {
  // const res = await fetch("https://api.github.com/repos/vercel/next.js");
  // const json = await res.json();
  return { slug: ctx.query.slug };
};

export default GamePage;
