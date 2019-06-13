import React from 'react';
import T from 'prop-types';
import s from './Button.module.scss';

function Button({ children, ...props}){
    return(
        <button className={s.button} {...props}>
            <div className={s.button_container}>
                {children}
            </div>
        </button>
    );
}

Button.propTypes = {

};

export default Button;