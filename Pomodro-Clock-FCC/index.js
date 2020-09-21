import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App2 from './app2';
import App3 from "./app3"

import Timer from "./promodro"
import * as serviceWorker from './serviceWorker';
ReactDOM.render(<Timer/>,document.getElementById('root'))
/////----------ReactDOM.render(<App3 />, document.getElementById('root'));

//ReactDOM.render(<App />, document.getElementById('root'));

//ReactDOM.render(<App2 />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
