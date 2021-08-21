import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ pageHeading }) => {
    return (
        <div className='page-header'>
            <div class="card-panel">
                <h4>{pageHeading}</h4>
            </div>
        </div>
    );
}

Header.propTypes = {
    pageHeading: PropTypes.string
}
 
export default Header;