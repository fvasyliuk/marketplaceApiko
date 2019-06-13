import React from 'react';
import s from './Input.module.scss';

function Input({
    label,
    onChange,
    name,
    fields,
    ...props
}) {
    return (
        <div className={s.container}>
            <label htmlFor={name}>
                {label}
                <input value={fields[name]} onChange={(evt) => onChange(name, evt.target.value)} {...props} />
            </label>            
        </div>        
    )
}

export default Input;