import { Layout } from "../components/Layout/Layout";

export default function Home({ games }) {
  return (
    <Layout>
      <section className="pt-32 pb-12 md:pt-40 md:pb-20 flex flex-col mx-8 lg:mx-24 md:grid grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="hidden lg:flex py-5 px-1 flex-col row-span-2 space-y-5 text-gray-200">
          <span>bla bla</span>
          <span>bla bla</span>
          <span>bla bla</span>
          <span>bla bla</span>
        </div>

        <div className="flex  col-span-2 row-span-2">
          <div className="group rounded-md w-full h-96 relative bg-gradient-to-bl from-yellow-400 to-black hover:bg-gradient-to-b hover:from-yellow-400 hover:to-black">
            <img
              className="object-cover h-full w-auto rounded-md opacity-75 hover:scale-110 group-hover:opacity-25 transition duration-200 "
              src="https://www.jvfrance.com/wp-content/uploads/2020/12/Cyberpunk-2077-hotfix-1.05-patchnote-fr-1-890x501.jpg"
              alt="Cyberpunk-background"
            ></img>
            <div className="p-5 flex flex-col absolute bottom-0 left-0 ">
              <img
                className="w-72 h-auto"
                src="https://i.shgcdn.com/6c053630-2241-4b11-8b35-2cec9043d819/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
                alt="Cyberpunk"
              ></img>
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-blue-300 rounded-md h-48">
          <div className="group rounded-md w-full h-full relative bg-gradient-to-bl from-blue-300 to-black hover:bg-gradient-to-b hover:from-blue-300 hover:to-black">
            <img
              className="object-cover h-full w-auto rounded-md opacity-75 hover:scale-110 group-hover:opacity-25 transition duration-200 "
              src="https://www.fanbyte.com/wp-content/uploads/2020/07/ori.jpg"
              alt="ori-background"
            ></img>
            <div className="p-5 flex flex-col absolute bottom-0 left-0 ">
              <img
                className="w-36 h-auto"
                src="https://steamcdn-a.akamaihd.net/steam/apps/261570/logo.png?t=1424994057"
                alt="ori"
              ></img>
            </div>
          </div>
          
          {/* Ori and the Blind Forest */}
        </div>
        <div className="p-5 flex flex-col bg-purple-400 rounded-md h-full">
          Adibou
        </div>
      </section>
    </Layout>
  );
}
