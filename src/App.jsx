import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ProductList from './components/ProductList/container';
import Cart from './components/Cart/container';
import Checkout from './components/Checkout/container';

const App = () => (
  <div className='container'>
    <div className='row'>
      <div className='col-md-12'>
        <h1>Shopping Cart</h1>
      </div>
    </div>
    <div className='row'>
      <div className='col-md-8'>
        <ProductList />
      </div>
      <div className='col-md-4'>
        <Cart />
        <Checkout />
      </div>
    </div>
  </div>
);

export default App;
