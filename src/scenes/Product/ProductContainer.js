import { compose, lifecycle, withState, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import ProductView from './ProductView';
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
    save: productsOperations.saveProduct,
    unsave: productsOperations.unsaveProduct,
};

const enhancer = compose(
    withRouter,
    withState('isModalOpen', 'setIsModalOpen', false),
    connect(mapStateToProps, mapDispatchToProps),
    withHandlers({
        toggleModal: (props) => () => {
            props.setIsModalOpen(!props.isModalOpen);
        },
        handleLike: (props) => () => {            
            if(props.product.saved === true) {
                props.unsave(props.product.id);
            } else {
                props.save(props.product.id);
            }            
        },
    }),
    lifecycle({
        componentDidMount() {
            if (!this.props.owner || !this.props.product) {
                this.props.fetchProduct(this.props.match.params.id);
            }
        }
    })
);

export default enhancer(ProductView);