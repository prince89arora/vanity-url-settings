import React from "react";
import { useState } from "react";
import { Page, PageManagerContext } from "./PageManagerContext";

type PageManagerContextProviderProps = {
  children: JSX.Element;
};

const listDefault: Array<Page> = []

const PageManagerContextProvider = (props: PageManagerContextProviderProps): JSX.Element => {
  const [list, setList] = useState(listDefault);
  const [selectedPageId, setSelectedPageId] = useState("Test Id");

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
