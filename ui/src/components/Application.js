import React from 'react';
import Header from './Header';
import PageList from './Navigation/PagesList';

const Application = () => {
    return (
        <>
            <Header pageHeading={'Vanity URL Manager'}/>
            <PageList pageListheading={'Pages'}/>
        </>
    );
}
 
export default Application;