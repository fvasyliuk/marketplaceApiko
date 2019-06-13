import React from 'react';
import T from 'prop-types';
import s from './ProductCard.module.scss';
import { Link, generatePath } from 'react-router-dom';
import { routes } from '../../scenes/router';
import ProductCard from './ProductCardView';
import { connect } from 'react-redux';
import { compose, withHandlers, withState } from 'recompose';
import { productsOperations, productsSelectors } from '../../modules/products';

const mapStateToProps = (state, props) => ({
    isLoading: state.products.saved.isLoading,
    product: productsSelectors.getProduct(state, props.id)
})

const mapDispatchToProps ={
    save: productsOperations.saveProduct,
    unsave: productsOperations.unsaveProduct,
}

const enhancer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withHandlers({
        handleLike: (props) => () => {            
            if(props.product.saved === true) {
                props.unsave(props.id);
            } else {
                props.save(props.id);
            }
            
        }
    })
)


export default enhancer(ProductCard);