import { useEffect } from "react";
import firebase from "../../libs/firebase";

const Insert = () => {
  const games = [
    {
      slug: "cyberpunk-2077",
      backgroundUrl: "https://media.melty.fr/article-4313652-so/media.jpg",
      logoUrl:
        "https://i.shgcdn.com/6c053630-2241-4b11-8b35-2cec9043d819/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
      color: "yellow",
      title: "Cyberpunk 2077",
      //   owned: true,
      price: "69.99$",
    },
    {
      slug: "ori",
      backgroundUrl:
        "https://www.fanbyte.com/wp-content/uploads/2020/07/ori.jpg",
      logoUrl:
        "https://steamcdn-a.akamaihd.net/steam/apps/261570/logo.png?t=1424994057",
      color: "blue",
      title: "Ori and the Blind Forest",
      //   owned: false,
      price: "19.99$",
    },
    {
      slug: "adibou-2",
      backgroundUrl: "https://adibou.mrtino.eu/img/adibou2.jpg",
      logoUrl:
        "https://images.launchbox-app.com/ddceecee-4038-411f-99a0-be67b2d3f206.png",
      color: "purple",
      title: "Adibou et l'Ombre Verte",
      //   owned: false,
      price: "5.99$",
    },
    {
      slug: "minecraft",
      // backgroundUrl: "https://i.imgur.com/8QCax1W.png",
      backgroundUrl: "https://pbs.twimg.com/media/Eauzw3CXgAAJaVR.jpg:large",
      logoUrl: "https://pngimg.com/uploads/minecraft/minecraft_PNG16.png",
      color: "red",
      title: "Minecraft",
      //   owned: false,
      price: "25.99$",
    },
    {
      slug: "half-life-alyx",
      backgroundUrl:
        "https://gameranx.com/wp-content/uploads/2020/01/Half-Life-Alyx-4K-Wallpaper.jpg",
      logoUrl: "https://i.imgur.com/l6zTfqc.png",
      color: "gray",
      title: "Half-Life: Alyx",
      //   owned: true,

      price: "49.99$",
    },
    {
      slug: "fifa-21",
      backgroundUrl: "https://wallpaperaccess.com/full/1108509.jpg",
      logoUrl:
        "https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-21/buy/common/fifa21-logo-buy-odhfowwo18r-xl-m.png",
      color: "gray",
      title: "Fifa 21",
      //   owned: true,

      price: "49.99$",
    },
    {
      slug: "black-ops-cold-war",
      backgroundUrl:
        "https://compass-ssl.xbox.com/assets/f5/61/f5611b5a-0405-4eb3-ad13-acabc6310b7f.jpg?n=242149_GLP-Page-Hero-1084_1920x1080.jpg",
      logoUrl:
        "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/zeus/common/logos/zeus-logo-light.png",
      color: "red",
      title: "Call of Duty: Black Ops Cold War",
      //   owned: true,

      price: "69.99$",
    },
    {
      slug: "bioshock-collection",
      backgroundUrl: "https://wallpapercave.com/wp/wp5251596.jpg",
      logoUrl:
        "https://img2.pngio.com/bioshock-logo-transparent-png-clipart-free-download-ywd-bioshock-the-collection-png-980_485.png",
      color: "blue",
      title: "BioShock Collection",
      //   owned: true,

      price: "49.99$",
    },
  ];

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_ENV === "LOCAL") {
      const gamesRef = firebase.firestore().collection("games");

      games.forEach((el) =>
        gamesRef.doc(el.slug).set({
          backgroundUrl: el.backgroundUrl,
          logoUrl: el.logoUrl,
          color: el.color,
          title: el.title,
          price: el.price,
        })
      );
    }
  }, []);

  return <>done</>;
};

export default Insert;
