import React from 'react';
import PropTypes from 'prop-types';

interface HeaderProps {
    pageHeading: String
}

const Header = ( props: HeaderProps ) => {
    return (
        <div className='page-header'>
            <div className="card-panel">
                <h4>{props.pageHeading}</h4>
            </div>
        </div>
    );
}

Header.propTypes = {
    pageHeading: PropTypes.string
}
 
export default Header;