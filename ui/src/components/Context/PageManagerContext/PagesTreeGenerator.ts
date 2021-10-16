import { useEffect, useState } from "react"
import PageItem from "../../Type/PageItem"
import Site from "../../Type/Site"
import Page from "./Page"

type PagesTreeGeneratorProps = {
    pages: Array<Page>
}

type PagesTreeGeneratorReturn = {
    site: Site
}

const PagesTreeGenerator = ( props: PagesTreeGeneratorProps ) : PagesTreeGeneratorReturn => {

    const [site, setSite] = useState<Site>(new Site())
    const [mounted, setMouted] = useState(false)

    const listRemovedPagesUUID: Array<string> = []
    const siteTemp: Site = new Site();

    const processSinglePage = ( page: Page, parent?: PageItem ) => {

        const pageItem: PageItem = {
            name: page.name,
            displayName: page.displayName,
            uuid: page.uuid,
            path: page.path,
            vanityUrls: [],
            children: []
        }

        if ( parent ) {
            siteTemp.addChild(parent.uuid, pageItem)
        } else {
            siteTemp.addPage(pageItem)
        }

        if ( page.childPages.nodes.length > 0 ) {
            page.childPages.nodes.forEach((page: Page) => {
                const childPage = props.pages.find(item => item.uuid === page.uuid)
                if (childPage) {
                    processSinglePage(childPage, pageItem)
                    listRemovedPagesUUID.push(childPage.uuid)
                }
            });
        }
    }

    const processPages = () => {
        if (props.pages && props.pages.length > 0 ) {
            props.pages.forEach((item: Page) => {
                const found = listRemovedPagesUUID.indexOf(item.uuid) > -1
                if ( !found ) {
                    processSinglePage(item)
                }
            })
            setSite(siteTemp)
        }
    }

    useEffect(() => {
        if ( !mounted ) {
            processPages()
            setMouted(true)
        }
    }, [props.pages])

    return { site }
}

export default PagesTreeGenerator