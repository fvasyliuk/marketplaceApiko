import React from 'react';
import T from 'prop-types';
import { Icon } from '../';
import s from './Input.module.scss';

function Input({name , ...props}){
    let textInput = React.createRef();
    return(       
        <div className={s.container} onClick={()=>textInput.current.focus()}>
            <Icon className={s.icon} name={name} />
            <input  className={s.input} ref={textInput} {...props} />
        </div>                            
    );
}

Input.propTypes = {

};

export default Input;