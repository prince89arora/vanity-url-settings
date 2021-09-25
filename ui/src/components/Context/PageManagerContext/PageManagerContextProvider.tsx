import React from "react";
import { useState } from "react";
import { PageManagerContext } from "./PageManagerContext";

type PageManagerContextProviderProps = {
  children: any;
};

const PageManagerContextProvider = (props: PageManagerContextProviderProps) => {
  const [list, setList] = useState([]);
  const [selectedPageId, setSelectedPageId] = useState('Test Id');

  return (
    <PageManagerContext.Provider
      value={{
        list,
        setList,
        selectedPageId,
        setSelectedPageId,
      }}
    >
      {props.children}
    </PageManagerContext.Provider>
  );
};

export default PageManagerContextProvider;
