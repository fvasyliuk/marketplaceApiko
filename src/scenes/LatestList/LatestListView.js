import React from 'react';
import T from 'prop-types';
import { Link, generatePath } from 'react-router-dom';
import s from './LatestList.module.scss';
import { routes } from '../router';
import { ProductCard } from '../../components';

function LatestList({ list, isLoading }) {
    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        <div className={s.container}>
            {list.map(item => (
                <div className={s.card} key={item.id} >                    
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
            ))}
        </div>
    );
};

LatestList.protoType = {

};

export default LatestList;