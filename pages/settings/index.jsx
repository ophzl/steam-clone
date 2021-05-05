import { Experimental } from "../../components/Icons/Experimental";
import { Home } from "../../components/Icons/Home";
import { Settings } from "../../components/Icons/Settings";
import { Layout } from "../../components/Layout/Layout";

const SettingsPage = () => {
  return (
    <Layout>
      <div className="inline-flex h-full">
        <Sidebar />
        <div className="text-white p-6 mt-8">HE</div>
      </div>
    </Layout>
  );
};

const Sidebar = () => (
  <aside className="w-64 h-full bg-gray-800 bg-opacity-30">
    <div className="flex items-center justify-center pt-16">
      <img
        className="h-16"
        src="https://emojis.wiki/emoji-pics/apple/dashing-away-apple.png"
      />
    </div>

    <nav className="mt-10">
      <a
        className="flex items-center py-2 px-8 bg-gray-700 bg-opacity-30 text-gray-100 border-r-4 border-gray-100 transition duration-300"
        href="#"
      >
        <Home className="w-5 h-5" />
        <span className="mx-4 font-medium">Home</span>
      </a>

      <a
        className="flex items-center mt-5 py-2 px-8 text-gray-400 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100 transition duration-300"
        href="#"
      >
        <Experimental className="w-5 h-5" />

        <span className="mx-4 font-medium">Experimental</span>
      </a>

      <a
        className="flex items-center mt-5 py-2 px-8 text-gray-400 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100 transition duration-300"
        href="#"
      >
        <Settings className="w-5 h-5" />

        <span className="mx-4 font-medium">Settings</span>
      </a>
    </nav>

    <div className="absolute bottom-0 py-10 w-64">
      <a
        className="flex items-center mt-5 py-2 px-8 text-gray-400 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100 transition duration-300"
        href="#"
      >
        <Settings className="w-5 h-5" />

        <span className="mx-4 font-medium">Log out</span>
      </a>
    </div>
  </aside>
);
export default SettingsPage;
