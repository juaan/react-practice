import React from 'react';
import { render } from 'react-dom';
import App from './App';

// this is where you want to do something in browser(like maybe putting script for googleanalytic)
const renderApp = () => {
  render(<App />, document.getElementById('app'))
}

renderApp()

// for hot reload module
if (module.hot) {
  module.hot.accept('./App', () => {
    renderApp()
  })
}