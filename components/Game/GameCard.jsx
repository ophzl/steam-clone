import { motion } from "framer-motion";
import Link from "next/link";

export const GameCard = ({
  slug,
  title,
  description,
  backgroundUrl,
  logoUrl,
  color,
  size,
  vertical,
}) => {
  return (
    <Link href={"/games/" + slug}>
      {!vertical ? (
        <motion.div
          layoutId={slug + "_bg"}
          className={`cursor-pointer select-none group  w-full h-full relative bg-gradient-to-bl from-${color}-400 to-black hover:bg-gradient-to-b`}
        >
          <div className="w-full h-full">
            <img
              className="object-cover w-full h-full transition duration-300 opacity-90 hover:scale-110 group-hover:opacity-50 "
              src={backgroundUrl}
              alt={title + "-background"}
              // style={{ height: size === "xl" && "25rem" }}
            ></img>
          </div>

          <div className="absolute bottom-0 left-0 flex flex-col p-5 ">
            <motion.img
              layoutId={slug + "_logo"}
              className={
                "h-auto " + size === "xl"
                  ? "w-2/5"
                  : size === "2xl"
                  ? "w-1/2"
                  : "w-1/3"
              }
              src={logoUrl}
              alt={title}
            ></motion.img>
          </div>
        </motion.div>
      ) : (
        <div className="select-none h-72 ">
          <motion.div
            layoutId={slug + "_bg"}
            className={`cursor-pointer  group w-full h-full relative bg-gradient-to-bl from-${color}-400 to-black rounded-lg hover:bg-gradient-to-b`}
          >
            <img
              className="object-cover w-full h-full transition duration-300 rounded-lg opacity-90 hover:scale-110 group-hover:opacity-50"
              src={backgroundUrl}
              alt={title + "-background"}
              // style={{ height: size === "xl" && "25rem" }}
            ></img>
            <div className="absolute bottom-0 left-0 flex flex-col p-5 ">
              <motion.img
                layoutId={slug + "_logo"}
                className="w-full h-auto"
                src={logoUrl}
                alt={title}
              ></motion.img>
            </div>
          </motion.div>

          {/* <div className="px-2 py-5 text-gray-300 bg-gray-800 border-t border-gray-900">
            <h6 className="ml-3 text-sm font-bold truncate">{title}</h6>
          </div> */}
        </div>
      )}
    </Link>
  );
};
