import React from 'react';
import T from 'prop-types';
import s from './LinkSell.module.scss';
import { Link } from 'react-router-dom';

function LinkSell({ children, ...props}){
    return(
        <Link className={s.header_button} {...props}>
            <div className={s.button_container}>
                {children}
            </div>
        </Link>
    );
}

LinkSell.propTypes = {

};

export default LinkSell;