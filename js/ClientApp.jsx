import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import Perf from 'react-addons-perf';
import App from './App';

// window.Perf = Perf;
// Perf.start();

// this is where you want to do something in browser(like maybe putting script for googleanalytic)
const renderApp = () => {
    render(
        <BrowserRouter>
            <App />
        </BrowserRouter>,
        document.getElementById('app')
    );
};

renderApp();

// for hot reload module
if (module.hot) {
    module.hot.accept('./App', () => {
        renderApp();
    });
}
