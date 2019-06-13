import { compose, lifecycle, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import SavedProductsView from './SavedProductsView';
import { withRouter } from 'react-router-dom';
import { productsOperations, productsSelectors } from '../../modules/products';


function mapStateToProps(state) {
    return {
        savedList: productsSelectors.getSavedProducts(state),
        isLoading: state.products.saved.isLoading,
    };
};

const mapDispatchToProps = {
    fetchSaved: productsOperations.fetchSaved,
};

const enhancer = compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
    lifecycle({
        componentDidMount() {
            this.props.fetchSaved();
        },        
    }),
);

export default enhancer(SavedProductsView);