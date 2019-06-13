import React from 'react';
import T from 'prop-types';
import { Link } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import s from './RestorePassword.module.scss';
import { routes } from '../router';



function RestorePassword({
    handleSubmit, 
    initialValues, 
    validationSchema, 
    isLoading,
}) {

    return (      
        <div className={s.wraper}>
            <div className={s.title}>Restore Password</div>
            <div className={s.container}>                        
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                    render={({errors, touched})=>{
                        
                        return (
                            <Form>                        
                                <div className={s.emailContainer}>
                                    <label htmlFor="email">
                                        Email                           
                                    </label>                                    
                                    {errors.email && touched.email 
                                        ? <div className={s.errorContainer}> 
                                            {errors.email}
                                        </div> 
                                        : null}
                                    <Field                             
                                        name="email" 
                                        placeholder="Example@gmail.com"                                                                 
                                    />
                                </div>                                                        
                                <button type="submit" className={s.submitButton}>
                                    {isLoading 
                                        ? 'Loading...' 
                                        : 'Continue'
                                    }
                                </button>              
                            </Form>
                        )}
                    }
                /> 
            </div>               
        </div>   
    );
};


RestorePassword.propTypes = {

};


export default RestorePassword;