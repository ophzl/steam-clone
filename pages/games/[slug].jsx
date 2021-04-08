import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { Layout } from "../../components/Layout/Layout";

export default function GamePage({}) {
  const router = useRouter();

  const { slug } = router.query;

  let props;

  switch (slug) {
    case "cyberpunk":
      props = {
        bgUrl: "https://media.melty.fr/article-4313652-so/media.jpg",
        logoUrl:
          "https://i.shgcdn.com/6c053630-2241-4b11-8b35-2cec9043d819/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
        color: "yellow",
      };
      break;
    case "ori":
      props = {
        bgUrl: "https://www.fanbyte.com/wp-content/uploads/2020/07/ori.jpg",
        logoUrl:
          "https://steamcdn-a.akamaihd.net/steam/apps/261570/logo.png?t=1424994057",
        color: "blue",
      };
      break;
    case "adibou":
      props = {
        bgUrl: "https://adibou.mrtino.eu/img/adibou2.jpg",
        logoUrl:
          "https://images.launchbox-app.com/ddceecee-4038-411f-99a0-be67b2d3f206.png",
        color: "purple",
      };
      break;
    case "minecraft":
      props = {
        bgUrl: "https://i.imgur.com/8QCax1W.png",
        logoUrl: "https://pngimg.com/uploads/minecraft/minecraft_PNG16.png",
        color: "red",
      };
      break;

    default:
      props = {
        bgUrl:
          "https://www.wallpapertip.com/wmimgs/181-1813965_cyberpunk-2077-yellow-plain-background-wallpaper.jpg",
        logoUrl:
          "https://i.shgcdn.com/6c053630-2241-4b11-8b35-2cec9043d819/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
        color: "gray",
      };
      break;
  }

  return (
    <Layout>
      <section className="w-screen min-h-96">
        <motion.div
          className={`bg-gradient-to-b from-${props.color}-400 h-screen/2 xl:h-screen to-black w-full overflow-hidden`}
          layoutId={slug + "_bg"}
        >
          <img
            className="object-cover w-full opacity-75 "
            src={props.bgUrl}
            alt={slug + "-background"}
          ></img>
          <div className="p-5 flex flex-col absolute bottom-0 left-0 ">
            <motion.img
              layoutId={slug + "_logo"}
              className="w-auto h-32"
              src={props.logoUrl}
              alt={slug + "-logo"}
            ></motion.img>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
}
