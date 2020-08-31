import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

export class Product extends Component {
  handleClick = () => {
    const { id, addToCart, removeFromCart, isInCart } = this.props;
    isInCart ? removeFromCart(id) : addToCart(id);
  };

  render() {
    const { name, price, currency, image, isInCart } = this.props;
    return (
      <div className='product thumbnail'>
        <img src={require(`../../${image}`)} alt='product' />
        {/* src={require(`../../../static/products/${product.sku}_1.jpg`)} */}
        <div className='caption'>
          <h3>{name}</h3>
          <div className='product__price'>
            {price} {currency}
          </div>
          <div className='product__button-wrap'>
            <button
              className={isInCart ? 'btn btn-danger' : 'btn btn-primary'}
              onClick={this.handleClick}
            >
              {isInCart ? 'Remove' : 'Add to cart'}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number,
  currency: PropTypes.string,
  image: PropTypes.string,
  isInCart: PropTypes.bool.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};
