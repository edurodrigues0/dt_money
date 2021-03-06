import { App } from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { makeServer } from './services/mirage';

if(process.env.NODE_ENV === 'development') {
    makeServer();
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);