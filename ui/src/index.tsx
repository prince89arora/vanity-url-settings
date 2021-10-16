import React from 'react';
import ReactDOM from 'react-dom';
import Application from './components/Application';

import '../node_modules/materialize-css/dist/css/materialize.css'
import './css/style.css'

window.addEventListener('load', () => {
    ReactDOM.render(
        <Application />,
        document.getElementById('root')
    )
})