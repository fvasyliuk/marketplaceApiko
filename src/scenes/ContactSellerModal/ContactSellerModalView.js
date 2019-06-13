import React from 'react';
import T from 'prop-types';
import { Redirect } from 'react-router-dom';
import s from './ContactSellerModal.module.scss';
import { Avatar } from '../../components';
import Api from '../../api';
import { routes } from '../router';

function ContactSellerModalView ({ 
    product, 
    owner, 
    text, 
    setText, 
    submit,
    disabled,
    isLoadingSendMessage, 
    isLoadingCreateChat,
}) {
    if (!Api.Auth.isLoggedIn) {
        return <Redirect to={routes.login} />
    } 
    
    return (
        <div className={s.wrap}>
            <div className={s.title}>Contact seller</div>
            <div className={s.container}> 
                <div className={s.subject}> Subject: {product.title}  </div> 
                <div className={s.owner}>
                    <Avatar name={owner.fullName} src={owner.avatar} size="72" /> 
                    <div className={s.avatarTextContainer}>
                        <div className={s.name}>{owner.fullName}</div>
                        <div className={s.location}>{owner.location ? owner.location : null }</div>
                    </div>
                </div>
                <label htmlFor="message">Message</label>
                <textarea 
                
                    placeholder="For example: Iron man suit"
                    name="message"
                    value={text}
                    onChange={(evt) => setText(evt.target.value)} 
                />

                <button className={s.modalButton} disabled={disabled} onClick={submit} type="button">
                    { !isLoadingSendMessage && !isLoadingCreateChat ? 'Submit' : 'Loading ...' }
                </button>
            </div>
        </div>
    );
};

ContactSellerModalView.propTypes = {

};

export default ContactSellerModalView;


