import { createContext } from "react"
import Site from "../../Type/Site"

export type PageManagerContextProps = {
    site?: Site
    selectedPageId?: string,
    setSelectedPageId?: (pageId: string) => void,
    loading?: boolean,
    error?: any
}

export const PageManagerContext = createContext<PageManagerContextProps>({
    selectedPageId: '',
    setSelectedPageId: () => console.warn('No provider found'),
    loading: false,
    error: {}
})