import React from 'react';
import T from 'prop-types';
import { Link } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import s from './Register.module.scss';
import { routes } from '../router';



function Register({
    handleSubmit, 
    initialValues, 
    validationSchema, 
    isLoading,
    submitError,
}) {

    return (  
        <>
            <div className={s.wraper}>
                <div className={s.title}>    
                    Register    
                </div>   
                <div className={s.errorContainer} >
                    {submitError? submitError : null}
                </div>
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

                                    <div className={s.fullNameContainer}>
                                        <label htmlFor="fullName">
                                            Full name                           
                                        </label>                                    
                                        {errors.fullName && touched.fullName 
                                            ? <div className={s.errorContainer}> 
                                                {errors.fullName}
                                            </div> 
                                            : null}
                                        <Field                             
                                            name="fullName" 
                                            placeholder="Tony Stark"                                                                 
                                        />
                                    </div>
                                    
                                    <div className={s.passwordContainer}>
                                        <label htmlFor="password">
                                            Password                           
                                        </label>
                                        {errors.password && touched.password 
                                            ? <div className={s.errorContainer}> 
                                                {errors.password}
                                            </div> 
                                            : null
                                        }
                                        <Field  
                                            type="password"                          
                                            name="password"                                                                  
                                        />    
                                    </div>  

                                    <div className={s.passwordAgainContainer}>
                                        <label htmlFor="passwordAgain">
                                        Password again                           
                                        </label>
                                        {errors.passwordAgain && touched.passwordAgain 
                                            ? <div className={s.errorContainer}> 
                                                {errors.passwordAgain}
                                            </div> 
                                            : null
                                        }
                                        <Field  
                                            type="password"                          
                                            name="passwordAgain"                                                                  
                                        />    
                                    </div>     

                                    <button type="submit" className={s.submitButton}>
                                        {isLoading 
                                            ? 'Loading...' 
                                            : 'Submit'
                                        }
                                    </button>              
                                </Form>
                            )}
                        }
                    />                
                </div>       
            </div> 
            <div className={s.bottom}>
            I already have an account, <Link to={routes.login}>LOG IN</Link>
            </div>
        </>
    );
};


Register.propTypes = {

};


export default Register;