import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


// Dom
import { BrowserRouter } from 'react-router-dom';

import App from './App';

// redux-toolkit
import { Provider } from 'react-redux';
import {store} from "./context/store"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

