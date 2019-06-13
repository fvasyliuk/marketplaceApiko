import { handleActions } from '@letapp/redux-actions';
import * as actions from './productsActions';

const INITIAL_STATE = {
    latest: {
        items: [],
        isLoading: false,
        isError: false,
        error: null,
    },
    product: {        
        isLoading: false,
        isError: false,
        error: null,
    },
    usersProducts: {
        users: {},
        isLoading: false,
        isError: false,
        error: null,
    },
    saved: {
        items: [],
        isLoading: false,
        isError: false,
        error: null,
    },
    add: {
        isLoading: false,
        isError: false,
        error: null,
    },
    images: {
        items: [],
        isLoading: false,
        isError: false,
        error: null,
    },
}

export default handleActions({
    //latest
    [actions.fetchLatest.start]: (state) => ({
        ...state,
        latest: {
            ...state.latest,
            isLoading: true,
            error: null,
            isError: false,
        }              
    }),
    [actions.fetchLatest.success]: (state, actions) => ({
        ...state,
        latest: {
            ...state.latest,
            items: actions.payload.result,
            isLoading: false,
        },               
    }),
    [actions.fetchLatest.error]: (state, actions) => ({
        ...state,
        latest: {
            ...state.latest,
            isLoading: false,
            error: actions.payload,
            isError: true,
        }        
    }),
    //add product
    [actions.addProduct.start]: (state) => ({
        ...state,
        add: {            
            ...state.add,
            isLoading: true,
            error: null,
            isError: false,
        }              
    }),
    [actions.addProduct.success]: (state, actions) => ({
        ...state,
        add: {
            ...state.add,            
            isLoading: false,
        },   
        latest: {
            ...state.latest,
            items: [actions.payload.result, ...state.latest.items],
        },
        images: {
            ...state.images,
            items: [],
            isLoading: false,
        },            
    }),
    [actions.addProduct.error]: (state, actions) => ({
        ...state,
        add: {
            ...state.add,
            isLoading: false,
            error: actions.payload,
            isError: true,
        }        
    }),
    //add image
    [actions.addImage.start]: (state) => ({
        ...state,
        images: {
            ...state.images,
            isLoading: true,
            error: null,
            isError: false,
        }              
    }),
    [actions.addImage.success]: (state, actions) => ({
        ...state,
        images: {
            ...state.images,
            items: [...state.images.items, actions.payload],
            isLoading: false,
        },               
    }),
    [actions.addImage.error]: (state, actions) => ({
        ...state,
        images: {
            ...state.images,
            isLoading: false,
            error: actions.payload,
            isError: true,
        }        
    }),
    // product
    [actions.fetchProduct.start]: (state) => ({
        ...state,
        product: {
            ...state.product,
            isLoading: true,
            error: null,
            isError: false,
        }              
    }),
    [actions.fetchProduct.success]: (state) => ({
        ...state,
        product: {
            ...state.product,            
            isLoading: false,
        },               
    }),
    [actions.fetchProduct.error]: (state, actions) => ({
        ...state,
        product: {
            ...state.product,
            isLoading: false,
            error: actions.payload,
            isError: true,
        }        
    }),
    // user products
    [actions.fetchUserProducts.start]: (state) => ({
        ...state,
        usersProducts: {
            ...state.usersProducts,
            isLoading: true,
            error: null,
            isError: false,
        }              
    }),
    [actions.fetchUserProducts.success]: (state, actions) => ({
        ...state,
        usersProducts: {
            ...state.usersProducts,
            users: {...state.usersProducts.users, [actions.payload.id]: actions.payload.result},
            isLoading: false,
        },               
    }),
    [actions.fetchUserProducts.error]: (state, actions) => ({
        ...state,
        usersProducts: {
            ...state.usersProducts,
            isLoading: false,
            error: actions.payload,
            isError: true,
        }        
    }),
    // save product
    [actions.saveProduct.start]: (state, actions) => ({
        ...state,
        saved: {  
            ...state.saved,          
            items: [actions.payload.productId].concat(state.saved.items),
            isLoading: true,
            error: null,
            isError: false,
        }              
    }),
    [actions.saveProduct.success]: (state) => ({
        ...state,
        saved: {
            ...state.saved,            
            isLoading: false,
        },               
    }),
    [actions.saveProduct.error]: (state, actions) => ({
        ...state,
        saved: {
            ...state.saved,
            isLoading: false,
            error: actions.payload,
            isError: true,
        }        
    }),
    //unsave product
    [actions.unsaveProduct.start]: (state, actions) => ({
        ...state,
        saved: {  
            ...state.saved,          
            saved: (state.saved.items || []).filter((it) => it !== actions.payload.productId) ,
            isLoading: true,
            error: null,
            isError: false,
        }              
    }),
    [actions.unsaveProduct.success]: (state) => ({
        ...state,
        saved: {
            ...state.saved,            
            isLoading: false,
        },               
    }),
    [actions.unsaveProduct.error]: (state, actions) => ({
        ...state,
        saved: {
            ...state.saved,
            isLoading: false,
            error: actions.payload,
            isError: true,
        }        
    }),
    // fetch saved product
    [actions.fetchSaved.start]: (state) => ({
        ...state,
        saved: {  
            ...state.saved,          
            isLoading: true,
            error: null,
            isError: false,
        }              
    }),
    [actions.fetchSaved.success]: (state, actions) => ({
        ...state,
        saved: {
            ...state.saved,
            items: actions.payload.result,                        
            isLoading: false,
        },               
    }),
    [actions.fetchSaved.error]: (state, actions) => ({
        ...state,
        saved: {
            ...state.saved,
            isLoading: false,
            error: actions.payload,
            isError: true,
        }        
    }),
}, INITIAL_STATE);