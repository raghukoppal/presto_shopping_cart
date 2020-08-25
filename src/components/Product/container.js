import { connect } from 'react-redux';
import { Product } from './index';
import { addToCart, removeFromCart } from '../../services/cart/actions';
import { isInCart } from '../../services/cart/reducer';

const mapStateToProps = (state, props) => ({
  isInCart: isInCart(state, props),
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (id) => dispatch(addToCart(id)),
  removeFromCart: (id) => dispatch(removeFromCart(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
