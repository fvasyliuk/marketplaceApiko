import React from 'react';
import T from 'prop-types';
import { ProductCard } from '../../components';
import s from './SavedProducts.module.scss';


function SavedProducts({ savedList, isLoading }) {

    
    return(
        <div className={s.container}>
            <div className={s.topWraper}>
            </div>
            <div className={s.productContainer}>
                {                    
                    savedList.map(item => 
                        <div className={s.productItem}>
                            <ProductCard 
                                title={item.title} 
                                img={item.photos
                                    ? item.photos[0]
                                    : undefined} 
                                price={item.price} 
                                id={item.id}
                                isSaved = {item.saved}
                            />  
                        </div>                                      
                    )
                }
                
            </div>
        </div>
    );
}

SavedProducts.propTypes = {

};

export default SavedProducts;