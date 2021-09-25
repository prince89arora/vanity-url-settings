import React, { useContext } from 'react';
import { PageManagerContext } from '../Context/PageManagerContext';

/**
 * 
 * @returns 
 */
const PathManager = () : JSX.Element => {

    const { list, selectedPageId } = useContext(PageManagerContext)

    return (
        <>
            {list && list.map(item => <p key={item.name}>{item.name}</p>)}
            <p>{selectedPageId}</p>
        </>
    );
}
 
export default PathManager;