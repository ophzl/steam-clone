export const SubInfo = ({
  img,
  tags,
  color,
  description,
  releaseDate,
  developper,
  publisher,
}) => {
  return (
    <div className="row-span-2 w-full bg-gray-800">
      <div className="w-full h-48">
        <img className="object-cover w-full h-full" src={img} />
      </div>
      <div className="p-5">
        <div
          className={`text-sm text-justify border-b border-${color}-500 pb-4`}
        >
          {description}
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

            {releaseDate && (
              <div className="inline-flex items-center justify-between">
                <div className="text-xs">Release Date:</div>
                <div className="text-sm tracking-wider uppercase font-bold">
                  {releaseDate}
                </div>
              </div>
            )}

            {developper && (
              <div className="inline-flex items-center justify-between">
                <div className="text-xs">Developer:</div>
                <div className="text-sm tracking-wider uppercase font-bold">
                  <a
                    className={`text-${color}-400 hover:text-${color}-600 duration-300 transition`}
                    // href="https://en.cdprojektred.com/"
                  >
                    {developper}
                  </a>
                </div>
              </div>
            )}
            {publisher && (
              <div className="inline-flex items-center justify-between">
                <div className="text-xs">Publisher:</div>
                <div className="text-sm tracking-wider uppercase font-bold">
                  <a
                    className={`text-${color}-400 hover:text-${color}-600 duration-300 transition`}
                    // href="https://en.cdprojektred.com/"
                  >
                    {publisher}
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
        {tags && (
          <div className={`border-${color}-500 border-t pt-4`}>
            <div
              className="glance_tags_ctn popular_tags_ctn"
              data-gpnav="columns"
            >
              <div className="text-sm tracking-tight font-light mb-2">
                Popular user-defined tags for this product:
              </div>
              <div className="flex flex-wrap text-justify" data-appid={1091500}>
                {tags.map((el, key) => (
                  <Tag name={el} color={color} key={key} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Tag = ({ name, color }) => (
  <a
    className={`px-1 py-0.5 m-px text-xs bg-gray-900 hover:bg-${color}-500 text-${color}-600 hover:text-white duration-300 transition`}
  >
    {name}
  </a>
);
