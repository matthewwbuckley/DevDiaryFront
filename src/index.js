import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App'


import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducer'

const store = createStore(reducer, compose(
  applyMiddleware(thunk)
))

const rootElement = document.getElementById('root');

ReactDOM.render(
  (
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  ), rootElement
);