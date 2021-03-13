import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
    const rootEl = document.getElementById('react-root');
    ReactDOM.render( <Root />, rootEl);
})