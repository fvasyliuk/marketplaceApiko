import React from 'react';
import T from 'prop-types';
import { ProductCard, Avatar } from '../../components';
import s from './Users.module.scss';


function Users({ user, productsList }) {
    if ( !user ) {
        return 'Loading ...'
    }
    
    return(
        <div className={s.container}>
            <div className={s.topWraper}>
                <div className={s.userContainer}>
                    <Avatar src={user.avatar} size='95' name={user.fullName} />                    
                    <div className={s.name}>{user.fullName}</div>
                    <div className={s.bottom}>{user.location ? user.location : null}</div>
                </div>
                <div></div>
            </div>
            <div className={s.productContainer}>
                {
                    productsList 
                        ?productsList.slice(0,8).map(it => 
                            <div className={s.productItem}>
                                <ProductCard 
                                    img={it.photos? it.photos[0] : null} 
                                    title={it.title} 
                                    price={it.price} 
                                    id={it.id}
                                />
                            </div>
                            
                                   
                        )
                             
                        : 'Loading ...'
                }
                
            </div>
        </div>
    );
}

Users.propTypes = {

};

export default Users;