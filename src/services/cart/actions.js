import { ADD_TO_CART, REMOVE_FROM_CART } from './actionTypes';

// action creators
export const addToCart = (productId) => ({
  type: ADD_TO_CART,
  payload: {
    productId,
  },
});

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: {
    productId,
  },
});
