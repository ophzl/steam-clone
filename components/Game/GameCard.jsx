import { motion } from "framer-motion";
import Link from "next/link";

export const GameCard = ({
  slug,
  title,
  description,
  bgUrl,
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
          className={`cursor-pointer group rounded-md w-full h-full relative bg-gradient-to-bl from-${color}-400 to-black hover:bg-gradient-to-b`}
        >
          <div className="w-full h-full rounded-md">
            <img
              className="object-cover w-full h-full rounded-md  opacity-75 hover:scale-110 group-hover:opacity-50 transition duration-300 "
              src={bgUrl}
              alt={title + "-background"}
              // style={{ height: size === "xl" && "25rem" }}
            ></img>
          </div>

          <div className="p-5 flex flex-col absolute bottom-0 left-0 ">
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
        <div className="h-72">
          <motion.div
            layoutId={slug + "_bg"}
            className={`cursor-pointer rounded-md rounded-b-none group w-full h-full relative bg-gradient-to-bl from-${color}-400 to-black hover:bg-gradient-to-b`}
          >
            <img
              className="object-cover w-full h-full rounded-md  opacity-75 hover:scale-110 group-hover:opacity-50 transition duration-300 "
              src={bgUrl}
              alt={title + "-background"}
              // style={{ height: size === "xl" && "25rem" }}
            ></img>
            <div className="p-5 flex flex-col absolute bottom-0 left-0 ">
              <motion.img
                layoutId={slug + "_logo"}
                className="h-auto w-full"
                src={logoUrl}
                alt={title}
              ></motion.img>
            </div>
          </motion.div>

          <div className="border-t border-gray-900  text-white bg-white bg-opacity-5 py-5 px-2 rounded-md rounded-t-none">
            <h6 className="font-bold text-lg ml-3">{title}</h6>
            <h6 className="mt-1 text-xs">{description}</h6>
          </div>
        </div>
      )}
    </Link>
  );
};
