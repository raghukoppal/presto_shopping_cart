import { ADD_TO_CART, REMOVE_FROM_CART } from './actionTypes';
import { getProduct } from '../products/reducer';

// reducer
const initialState = {
  items: [], // array of product ids
  currency: 'EUR',
};

const handleCartAdd = (state, payload) => ({
  ...state,
  items: [...state.items, payload.productId],
});

const handleCartRemove = (state, payload) => ({
  ...state,
  items: state.items.filter((id) => id !== payload.productId),
});

export const cart = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_TO_CART:
      return handleCartAdd(state, action.payload);
    case REMOVE_FROM_CART:
      return handleCartRemove(state, action.payload);
    default:
      return state;
  }
};

// selectors
export const isInCart = (state, props) =>
  state.cart.items.indexOf(props.id) !== -1;

export const getItems = (state, props) =>
  state.cart.items.map((id) => getProduct(state, { id }));

export const getCurrency = (state, props) => state.cart.currency;

export const getTotal = (state, props) =>
  state.cart.items.reduce((acc, id) => {
    const item = getProduct(state, { id });
    return acc + item.price;
  }, 0);
