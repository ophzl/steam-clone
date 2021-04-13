import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { Layout } from "../../../components/Layout/Layout";

const FriendPage = ({ uuid, img, fullname, lastUrl }) => {
  const router = useRouter();
  return (
    <Layout>
      <div className="pt-24">
        <div
          className="bg-gray-600 w-full flex flex-col flex-wrap p-3 antialiased py-12"
          style={{
            backgroundImage:
              'url("https://media.melty.fr/article-4313652-so/media.jpg")',
            // backgroundRepeat: "no-repeat",
            // backgroundSize: "cover",
            backgroundBlendMode: "multiply",
            objectFit: "cover",
          }}
        >
          <div className="inline-flex px-2 md:px-16 lg:px-24 xl:px-32">
            <div className="flex items-center">
              <motion.img
                // layoutId={uuid + "-social"}
                className="rounded-full w-24 h-24 md:h-48 md:w-48  xl:w-72 xl:h-72 bg-black mr-6 md:mr-12"
                alt="FL"
                src={img}
              />
            </div>

            <div className="flex-grow flex flex-row flex-wrap">
              <div className="w-full text-gray-700 font-semibold relative pt-3 md:pt-0 flex flex-col justify-center">
                <div className="py-2 pl-3">
                  <div
                    className="text-gray-200 text-xs font-bold inline-flex cursor-pointer"
                    onClick={() => router.back()}
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Return
                  </div>
                </div>

                <div className="text-2xl xl:text-6xl text-white leading-tight">
                  {fullname}
                </div>
                <div className="text-normal xl:text-2xl text-gray-300 hover:text-gray-400 transition duration-150">
                  @{uuid}
                </div>
                <div className="text-xs md:text-sm xl:text-base text-gray-300 md:absolute pt-3 md:pt-0 bottom-0 right-0 flex flex-col md:items-end">
                  <span>
                    Last played game:
                    <Link href="/games/cyberpunk">
                      <a className="text-yellow-400 font-bold ml-1 hover:text-yellow-600 transition duration-300 cursor-pointer">
                        Cyberpunk 2077
                      </a>
                    </Link>
                  </span>
                  <span>
                    Last seen: <strong>2 days ago</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

FriendPage.getInitialProps = async (ctx) => {
  let body;
  switch (ctx.query.uuid) {
    case "floriaan":
      body = {
        img: "https://avatars.githubusercontent.com/u/10078837?v=4",
        fullname: "Florian Leroux",
      };
      break;
    case "ophzl":
      body = {
        img: "https://avatars.githubusercontent.com/u/56133800?v=4",
        fullname: "Ophélie Zeitel",
      };
      break;
    case "anatole-godard":
      body = {
        img: "https://avatars.githubusercontent.com/u/48732483?v=4",
        fullname: "Anatole Godard",
      };
      break;
    case "william-langlois":
      body = {
        img: "https://avatars.githubusercontent.com/u/56624956?v=4",
        fullname: "William Langlois",
      };
      break;

    default:
      body = {
        img: "https://avatars.githubusercontent.com/u/10078837?v=4",
        fullname: "Florian Leroux",
      };
      break;
  }

  return { uuid: ctx.query.uuid, ...body };
};

export default FriendPage;
