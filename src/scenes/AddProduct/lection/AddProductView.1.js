import React from 'react';
import T from 'prop-types';
import s from './AddProduct.module.scss';
import { FormContainer, FormInput } from '../../components/Form';

function AddProduct() {
   const initialValue = {
       title: '',
       location: '',
   }

   function required(value) {
    if (value.trim().length === 0) {
        return 'Is required'
    } else {
        return undefined;
    }
   }

    return (
        <div className={s.container}>
           <FormContainer initialValue={initialValue}>
                <FormInput 

                    name="title"
                    validate={required}
                    label="TITLE"
                    placeholder="Litties"
                />
                <FormInput 
                    name="location"
                    label="LOCATION"
                    placeholder="For example: Ternopil"
                />
           </FormContainer>
        </div>
    );
};

AddProduct.protoType = {

};

export default AddProduct;