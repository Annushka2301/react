import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from '../App';
import { Header } from '../shared/Header';
import cors from 'cors';

window.addEventListener('load', () => {
  ReactDOM.hydrate(<App />, document.getElementById('react_root'));
});
