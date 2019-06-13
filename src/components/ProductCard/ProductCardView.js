import React from 'react';
import T from 'prop-types';
import s from './ProductCard.module.scss';
import { Link, generatePath } from 'react-router-dom';
import { routes } from '../../scenes/router';
import { Icon } from '../../atoms';



function ProductCard({ 
    img, 
    title, 
    price, 
    id,
    handleLike,
    isSaved,    
    isLoading,
}) {

    return (
        <div className={s.wraper}>
            <Link to={generatePath(routes.product, { id })} >
                <div className={s.container}>
                    <div className={s.imageContainer}>
                        <img src={img} />                    
                    </div>
                    <div className={s.titleContainer}>
                        {title}
                    </div>
                    <div className={s.priceContainer}>
                        $ {price}
                    </div>                
                </div>
            </Link>
            <div className={s.shapeContainer} onClick={handleLike}>
                <Icon name={isSaved ? "ShapeLike.svg" : "ShapeLight.svg"} />
            </div>
        </div>
    );
}

ProductCard.propTypes = {

};


export default ProductCard;