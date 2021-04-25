import { Layout } from "../components/Layout/Layout";

function Install() {
  return (
    <Layout noPadding>
      <div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-screen w-full flex items-center">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="text-center pb-12 md:pb-16">
              <h1
                className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 text-white"
                data-aos="zoom-y-out"
              >
                Make your gaming experience{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-tr from-yellow-400 via-yellow-600 to-red-500">
                  wonderful
                </span>
              </h1>
              <div className="max-w-3xl mx-auto">
                <p className="text-4xl my-12 tracking-tight leading-tight text-white font-bold">
                  Install and play.
                </p>
                <div
                  className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay="300"
                >
                  <div>
                    <a
                      className="px-8 py-4 text-white bg-yellow-600 hover:bg-yellow-700 w-full mb-4 sm:w-auto sm:mb-0 font-bold tracking-wider uppercase transition duration-500"
                      href="#"
                    >
                      Install
                    </a>
                  </div>
                  <div>
                    <a
                      className="px-8 py-4 text-white bg-gray-700 hover:bg-gray-800 w-full sm:w-auto sm:ml-4 font-light tracking-wider uppercase transition duration-500"
                      href="#"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
                <p
                  className="text-xl text-gray-200 my-8"
                  data-aos="zoom-y-out"
                  data-aos-delay="150"
                >
                  Vapor Launcher works on every platform{" "}
                  <span className="text-xs">(except mobile... yet)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Install;
