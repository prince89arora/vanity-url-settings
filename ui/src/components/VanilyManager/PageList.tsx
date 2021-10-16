import React, { useContext, useEffect, useState } from 'react';
import { PageManagerContext } from '../Context/PageManagerContext';
import { TreeView } from '../Tree/TreeView';
import PageItem from '../Type/PageItem';

const PageList = () : JSX.Element => {

    const { site, error, loading } = useContext(PageManagerContext)

    const [list, setList] = useState<any[]>([])

    // get item without parent.
    // create new list type.
    // process items withour parent and creae new list with child information.

    const preocessSinglePage = (page: PageItem) => {
        const treeItem = {
            label: page.displayName,
            id: page.uuid,
            children: new Array<any>()
        }

        page.children.forEach(item => {
            console.log(item);
            
            const childPage = site?.getPage(item)
            console.log(childPage);
            
            if ( childPage ) {
                const childItem = preocessSinglePage(childPage)
                treeItem.children.push(childItem)
            }
        })
        return treeItem;
    }

    const getDisplayAbleData = () => {
        const treeList: any[] = [];
        site?.pageList.forEach((page: PageItem) => {
            if ( !page.parent ) {
                const item = preocessSinglePage(page)
                treeList.push(item)
            }
        })
        console.log(treeList);
        
        setList(treeList)
    }

    useEffect(() => {
        getDisplayAbleData()
    }, [site])

    return (
        <div className='page_list_container'>
            {(!loading && error) 
                ? 
                <p>{error.message}</p>
                :
                <TreeView json={list}/>
            }
        </div>
    );
}
 
export default PageList;
