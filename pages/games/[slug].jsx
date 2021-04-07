import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { Layout } from "../../components/Layout/Layout";

export default function GamePage({}) {
  const router = useRouter();

  const { slug } = router.query;

  return (
    <Layout>
      <section className="w-screen min-h-96">
        <motion.div
          className="bg-gradient-to-b from-yellow-400 to-black w-full overflow-hidden"
          layoutId={slug + "_bg"}
          style={{ height: "36rem" }}
        >
          <img
            className="object-fit opacity-75 "
            src="https://www.wallpapertip.com/wmimgs/181-1813965_cyberpunk-2077-yellow-plain-background-wallpaper.jpg"
            alt={slug + "-background"}
          ></img>
          <div className="p-5 flex flex-col absolute bottom-0 left-0 ">
            <motion.img
              layoutId={slug + "_logo"}
              className="w-auto h-32"
              src="https://i.shgcdn.com/6c053630-2241-4b11-8b35-2cec9043d819/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
              alt="Cyberpunk"
            ></motion.img>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
}
