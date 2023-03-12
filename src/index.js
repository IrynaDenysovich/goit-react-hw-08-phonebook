import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

import { Provider } from 'react-redux';
import { Store } from './Reducers/Store';
import { App } from './Components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/goit-react-hw-08-phonebook">
    <Provider store={Store}>
      <App />
    </Provider>
  </BrowserRouter>
);
