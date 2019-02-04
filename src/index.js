import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import 'semantic-ui-css/semantic.min.css';

import App from './App';
import GifStore from './stores/GifStore';

const Root = (
  <Provider GifStore={GifStore}>
    <App />
  </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
