import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux'
import { rootReducer } from './redux/rootReducer';

// redux-thunk - middleware для хранилища


const store = createStore(rootReducer, compose(
  // applyMiddleware(
  //   thunk,
  // ),
))

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <Provider store={store}>
    < App />
  </Provider>
);