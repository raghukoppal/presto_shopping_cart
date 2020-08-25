import { connect } from 'react-redux';
import { Cart } from './index';
import { getItems, getCurrency, getTotal } from '../../services/cart/reducer';
import { removeFromCart } from '../../services/cart/actions';

const mapStateToProps = (state, props) => {
  return {
    items: getItems(state, props),
    currency: getCurrency(state, props),
    total: getTotal(state, props),
  };
};

const mapDispatchToProps = (dispatch) => ({
  removeFromCart: (id) => dispatch(removeFromCart(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
