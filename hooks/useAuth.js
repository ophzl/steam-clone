import React, { createContext, useContext, useState } from "react";
const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState({
    uuid: "floriaaan",
    fullname: "Florian Leroux",
    email: "florian.leroux3@laposte.net",
    friends: [{ uuid: "ophzl", fullname: "oph@zl.fr" }],
  });

  const [library, setLibrary] = useState([
    {
      slug: "cyberpunk",
      title: "Cyberpunk 2077",
      color: "yellow",
      bgUrl: "https://media.melty.fr/article-4313652-so/media.jpg",
      logoUrl:
        "https://i.shgcdn.com/6c053630-2241-4b11-8b35-2cec9043d819/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
    },
    {
      slug: "half-life-alyx",
      title: "Half-Life: Alyx",
      color: "gray",
      bgUrl:
        "https://gameranx.com/wp-content/uploads/2020/01/Half-Life-Alyx-4K-Wallpaper.jpg",
      logoUrl: "https://i.imgur.com/l6zTfqc.png",
    },
    {
      slug: "fifa-21",
      title: "Fifa 21",
      color: "green",
      bgUrl: "https://wallpaperaccess.com/full/1108509.jpg",
      logoUrl:
        "https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-21/buy/common/fifa21-logo-buy-odhfowwo18r-xl-m.png",
    },
    {
      slug: "black-ops-cold-war",
      title: "Call of Duty: Black Ops Cold War",
      color: "gray",
      bgUrl:
        "https://compass-ssl.xbox.com/assets/f5/61/f5611b5a-0405-4eb3-ad13-acabc6310b7f.jpg?n=242149_GLP-Page-Hero-1084_1920x1080.jpg",
      logoUrl:
        "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/zeus/common/logos/zeus-logo-light.png",
    },
    {
      slug: "bioshock-collection",
      title: "BioShock Collection",
      color: "blue",
      bgUrl: "https://wallpapercave.com/wp/wp5251596.jpg",
      logoUrl:
        "https://img2.pngio.com/bioshock-logo-transparent-png-clipart-free-download-ywd-bioshock-the-collection-png-980_485.png",
    },
  ]);

  const disconnect = () => setUser(null) && setLibrary(null);

  return (
    <AuthContext.Provider value={{ user, setUser, library, setLibrary, disconnect }}>
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
