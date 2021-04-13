import { motion } from "framer-motion";
import Link from "next/link";
import { Layout } from "../../../components/Layout/Layout";

const Buy = ({ slug, title, color, backgroundUrl, logoUrl, price }) => {
  return (
    <Layout noPadding>
      <section className="relative w-full h-full">
        {/* <motion.div */}
        <div
          className="h-screen w-full opacity-50 bg-black"
          layoutId={slug + "_bg"}
          animate={{ scale: 1 }}
        >
          <img
            className="object-cover h-full w-full opacity-75"
            src={backgroundUrl}
            alt={slug + "-background"}
          ></img>
        </div>
        {/* </motion.div> */}

        <div className="absolute h-screen w-screen flex justify-center items-center inset-0">
          <motion.div
            initial={{ scale: 0.8, opacity: 0.2 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="h-screen mt-48 md:mt-0 md:h-screen/2 w-screen md:w-1/2 xl:w-1/3 bg-gray-800 flex flex-col p-6 text-gray-100"
          >
            <div className="inline-flex items-center justify-between">
              <div className="inline-flex items-center">
                <Link href={`/games/${slug}`}>
                  <svg
                    className="w-10 h-10 border-gray-500 border-r pr-4 mr-4 cursor-pointer"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </Link>
                <div className="flex flex-col">
                  <p className="text-2xl">
                    Acheter{" "}
                    <span className="font-bold text-white">{title}</span>
                  </p>
                </div>

                {/* Logo ? */}
              </div>
              <svg
                className="w-9 h-9 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

Buy.getInitialProps = async (ctx) => {
  // const res = await fetch("https://api.github.com/repos/vercel/next.js");
  // const json = await res.json();

  const { slug } = ctx.query;
  let props;

  switch (slug) {
    case "cyberpunk":
      props = {
        backgroundUrl: "https://media.melty.fr/article-4313652-so/media.jpg",
        logoUrl:
          "https://i.shgcdn.com/6c053630-2241-4b11-8b35-2cec9043d819/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
        color: "yellow",
        title: "Cyberpunk 2077",
        owned: true,
        price: "69.99$",
      };
      break;
    case "ori":
      props = {
        backgroundUrl:
          "https://www.fanbyte.com/wp-content/uploads/2020/07/ori.jpg",
        logoUrl:
          "https://steamcdn-a.akamaihd.net/steam/apps/261570/logo.png?t=1424994057",
        color: "blue",
        title: "Ori and the Blind Forest",
        owned: false,
        price: "19.99$",
      };
      break;
    case "adibou-2":
      props = {
        backgroundUrl: "https://adibou.mrtino.eu/img/adibou2.jpg",
        logoUrl:
          "https://images.launchbox-app.com/ddceecee-4038-411f-99a0-be67b2d3f206.png",
        color: "purple",
        title: "Adibou et l'Ombre Verte",
        owned: false,
        price: "5.99$",
      };
      break;
    case "minecraft":
      props = {
        // backgroundUrl: "https://i.imgur.com/8QCax1W.png",
        backgroundUrl: "https://pbs.twimg.com/media/Eauzw3CXgAAJaVR.jpg:large",
        logoUrl: "https://pngimg.com/uploads/minecraft/minecraft_PNG16.png",
        color: "red",
        title: "Minecraft",
        owned: false,
        price: "25.99$",
      };
      break;

    case "half-life-alyx":
      props = {
        backgroundUrl:
          "https://gameranx.com/wp-content/uploads/2020/01/Half-Life-Alyx-4K-Wallpaper.jpg",
        logoUrl: "https://i.imgur.com/l6zTfqc.png",
        color: "gray",
        title: "Half-Life: Alyx",
        owned: true,

        price: "49.99$",
      };
      break;
    case "fifa-21":
      props = {
        backgroundUrl: "https://wallpaperaccess.com/full/1108509.jpg",
        logoUrl:
          "https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-21/buy/common/fifa21-logo-buy-odhfowwo18r-xl-m.png",
        color: "gray",
        title: "Fifa 21",
        owned: true,

        price: "49.99$",
      };
      break;
    case "black-ops-cold-war":
      props = {
        backgroundUrl:
          "https://compass-ssl.xbox.com/assets/f5/61/f5611b5a-0405-4eb3-ad13-acabc6310b7f.jpg?n=242149_GLP-Page-Hero-1084_1920x1080.jpg",
        logoUrl:
          "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/zeus/common/logos/zeus-logo-light.png",
        color: "red",
        title: "Call of Duty: Black Ops Cold War",
        owned: true,

        price: "69.99$",
      };
      break;
    case "bioshock-collection":
      props = {
        backgroundUrl: "https://wallpapercave.com/wp/wp5251596.jpg",
        logoUrl:
          "https://lh3.googleusercontent.com/proxy/nIABEmqz7P8Wj1ypm6oNSYpqtuVrd4H8-xLSOodEr1OpEcC0_G9TqQ7ldJooJKlhOZNCOrHjqx2VcEGcamHAA_l7lprDsBAgF3Rf9kp_ltVl1A0k1fB3RkpVmq5B0EMM",
        color: "blue",
        title: "BioShock Collection",
        owned: true,

        price: "49.99$",
      };
      break;

    default:
      props = {
        backgroundUrl:
          "https://www.wallpapertip.com/wmimgs/181-1813965_cyberpunk-2077-yellow-plain-background-wallpaper.jpg",
        logoUrl:
          "https://i.shgcdn.com/6c053630-2241-4b11-8b35-2cec9043d819/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
        color: "gray",
        title: "Cyberpunk 2077",

        owned: true,
        price: "69.99$",
      };
      break;
  }

  return { slug, ...props };
};

export default Buy;
