import { motion } from "framer-motion";
import Link from "next/link";

export const Social = ({ game }) => {
  return (
    <div className="bg-gray-800 p-5 flex flex-col space-y-4">
      <h3 className="font-light text-xl">Friends that are currently playing</h3>
      <div className="inline-flex w-full">
        <Link href="/social/friend/floriaaan">
          <div className="flex relative w-12 h-12 justify-center items-center m-1 mr-2 text-xl rounded-full text-white cursor-pointer">
            <motion.img
              layoutId={"floriaaan" + "-social"}
              className="rounded-full  bg-black hover:opacity-60 transition duration-300"
              alt="FL"
              src="https://avatars.githubusercontent.com/u/10078837?v=4"
            />
            <div className="bg-green-500 rounded-full w-3 h-3 absolute bottom-0 right-0" />
          </div>
        </Link>
      </div>
      <h3 className="font-light text-xl">Friends that have {game}</h3>
      <div className="inline-flex w-full">
        {/* <img
          className="w-12 h-12 object-cover rounded-full ring-2 ring-gray-500 -mr-1"
          alt="User avatar"
          src="https://avatars.githubusercontent.com/u/10078837?v=4"
        /> */}
        <Link href="/social/friend/ophzl">
          <motion.img
            layoutId={"ophzl" + "-social"}
            className="w-12 h-12 object-cover rounded-full  -mr-1 cursor-pointer bg-black hover:opacity-60 transition duration-300"
            alt="User avatar"
            src="https://avatars.githubusercontent.com/u/56133800?v=4"
          />
        </Link>
        <Link href="/social/friend/anatole-godard">
          <motion.img
            layoutId={"anatole-godard" + "-social"}
            className="w-12 h-12 object-cover rounded-full  -mr-1 cursor-pointer bg-black hover:opacity-60 transition duration-300"
            alt="User avatar"
            src="https://avatars.githubusercontent.com/u/48732483?v=4"
          />
        </Link>

        <Link href="/social/friend/william-langlois">
          <motion.img
            layoutId={"william-langlois" + "-social"}
            className="w-12 h-12 object-cover rounded-full  -mr-1 cursor-pointer bg-black hover:opacity-60 transition duration-300"
            alt="User avatar"
            src="https://avatars.githubusercontent.com/u/56624956?v=4"
          />
        </Link>
      </div>
    </div>
  );
};
