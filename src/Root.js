import React from 'react';
import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { products } from './services/products/reducer';
import { cart } from './services/cart/reducer';
import productsData from './services/data/products';

const middleware = [thunk];

const rootReducer = combineReducers({
  cart,
  products,
});

const store = createStore(
  rootReducer,
  {
    products: productsData, // initial store values
  },
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const Root = ({ children, initialState = [] }) => (
  <Provider store={store}>{children}</Provider>
);

export default Root;
