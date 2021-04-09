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
}) => {
  return (
    <div
      className="w-full flex flex-col bg-gray-800 p-5 text-white"
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
        <hr className="border-yellow-500 px-2 my-4"></hr>
        {more && <li>{more}</li>}
      </ul>
    </div>
  );
};

const old = () => {
  return (
    <>
      <div className="w-1/2">
        <ul>
          <strong>Minimale&nbsp;:</strong>
          <br />
          <ul className="">
            <li>
              {arch}
              <br />
            </li>
            <li>
              <strong>Système d'exploitation&nbsp;:</strong> Windows 7 or 10
              <br />
            </li>
            <li>
              <strong>Processeur&nbsp;:</strong> Intel Core i5-3570K or AMD
              FX-8310
              <br />
            </li>
            <li>
              <strong>Mémoire vive&nbsp;:</strong> 8 GB de mémoire
              <br />
            </li>
            <li>
              <strong>Graphiques&nbsp;:</strong> NVIDIA GeForce GTX 780 or AMD
              Radeon RX 470
              <br />
            </li>
            <li>
              <strong>DirectX&nbsp;:</strong> Version 12
              <br />
            </li>
            <li>
              <strong>Espace disque&nbsp;:</strong> 70 GB d'espace disque
              disponible
              <br />
            </li>
            <li>
              <strong>Notes supplémentaires&nbsp;:</strong> In this game you
              will encounter a variety of visual effects that may provide
              seizures or loss of consciousness in a minority of people. If you
              or someone you know experiences any of the above symptoms while
              playing, stop and seek medical attention immediately.
            </li>
          </ul>{" "}
        </ul>
      </div>
      <div className="w-1/2">
        <ul>
          <strong>Recommandée&nbsp;:</strong>
          <br />
          <ul className="bb_ul">
            <li>
              Système d'exploitation et processeur 64 bits nécessaires
              <br />
            </li>
            <li>
              <strong>Système d'exploitation&nbsp;:</strong> Windows 10
              <br />
            </li>
            <li>
              <strong>Processeur&nbsp;:</strong> Intel Core i7-4790 or AMD Ryzen
              3 3200G
              <br />
            </li>
            <li>
              <strong>Mémoire vive&nbsp;:</strong> 12 GB de mémoire
              <br />
            </li>
            <li>
              <strong>Graphiques&nbsp;:</strong> GTX 1060 6GB / GTX 1660 Super
              or Radeon RX 590
              <br />
            </li>
            <li>
              <strong>DirectX&nbsp;:</strong> Version 12
              <br />
            </li>
            <li>
              <strong>Espace disque&nbsp;:</strong> 70 GB d'espace disque
              disponible
              <br />
            </li>
            <li>
              <strong>Notes supplémentaires&nbsp;:</strong> SSD recommended
            </li>
          </ul>{" "}
        </ul>
      </div>
    </>
  );
};
