import Link from "next/link";
import { Layout } from "../components/Layout/Layout";

const E404 = () => {
  return (
    <Layout noPadding>
      <div>
        <div className="h-screen overflow-hidden w-full flex flex-wrap justify-center content-center items-center absolute z-0">
          <h2 className="text-white opacity-20 md:text-720px text-4xl">500</h2>
        </div>
        <div className="h-screen w-full flex flex-wrap justify-center content-end md:content-center items-end pb-24 md:pb-0 md:items-center relative z-10">
          <div className="p-6 text-center text-white">
            <h2 className="uppercase text-xl lg:text-5xl font-black">
              We are sorry, an error has occurred!
            </h2>
            <p className="mt-3 uppercase text-sm lg:text-base text-gray-300">
              The page you are looking is temporarily unavailable or is crashing.
            </p>
            <Link href="/">
              <a className="mt-6 font-bold bg-yellow-500 hover:bg-yellow-700 text-white py-4 px-6 rounded-full inline-block uppercase shadow-2xl transition duration-300">
                Back To Homepage
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default E404;
