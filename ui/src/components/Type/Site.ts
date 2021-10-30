import PageItem from "./Page/PageItem"

export default class Site {

    private pages: Array<PageItem>

    private pagesMap = new Map<string, PageItem>()

    constructor() {
        this.pages = []
    }

    addPage(page: PageItem): void {
        this.pages.push(page)
        this.pagesMap.set( page.uuid, page )
    }

    addChild(parent: string, page: PageItem): void {
        const parentItem = this.pagesMap.get(parent)
        
        if ( parentItem ) {
            if ( !parentItem.children ) {
                parentItem.children = []    
            } 
            parentItem.children.push(page.uuid)
            this.pagesMap.set(parent, {...parentItem})

            page.parent = parent
            this.addPage(page)
        }
    }

    getPage(uuid: string): PageItem | undefined {
        return this.pagesMap.get(uuid)
    }

    get pageMap(): Map<string, PageItem> {
        return this.pagesMap
    }

    get pageList(): Array<PageItem> {
        return this.pages
    }
}