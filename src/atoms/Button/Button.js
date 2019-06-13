import React from 'react';
import T from 'prop-types';
import s from './Button.module.scss';

function Button({ children, color, ...props}){

    return(
        <button className={s.button} {...props} style={{background: color}}>
            <div className={s.button_container}>
                {children}
            </div>
        </button>
    );
}

Button.propTypes = {

};

Button.defaultProps = {
    color: '#000000',
};

export default Button;