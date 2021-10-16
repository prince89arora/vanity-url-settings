import VanityUrl from "./VanityUrl";

export default interface PageItem {
    name: string,
    displayName: string,
    uuid: string,
    path: string,
    vanityUrls: Array<VanityUrl>,
    language?: string,
    children: Array<string>
    parent?: string
}