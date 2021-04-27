import { useRouter } from "next/router";
import { Chevron } from "../Icons/Chevron";
import { Home } from "../Icons/Home";

import Link from "next/link";
import { Store } from "../Icons/Store";
import { Friends } from "../Icons/Friends";
import { Messages } from "../Icons/Messages";
import { Settings } from "../Icons/Settings";
import { Avatar } from "../Icons/Avatar";
import { useInstall } from "../../hooks/useInstall";
import { Experimental } from "../Icons/Experimental";

function Sidebar() {
  const router = useRouter();
  const { setInstalled } = useInstall();
  return (
    <aside className="h-screen w-16 sticky top-0 bg-gray-900 border-gray-800 border-opacity-30 border-2 z-50">
      <ul className="flex flex-col space-y-2 items-center justify-between w-full h-full py-2">
        <div className="flex-grow space-y-2">
          <Sidebar.Item href="/" icon={<Home className="w-6 h-6" />} />
          {router.pathname !== "/" && !router.pathname.includes("/library") && (
            <li
              className="w-12 h-12 rounded bg-gray-800 text-yellow-500 hover:bg-gray-700 hover:text-yellow-400 duration-200 transition cursor-pointer flex justify-center items-center"
              onClick={() => router.back()}
            >
              <Chevron.Left className="w-8 h-8" />
            </li>
          )}
          <hr className="border-b w-full border-gray-800 my-2"></hr>
          <Sidebar.Item href="/store" icon={<Store className="w-6 h-6" />} />
          <Sidebar.Item href="/social" icon={<Friends className="w-6 h-6" />} />
          <Sidebar.Item href="/chat" icon={<Messages className="w-6 h-6" />} />
        </div>
        <div className="space-y-2">
          <Sidebar.Item
            href="/social/"
            icon={<Avatar.Me className="w-8 h-8" />}
          />
          <li
            className="w-12 h-12 rounded bg-gray-800 text-yellow-500 hover:bg-gray-700 hover:text-yellow-400 duration-200 transition cursor-pointer flex justify-center items-center"
            onClick={() => setInstalled(false)}
          >
            <Experimental className="w-6 h-6" />
          </li>
          <Sidebar.Item
            href="/settings"
            icon={<Settings className="w-6 h-6" />}
          />
        </div>
      </ul>
    </aside>
  );
}

export default Sidebar;

Sidebar.Item = ({ href, icon }) => (
  <Link href={href}>
    <li className="w-12 h-12 rounded bg-gray-800 text-yellow-500 hover:bg-gray-700 hover:text-yellow-400 duration-200 transition cursor-pointer flex justify-center items-center">
      {icon}
    </li>
  </Link>
);
