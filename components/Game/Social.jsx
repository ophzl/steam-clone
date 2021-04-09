export const Social = ({ game }) => {
  return (
    <div className="bg-gray-800 p-5 flex flex-col space-y-4">
      <h3 className="font-light text-xl">Friends that are currently playing</h3>
      <div className="inline-flex w-full">
        <div className="flex relative w-12 h-12 justify-center items-center m-1 mr-2 text-xl rounded-full text-white">
          <img
            className="rounded-full"
            alt="A"
            src="https://avatars.githubusercontent.com/u/10078837?v=4"
          />
          <div className="bg-green-500 rounded-full w-3 h-3 absolute bottom-0 right-0" />
        </div>
      </div>
      <h3 className="font-light text-xl">Friends that have {game}</h3>
      <div className="inline-flex w-full">
        {/* <img
          className="w-12 h-12 object-cover rounded-full ring-2 ring-gray-500 -mr-1"
          alt="User avatar"
          src="https://avatars.githubusercontent.com/u/10078837?v=4"
        /> */}
        <img
          className="w-12 h-12 object-cover rounded-full  -mr-1"
          alt="User avatar"
          src="https://avatars.githubusercontent.com/u/56133800?v=4"
        />
        <img
          className="w-12 h-12 object-cover rounded-full  -mr-1"
          alt="User avatar"
          src="https://avatars.githubusercontent.com/u/48732483?v=4"
        />
        <img
          className="w-12 h-12 object-cover rounded-full  -mr-1"
          alt="User avatar"
          src="https://avatars.githubusercontent.com/u/56624956?v=4"
        />
      </div>
    </div>
  );
};
