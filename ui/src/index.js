import React from 'react';
import ReactDOM from 'react-dom';
import { Application } from './components';

import '../node_modules/materialize-css/dist/css/materialize.min.css'
import './css/style.css'

window.addEventListener('load', () => {
    ReactDOM.render(
        <Application />,
        document.getElementById("root")
    );
})