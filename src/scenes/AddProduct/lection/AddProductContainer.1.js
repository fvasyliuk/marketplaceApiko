import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { productsOperations } from '../../modules/products';
import AddProductView from './AddProductView';

const mapStateToProps = (state) => ({
    list: state.products.latest.items,
    isLoading: state.products.latest.isLoading,
});

const enhancer = compose(
       
);

export default enhancer(AddProductView)