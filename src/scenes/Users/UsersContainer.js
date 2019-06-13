import { compose, lifecycle, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import UsersView from './UsersView';
import { withRouter } from 'react-router-dom';
import { productsOperations, productsSelectors } from '../../modules/products';


function mapStateToProps(state, props) {
    return {
        productsList: productsSelectors.getUserProducts(state, props.match.params.id),
        user: productsSelectors.getUser(state, props.match.params.id),
        isLoading: state.products.usersProducts.isLoading,
    };
};

const mapDispatchToProps = {
    fetchUserProducts: productsOperations.fetchUserProducts,
    fetchUser: productsOperations.fetchUser,

};

const enhancer = compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
    lifecycle({
        componentDidMount() {
            if (!this.props.productsList) {
                this.props.fetchUserProducts(this.props.match.params.id);
            } 
            if (!this.props.user) {
                this.props.fetchUser(this.props.match.params.id);
            }
        },
        componentDidUpdate(prevProps) {
            if (this.props.match.params.id !== prevProps.match.params.id) {
                if (!this.props.productsList) {
                    this.props.fetchUserProducts(this.props.match.params.id);
                } 
                if (!this.props.user) {
                    this.props.fetchUser(this.props.match.params.id);
                }
            }             
        }
    }),
);

export default enhancer(UsersView);