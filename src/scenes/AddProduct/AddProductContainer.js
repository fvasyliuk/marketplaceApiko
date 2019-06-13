import { connect } from 'react-redux';
import { compose, withProps, withHandlers } from 'recompose';
import { withRouter, generatePath } from 'react-router-dom';
import { productsOperations } from '../../modules/products';
import AddProductView from './AddProductView';
import { routes } from '../router';
import * as Yup from 'yup';

const mapStateToProps = (state) => ({  
    imagesList: state.products.images.items,
    isLoadingImg: state.products.images.isLoading,
    isLoading: state.products.add.isLoading,
});

const mapDispatchToProps = {    
    addProduct: productsOperations.addProduct,
    uploadImg: productsOperations.uploadImage,
}


export const enhancer = compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
    withProps({
        initialValues: {
            title: '',
            location: '',
            description: '', 
            price: '',
        },
        validationSchema: Yup.object().shape({
            title: Yup.string().trim().required('required'),
            location: Yup.string().trim().required('required'),
            price: Yup.number('number field').required('required'),
        })
    }),
    withHandlers({
        onSubmit: (props) => async (body)=> { 
            const newBody ={
                title: body.title,
                location: body.location,
                price: body.price,
            };
            if ( body.description ) {
                newBody.description = body.description
            }            
            
            newBody.photos = props.imagesList;  
            try {
                const linkID =await props.addProduct(newBody);
                props.history.push(generatePath(routes.product, { id: linkID }));
            } catch (err) {
                console.log(err);
            }
                        
            
        },
        uploadImage: (props) => (evt) => props.uploadImg(evt.target.files[0])
    }),
    
);


export default enhancer(AddProductView)