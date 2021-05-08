import React, { createContext, useContext, useEffect, useState } from "react";
const InstallContext = createContext();

function InstallProvider({ children }) {
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    var userAgent = navigator.userAgent.toLowerCase();
    setInstalled(userAgent.includes("electron/"));

    // if (process.env.NEXT_PUBLIC_ENV === "LOCAL") setInstalled(true);
  }, []);

  return (
    <InstallContext.Provider value={{ installed, setInstalled }}>
      {children}
    </InstallContext.Provider>
  );
}

const useInstall = () => useContext(InstallContext);

export { InstallProvider, useInstall };
