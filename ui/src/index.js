import React from 'react';
import ReactDOM from 'react-dom';
import Application from './Application';

window.addEventListener('load', () => {
    ReactDOM.render(
        <Application />,
        document.getElementById("root")
    );
})