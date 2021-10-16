import React from 'react';
import PropTypes from 'prop-types';

interface HeaderProps {
    pageHeading: string
}

const Header = ( props: HeaderProps ): JSX.Element => {
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