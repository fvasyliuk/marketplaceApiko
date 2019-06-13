import React from 'react';
import T from 'prop-types';
import { Link } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import s from './Login.module.scss';
import { routes } from '../router';



function Login({
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
                    Login    
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
                                    <div className={s.rememberPassword}>
                                        <Link to={routes.reset}>Don’t remember password?</Link>
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
                I have no account, <Link to={routes.register}>REGISTER NOW</Link>
            </div>
        </>
    );
};


Login.propTypes = {

};


export default Login;