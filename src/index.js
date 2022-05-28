import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import PopupOrdersProvider from './context/PopupOrders';
import { ValidateProvider } from './context/Validate';
import { Provider, useSelector } from 'react-redux';
import store from './store';
import ScrollToTop from './utilities/ScrollToTop';
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <PopupOrdersProvider>
        <ValidateProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </ValidateProvider>
      </PopupOrdersProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

