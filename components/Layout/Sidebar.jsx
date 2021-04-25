import { useRouter } from "next/router";
import { Chevron } from "../Icons/Chevron";

function Sidebar() {
  const router = useRouter();
  return (
    <aside className="h-screen w-16 sticky top-0 bg-gray-900 border-gray-800 border-r-2">
      <ul className="flex flex-col space-y-2 items-center w-full py-2">
        <li
          className="w-12 h-12 rounded bg-gray-800 text-yellow-500 hover:bg-gray-700 hover:text-yellow-400 duration-200 transition cursor-pointer flex justify-center items-center"
          onClick={() => router.back()}
        >
          <Chevron.Left className="w-8 h-8" />
        </li>
        <hr className="border-gray-800"></hr>
      </ul>
    </aside>
  );
}

export default Sidebar;
