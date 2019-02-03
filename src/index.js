import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import GifStore from './stores/GifStore';

const Root = (
  <Provider GifStore={GifStore}>
    <App />
  </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
