import { gql, useQuery } from "@apollo/react-hooks";
import React, { useEffect } from "react";
import { useState } from "react";
import { PageManagerContext } from "./PageManagerContext";
import { getSitePagesQuery } from "../../VanilyManager/Queries" 
import PagesTreeGenerator from "./PagesTreeGenerator";
import { getSampleData } from "./Demo";

export type ChildPagesList = {
  nodes: Array<{ uuid: string }>
}

type PageManagerContextProviderProps = {
  children: JSX.Element;
};

const PageManagerContextProvider = (
  props: PageManagerContextProviderProps
): JSX.Element => {
  const [selectedPageId, setSelectedPageId] = useState("Test Id");

  // const { loading, error, data } = useQuery( getSitePagesQuery("/sites/digitall") );
  const data = getSampleData().data

  const { site } = PagesTreeGenerator({ pages: (data && data.jcr) ? data.jcr.site.pages.nodes : [] })

  useEffect(() => { 
    //nothing
  }, [site])

  return (
    <PageManagerContext.Provider
      value={{
        site,
        // loading,
        // error,
        selectedPageId,
        setSelectedPageId,
      }}
    >
      {props.children}
    </PageManagerContext.Provider>
  );
};

export default PageManagerContextProvider;
