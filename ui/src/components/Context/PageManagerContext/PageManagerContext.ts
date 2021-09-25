import { createContext } from "react"

type PageManagerContextProps = {
    list: Array<any>
    setList: (data: any) => void
    selectedPageId: String,
    setSelectedPageId: (pageId: string) => void
}

export const PageManagerContext = createContext<PageManagerContextProps>({
    list: [],
    setList: (data: any) => console.warn('No provider found'),
    selectedPageId: '',
    setSelectedPageId: (pageId: string) => console.warn('No provider found'),
})