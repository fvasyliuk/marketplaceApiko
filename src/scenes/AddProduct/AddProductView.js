import React from 'react';
import T from 'prop-types';
import s from './AddProduct.module.scss';
import { Formik, Field, Form } from 'formik';
import { Header } from '../../components';
import { UploadInput, ImgItem, LoadingUpdate } from './components';


function AddProduct({
    onSubmit, 
    initialValues, 
    validationSchema, 
    uploadImage, 
    imagesList, 
    isLoadingImg,
    isLoading,
}) {

    return (
        <div>
            <Header isSell /> 
            <div className={s.container}>
                <div className={s.formTitle}>Add product</div>            
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                    render={({
                        errors, 
                        touched,
                    })=>{
                        
                        return (
                            <Form>                        
                                <div className={s.headerFild}>
                                    <label htmlFor="title">
                                        Title                           
                                    </label>
                                    *
                                    {errors.title && touched.title ? <div> {errors.title}</div> : null}
                                </div>
                                <Field                             
                                    name="title" 
                                    placeholder="For example: Los Angeles, CA"                                                                 
                                />
                                <div className={s.headerFild}>
                                    <label htmlFor="location">
                                        Location                           
                                    </label>
                                    *
                                    {errors.location && touched.location ? <div> {errors.location}</div> : null}
                                </div>                         
                                <Field                            
                                    name="location" 
                                    placeholder="For example: Ternopil"                                 
                                />   
                                <label htmlFor="description">
                                    Description                            
                                </label>   
                                <Field 
                                    name="description" 
                                    placeholder="For example: Iron man suit"   
                                    component="textarea"                              
                                />
                                <label htmlFor="photos">
                                    Photos                           
                                </label>
                                <div className={s.containerPhotos}>                                                                                                      
                                    {imagesList.map((it) => <ImgItem src={it} key={it} />)} 
                                    {isLoadingImg? <LoadingUpdate />:null}                                                                     
                                    { imagesList.length < 7? <UploadInput onChange={uploadImage} /> : null }
                                </div>
                                <div className={s.headerFild}>
                                    <label htmlFor="price">
                                        Price                           
                                    </label>
                                    *
                                    {errors.price && touched.price ? <div> {errors.price}</div> : null}
                                </div>     
                                <Field 
                                    name="price" 
                                                                       
                                    placeholder="For example: 0"                                                                                               
                                />    
                                <button 
                                    type="submit" 
                                    disabled={!!Object.keys(errors).length}                                    
                                >
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
    );
};

AddProduct.protoType = {

};

export default AddProduct;