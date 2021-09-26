import { createContext } from "react"

export type Page = {
 name: string,
 path: string,
 title: string  
}

export type PageManagerContextProps = {
    list: Array<Page>
    setList: (data: Array<Page>) => void
    selectedPageId: string,
    setSelectedPageId: (pageId: string) => void
}

export const PageManagerContext = createContext<PageManagerContextProps>({
    list: [],
    setList: () => console.warn('No provider found'),
    selectedPageId: '',
    setSelectedPageId: () => console.warn('No provider found'),
})