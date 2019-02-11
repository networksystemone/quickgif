import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import GifStore from './stores/GifStore';
import 'semantic-ui-css/semantic.min.css';

const Root = (
  <Provider GifStore={GifStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
