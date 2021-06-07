import { Layout } from "../components/Layout/Layout";
import { useTheme } from "../hooks/useTheme";

function Install() {
  const { theme } = useTheme();

  return (
    <Layout noPadding>
      <div style={{backgroundImage:'url("https://wallpaper.dog/large/17125978.jpg")', backgroundSize:'cover', backgroundColor:"rgba(0, 0, 0, .5)"}}>
        <div className="flex items-center w-full h-screen max-w-6xl px-4 mx-auto sm:px-6">
          <div className="w-full pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="w-full pb-12 text-center md:pb-16">
              <h1
                className={`text-5xl md:text-6xl flex flex-col font-extrabold leading-tighter tracking-tighter mb-4 ${
                  theme == "bg-black" ? "text-white" : "text-black"
                }`}
              >
                Make your gaming experience
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-red-500">
                  wonderful
                </span>
              </h1>
              <div className="max-w-3xl mx-auto">
                <p
                  className={`my-12 text-4xl font-bold leading-tight tracking-tight ${
                    theme == "bg-black" ? "text-white" : "text-gray-700"
                  }`}
                >
                  Install and play.
                </p>
                <div
                  className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay="300"
                >
                  <div>
                    <a
                      className="w-full px-8 py-4 mb-4 font-bold tracking-wider text-white uppercase transition duration-500 bg-yellow-600 hover:bg-yellow-700 sm:w-auto sm:mb-0"
                      href="#"
                    >
                      Install
                    </a>
                  </div>
                  <div>
                    <a
                      className="w-full px-8 py-4 font-light tracking-wider text-white uppercase transition duration-500 bg-gray-700 hover:bg-gray-800 sm:w-auto sm:ml-4"
                      href="#"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
                <p
                  className={`my-8 text-xl ${
                    theme == "bg-black" ? "text-white" : "text-gray-600"
                  }`}
                  data-aos="zoom-y-out"
                  data-aos-delay="150"
                >
                  Vapor Launcher works on every platform
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
