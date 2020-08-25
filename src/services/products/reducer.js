// reducer
export const products = (state = []) => state;

// selectors
export const getProducts = (state) => state.products;

export const getProduct = (state, props) =>
  state.products.find((item) => item.id === props.id);
