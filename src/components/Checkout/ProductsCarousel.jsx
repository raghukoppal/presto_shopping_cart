import React from 'react';
import Carousel from 'react-elastic-carousel';
import ProductItem from './ProductItem';
import PropTypes from 'prop-types';
const breakPoints = [
  { width: 1, itemsToShow: 2 },
  { width: 550, itemsToShow: 3 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 5 },
];

const myArrow = ({ type, onClick, isEdge }) => {
  const pointer = type === 'PREV' ? '<' : '>';
  return (
    <span
      className={`carousel-arrow ${type === 'PREV' ? 'left' : 'right'}`}
      onClick={onClick}
      disabled={isEdge}
    >
      {pointer}
    </span>
  );
};

export const ProductsCarousel = ({ products }) => {
  return (
    <div className='products-container'>
      <h6>2 Products in cart</h6>
      <div className='product-carousel'>
        <Carousel breakPoints={breakPoints} renderArrow={myArrow}>
          {products.map((product) => (
            <ProductItem>
              <div className='product-item'>
                <img src={product.image} alt='product' />
                <h6>{product.name}</h6>
              </div>
            </ProductItem>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

ProductsCarousel.propTypes = {
  products: PropTypes.array,
};
