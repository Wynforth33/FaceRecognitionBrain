// IMPORTS
	// General
		import './index.css';

	// Libraries
		import React from 'react';
		import ReactDOM from 'react-dom'; 
		import * as serviceWorker from './serviceWorker';
		import 'tachyons';

	// Components
		import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
