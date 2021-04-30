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
import { useAuth } from "../../hooks/useAuth";
import { User } from "../Icons/User";
import { SpotifyIcon } from "../Icons/Spotify";

function Sidebar() {
  const router = useRouter();
  const { setInstalled } = useInstall();
  const { user } = useAuth();
  const accessibility = true;

  return (
    <aside className="h-screen w-16 sticky top-0 bg-gray-900 border-gray-800 border-opacity-30 border-2 z-50">
      <ul className="flex flex-col space-y-2 items-center justify-between w-full h-full py-2">
        <div className="flex-grow space-y-2">
          <Sidebar.Item
            href="/"
            icon={<Home className="w-6 h-6" />}
            label="Vapor"
            accessibility={accessibility}
          />
          {router.pathname !== "/" && !router.pathname.includes("/library") && (
            <li
              className="w-12 h-12 rounded bg-gray-800 text-yellow-500 hover:bg-gray-700 hover:text-yellow-400 duration-200 transition cursor-pointer flex justify-center items-center"
              onClick={() => router.back()}
            >
              <Chevron.Left className="w-8 h-8" />
            </li>
          )}
          <hr className="border-b w-full border-gray-800 my-2"></hr>
          <Sidebar.Item
            href="/store"
            icon={<Store className="w-6 h-6" />}
            label="Store"
            accessibility={accessibility}
          />
          {user && (
            <>
              <Sidebar.Item
                href="/social"
                icon={<Friends className="w-6 h-6" />}
                label="Social"
                accessibility={accessibility}
              />
              <Sidebar.Item
                href="/chat"
                icon={<Messages className="w-6 h-6" />}
                label="Messages"
                accessibility={accessibility}
              />
            </>
          )}
        </div>
        <div className="space-y-2">
          {user && (
            <>
              <Sidebar.Item
                href="/integration/spotify/"
                icon={<SpotifyIcon className="w-6 h-6" />}
                label="Spotify"
                accessibility={accessibility}
              />
              <hr className="border-b w-full border-gray-800 my-2"></hr>
            </>
          )}

          {user ? (
            <Sidebar.Item
              href="/social/"
              icon={<Avatar.Me className="w-8 h-8" />}
              label="Profile"
              accessibility={accessibility}
            />
          ) : (
            <Sidebar.Item
              href="/auth/login"
              icon={<User className="w-6 h-6" />}
              label="Log in"
              accessibility={accessibility}
            />
          )}
          <li
            className="w-12 h-12 rounded bg-gray-800 text-yellow-500 hover:bg-gray-700 hover:text-yellow-400 duration-200 transition cursor-pointer flex justify-center items-center"
            onClick={() => setInstalled(false)}
          >
            <Experimental className="w-6 h-6" />
          </li>
          <Sidebar.Item
            href="/settings"
            icon={<Settings className="w-6 h-6" />}
            accessibility={accessibility}
          />
        </div>
      </ul>
    </aside>
  );
}

export default Sidebar;

Sidebar.Item = ({ href, icon, label, accessibility }) => (
  <Link href={href}>
    <div className="flex flex-col justify-center group">
      <li className="w-12 h-12 rounded bg-gray-800 text-yellow-500 group-hover:bg-gray-700 group-hover:text-yellow-400 duration-200 transition cursor-pointer flex justify-center items-center">
        {icon}
      </li>
      {accessibility && label && (
        <div
          className="flex items-center justify-center w-full h-4 text-gray-300 bg-gray-800 group-hover:bg-gray-700 group-hover:text-yellow-400 rounded text-xs font-bold mt-1 duration-200 transition cursor-pointer"
          style={{ fontSize: "0.6rem" }}
        >
          {label}
        </div>
      )}
    </div>
  </Link>
);
