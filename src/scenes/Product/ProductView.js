import React from 'react';
import T from 'prop-types';
import Modal from 'react-modal';
import { Icon } from '../../atoms';
import { UserCard, PrivateRoute } from './components';
import s from './Product.module.scss';
import ContactSellerModal from '../ContactSellerModal/ContactSellerModalContainer';


Modal.setAppElement('#root');

function Product({ 
    product, 
    owner, 
    isLoading,  
    isModalOpen,
    toggleModal, 
    handleLike,
}) {
    const shouldShowLoading = isLoading || !owner;

    if (!product) {
        return <div>Loading ...</div>
    }

    return (
        <div className={s.container}>
            <div className={s.productContainer}>       
                <div className={s.photoContainer}> 
                    <img src={product.photos ? product.photos[0]: undefined} />               
                    <div className={s.price}>
                        ${ product.price }
                    </div>
                </div>
                <div className={s.titleContainer}>   
                    { product.title }
                    <div className={s.createdInfo}>
                        { product.createdAt }
                    </div>                                
                </div>
                <div className={s.locationContainer}> 
                    <div className={s.iconLocation}>
                        <Icon name="location_filled.svg" />
                    </div>
                    { product.location }                               
                </div>
                <div className={s.descriptionContainer}>                
                    { product.description }
                </div>            
            </div>
            <div className={s.rightContainer}>            
                <div>
                    { shouldShowLoading 
                        ? 'Loading ...' 
                        : <UserCard user={owner} /> 
                    }
                </div>                  
                <button type="button" onClick={toggleModal} className={s.chat}>
                    Chat with seller
                </button>                    
                <div className={s.favorive} onClick={handleLike}>
                    <div className={s.iconShape}>
                        <Icon name={product.saved ? "ShapeLike.svg" : "ShapeLight.svg"} />
                    </div>                    
                    Add to favorive
                </div>                
            </div>            
            <Modal 
                onRequestClose={toggleModal} 
                isOpen={isModalOpen} 
                className={s.modal} 
            >
                <ContactSellerModal 
                    productId={product.id} 
                    onClose={toggleModal} 
                />
            </Modal>        
        </div>
    );
}

Product.propTypes = {

};


export default Product;