import React, { useContext, useEffect } from 'react';
import { PageManagerContext } from '../Context/PageManagerContext';
import PageList from './PageList';

/**
 * 
 * @returns 
 */
const PathManager = () : JSX.Element => {

    const { loading } = useContext(PageManagerContext)

    useEffect(() => {
        console.log(loading)
    }, [loading])
    return (
        <>
            {loading ? 
                <p>Loading.....</p> :
                <PageList />}
        </>
    );
}
 
export default PathManager;