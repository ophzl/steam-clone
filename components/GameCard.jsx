import { motion } from "framer-motion";
import Link from "next/link";

export const GameCard = ({ slug, title, bgUrl, logoUrl, color, size }) => {
  return (
    <Link href={"/games/" + slug}>
      <motion.div
        layoutId={slug + "_bg"}
        className={`cursor-pointer group rounded-md w-full h-full relative bg-gradient-to-bl from-${color}-400 to-black hover:bg-gradient-to-b`}
      >
        <img
          className="object-cover w-auto rounded-md opacity-75 hover:scale-110 group-hover:opacity-25 transition duration-200 "
          src={bgUrl}
          alt={title + "-background"}
          style={{ height: size === "xl" && "25rem" }}
        ></img>
        <div className="p-5 flex flex-col absolute bottom-0 left-0 ">
          <motion.img
            layoutId={slug + "_logo"}
            className={
              "w-auto " + size === "xl"
                ? "h-56"
                : size === "2xl"
                ? "h-60"
                : "h-16"
            }
            src={logoUrl}
            alt={title}
          ></motion.img>
        </div>
      </motion.div>
    </Link>
  );
};
