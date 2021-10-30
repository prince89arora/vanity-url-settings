import { useEffect, useState } from "react";
import PageItem from "../../Type/Page/PageItem";
import Site from "../../Type/Site";
import Page from "./Page";

type PagesTreeGeneratorProps = {
  pages: Array<Page>;
};

type PagesTreeGeneratorReturn = {
  site: Site;
};

/**
 * Site generator from list of pages.
 * Prepares the structural object for a site with child and parent relation.
 *
 * @param props
 * @returns
 */
const PagesTreeGenerator = (
  props: PagesTreeGeneratorProps
): PagesTreeGeneratorReturn => {
  // final site  
  const [site, setSite] = useState<Site>(new Site());
  // 
  const [mounted, setMouted] = useState(false);

  // list to hold uuids for pages that are processes as child.
  // Once processed as child they will not be processed again from pages list.
  const listRemovedPagesUUID: Array<string> = [];
  const siteTemp: Site = new Site();

  /**
   * Procesing a single page.
   * Child pages willl also be processed if found for page.
   * 
   * @param page 
   * @param parent 
   */
  const processSinglePage = (page: Page, parent?: PageItem) => {
    const pageItem: PageItem = {
      name: page.name,
      displayName: page.displayName,
      uuid: page.uuid,
      path: page.path,
      vanityUrls: [],
      children: [],
    };

    // If parent found then it will be current processing page will be added as child in site
    // Or will be added as an individual page.
    if (parent) {
      siteTemp.addChild(parent.uuid, pageItem);
    } else {
      siteTemp.addPage(pageItem);
    }

    // If child pages found for page, they will be processes individually.
    if (page.childPages.nodes.length > 0) {
      page.childPages.nodes.forEach((page: Page) => {
        const childPage = props.pages.find((item) => item.uuid === page.uuid);
        if (childPage) {
          processSinglePage(childPage, pageItem);
          // Add UUID in remove list so it will not be processed again.
          listRemovedPagesUUID.push(childPage.uuid);
        }
      });
    }
  };

  /**
   * Initiate site prepreation for the list of pages.
   */
  const processPages = () => {
    if (props.pages && props.pages.length > 0) {
      props.pages.forEach((item: Page) => {
        const found = listRemovedPagesUUID.indexOf(item.uuid) > -1;
        if (!found) {
          processSinglePage(item);
        }
      });
      setSite(siteTemp);
    }
  };

  useEffect(() => {
    if (!mounted) {
      processPages();
      setMouted(true);
    }
  }, [props.pages]);

  return { site };
};

export default PagesTreeGenerator;
