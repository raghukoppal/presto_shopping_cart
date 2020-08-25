import { connect } from 'react-redux';
import { Checkout } from './index';
import { getItems, getCurrency, getTotal } from '../../services/cart/reducer';

const mapStateToProps = (state, props) => {
  return {
    items: getItems(state, props),
    currency: getCurrency(state, props),
    total: getTotal(state, props),
  };
};

export default connect(mapStateToProps)(Checkout);
