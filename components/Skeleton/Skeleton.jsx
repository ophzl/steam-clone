export const Skeleton = () => (
  <div className="w-full bg-gray-800 bg-opacity-30 rounded shadow-2xl">
    <div className="h-72 bg-gray-700 bg-opacity-50 rounded-tr rounded-tl animate-pulse"></div>

    <div className="p-5">
      <div className="h-6 rounded-sm bg-gray-700 bg-opacity-50 animate-pulse"></div>
    </div>
  </div>
);
