import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import ProfileView from './ProfileView';
import { withRouter } from 'react-router-dom';
import { productsOperations, productsSelectors } from '../../modules/products';


function mapStateToProps(state, props) {
    return {
        product: productsSelectors.getProduct(state, props.match.params.id),
        owner: productsSelectors.getProductOwner(state, props.match.params.id),
        isLoading: state.products.product.isLoading,
    };
};

const mapDispatchToProps = {
    fetchProduct: productsOperations.fetchProduct,
};

const enhancer = compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
    lifecycle({
        componentDidMount() {
            if (!this.props.owner || !this.props.product) {
                this.props.fetchProduct(this.props.match.params.id);
            }
        }
    })
);

export default enhancer(ProfileView
    );