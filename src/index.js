import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';

import * as serviceWorker from './serviceWorker';
import store from "./app/ReduxThunk/store"
import {Provider} from "react-redux"

store.subscribe(()=>console.log(store.getState()));

ReactDOM.render(
  <BrowserRouter basename="/">
   <Provider store={store}>
   <App />
   </Provider>
  </BrowserRouter>
, document.getElementById('root'));

serviceWorker.unregister();