import React from "react";
import PageManagerContextProvider from "./Context/PageManagerContext/PageManagerContextProvider";
import Header from "./Header";
import PathManager from "./VanilyManager/PathManager";

const Application = () => {
  console.log('asdsa')
  return (
    <>
      <Header pageHeading={"Vanity URL Manager"} />
      
      <PageManagerContextProvider>
        <PathManager />
      </PageManagerContextProvider>
    </>
  );
};

export default Application;
