export const SubInfo = ({img}) => {
  return (
    <div className="row-span-2 w-full bg-gray-800">
      <div className="w-full h-48">
        <img
          className="object-cover w-full h-full"
          src={img}
        />
      </div>
      <div className="p-5">
        <div className="text-xs border-b border-yellow-500 pb-4">
          Cyberpunk 2077 is an open-world, action-adventure story set in Night
          City, a megalopolis obsessed with power, glamour and body
          modification. You play as V, a mercenary outlaw going after a
          one-of-a-kind implant that is the key to immortality.
        </div>
        <div className="infos pb-4">
          <div className="flex flex-col w-full pt-4">
            <div className="inline-flex items-center justify-between">
              <div className="text-xs">Recent Reviews:</div>
              <div className="text-sm">
                <span className="tracking-wider uppercase">Mixed</span>
                <span className="font-bold">(9,838)</span>
              </div>
            </div>
            <div className="inline-flex items-center justify-between">
              <div className="text-xs">All Reviews:</div>
              <div className="text-sm">
                <span className="tracking-wider uppercase">
                  Mostly positive
                </span>
                <span className="font-bold">(356,501)</span>
              </div>
            </div>

            <div className="inline-flex items-center justify-between">
              <div className="text-xs">Release Date:</div>
              <div className="text-sm tracking-wider uppercase font-bold">
                10 Dec, 2020
              </div>
            </div>

            <div className="inline-flex items-center justify-between">
              <div className="text-xs">Developer:</div>
              <div className="text-sm tracking-wider uppercase font-bold">
                <a
                  className="text-yellow-400 hover:text-yellow-600 duration-300 transition"
                  href="https://en.cdprojektred.com/"
                >
                  CD PROJEKT RED
                </a>
              </div>
            </div>
            <div className="inline-flex items-center justify-between">
              <div className="text-xs">Publisher:</div>
              <div className="text-sm tracking-wider uppercase font-bold">
                <a
                  className="text-yellow-400 hover:text-yellow-600 duration-300 transition"
                  href="https://en.cdprojektred.com/"
                >
                  CD PROJEKT RED
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-yellow-500 border-t pt-4">
          {/* when the javascript runs, it will set these visible or not depending on what fits in the area */}
          <div
            className="glance_tags_ctn popular_tags_ctn"
            data-gpnav="columns"
          >
            <div className="text-sm tracking-tight font-light">
              Popular user-defined tags for this product:
            </div>
            <div className="flex flex-wrap text-justify space-x-1" data-appid={1091500}>
              <a className="px-1 py-0.5 text-xs bg-gray-700 hover:bg-yellow-500 text-yellow-600 hover:text-white duration-300 transition">
                Cyberpunk
              </a>
              <a className="px-1 py-0.5 text-xs bg-gray-700 hover:bg-yellow-500 text-yellow-600 hover:text-white duration-300 transition">
                Open World
              </a>
              <a className="px-1 py-0.5 text-xs bg-gray-700 hover:bg-yellow-500 text-yellow-600 hover:text-white duration-300 transition">
                RPG
              </a>
              <a className="px-1 py-0.5 text-xs bg-gray-700 hover:bg-yellow-500 text-yellow-600 hover:text-white duration-300 transition">
                Sci-fi
              </a>
              <a className="px-1 py-0.5 text-xs bg-gray-700 hover:bg-yellow-500 text-yellow-600 hover:text-white duration-300 transition">
                Futuristic
              </a>
              <a className="px-1 py-0.5 text-xs bg-gray-700 hover:bg-yellow-500 text-yellow-600 hover:text-white duration-300 transition">
                Singleplayer
              </a>
              <a className="px-1 py-0.5 text-xs bg-gray-700 hover:bg-yellow-500 text-yellow-600 hover:text-white duration-300 transition">
                FPS
              </a>
              <a className="px-1 py-0.5 text-xs bg-gray-700 hover:bg-yellow-500 text-yellow-600 hover:text-white duration-300 transition">
                First-Person
              </a>
              <a className="px-1 py-0.5 text-xs bg-gray-700 hover:bg-yellow-500 text-yellow-600 hover:text-white duration-300 transition">
                Atmospheric
              </a>
              <a className="px-1 py-0.5 text-xs bg-gray-700 hover:bg-yellow-500 text-yellow-600 hover:text-white duration-300 transition">
                Exploration
              </a>
              <a className="px-1 py-0.5 text-xs bg-gray-700 hover:bg-yellow-500 text-yellow-600 hover:text-white duration-300 transition">
                Nudity
              </a>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
