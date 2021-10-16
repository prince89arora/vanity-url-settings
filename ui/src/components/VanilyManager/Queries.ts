import { gql } from "@apollo/react-hooks";

export const getSitePagesQuery = (sitePath: string) : any => gql`
query pagesCount {
  jcr (workspace: EDIT) {
    site: nodeByPath(path: "${sitePath}") {
      pages: descendants(typesFilter: {types: ["jnt:page"]}) {
        nodes {
          name,
          displayName,
          uuid,
          path,
          vanityUrls(languages: ["en"]) {
            url
          },
          childPages: children(typesFilter: {types: ["jnt:page"]}) {
            nodes {
              uuid
            }
          }
        }
      }
    }
  }
}
`;