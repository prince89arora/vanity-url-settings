import React from "react";
import PageManagerContextProvider from "./Context/PageManagerContext/PageManagerContextProvider";
import Header from "./Header";
import PathManager from "./VanilyManager/PathManager";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/react-hooks";

const Application = (): JSX.Element => {
  const client = new ApolloClient({
    uri: "http://localhost:8080/modules/graphql",
    cache: new InMemoryCache()
  })

  return (
    <ApolloProvider client={client}>
      <Header pageHeading={"Vanity URL Manager"} />
      
      <PageManagerContextProvider>
        <PathManager />
      </PageManagerContextProvider>
    </ApolloProvider>
  );
};

export default Application;
