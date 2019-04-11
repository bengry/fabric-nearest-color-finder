import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import { initializeIcons } from '@uifabric/icons';

initializeIcons();
ReactDOM.render(<App />, document.getElementById('root'));
