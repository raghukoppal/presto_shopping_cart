import { connect } from 'react-redux';
import { ProductList } from './index';
import { getProducts } from '../../services/products/reducer';

const mapStateToProps = (state, props) => ({
  products: getProducts(state, props),
});

export default connect(mapStateToProps)(ProductList);
