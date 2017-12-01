import React from 'react';
import { render } from 'react-dom';
// import Perf from 'react-addons-perf';
import App from './App';

// window.Perf = Perf;
// Perf.start();

// this is where you want to do something in browser(like maybe putting script for googleanalytic)
const renderApp = () => {
    render(<App />, document.getElementById('app'));
};

renderApp();

// for hot reload module
if (module.hot) {
    module.hot.accept('./App', () => {
        renderApp();
    });
}
