import React, { createContext, useContext, useEffect, useState } from "react";
const InstallContext = createContext();

function InstallProvider({ children }) {
    const [installed, setInstalled] = useState(true);
  

  return (
    <InstallContext.Provider
      value={{ installed, setInstalled }}
    >
      {children}
    </InstallContext.Provider>
  );
}

const useInstall = () => useContext(InstallContext);

export { InstallProvider, useInstall };