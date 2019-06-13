import React from 'react';
import s from './FormInput.module.scss';
import { FormContext } from '../FormContainer/FormContainer';

function FormInput({name, validate, ...props}) {

    return (
        <FormContext.Consumer>
            {({formState, onChange, setError, getError}) => {
                function handleChange(value) {
                    if (validate) {
                        setError(name, validate(value))
                    }                    
                    onChange(name, value)
                }           
                
                const error = getError(name);

                return (
                    <div className={s.container}>                        

                        {props.children({
                            ...props,                             
                            error, 
                            handleChange, 
                            value: formState[name],
                        })}  
                            
                    </div> 
                )
            }}                         
        </FormContext.Consumer>              
    )
}

function Input({name, label, ...props}) {    
    return(
        <FormInput name={name} validate={props.validate}>
            {({ handleChange, value, error }) => ( 
                <>   
                    {error && <div>{error}</div>}            
                    <label htmlFor={name}>
                        {label}
                        <input 
                            id={name}
                            value={value} 
                            onChange={(evt) => handleChange(evt.target.value)} 
                            {...props} 
                        />
                    </label>
                </>
            )}            
        </FormInput>
    )
}



export default Input;