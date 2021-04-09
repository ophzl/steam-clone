export const Specifications = ({
  os,
  title,
  arch,
  osDetails,
  processor,
  ram,
  gpu,
  directX,
  disk_space,
  more,
  color,
}) => {
  return (
    <div
      className="w-full flex text-sm flex-col bg-gray-800 p-5 text-white"
      data-os={os}
    >
      <h3 className="font-light text-xl mb-4">{title}</h3>
      <ul className="space-y-1">
        {arch && (
          <li>
            <span className="font-bold">Architecture</span> : {arch}
          </li>
        )}
        {osDetails && (
          <li>
            <span className="font-bold">Operating System</span> : {osDetails}
          </li>
        )}
        {processor && (
          <li>
            <span className="font-bold">Processor</span> : {processor}
          </li>
        )}
        {ram && (
          <li>
            <span className="font-bold">RAM</span> : {ram}
          </li>
        )}
        {gpu && (
          <li>
            <span className="font-bold">Graphic Card</span> : {gpu}
          </li>
        )}
        {directX && (
          <li>
            <span className="font-bold">DirectX</span> : {directX}
          </li>
        )}
        {disk_space && (
          <li>
            <span className="font-bold">Disk Space</span> : {disk_space}
          </li>
        )}
        <hr className={`border-${color}-500 px-2 my-4`}></hr>
        {more && <li>{more}</li>}
      </ul>
    </div>
  );
};