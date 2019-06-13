import { createAsyncActions} from '@letapp/redux-actions';

export const fetchLatest = createAsyncActions('products/FETCH_LATEST');
export const addProduct = createAsyncActions('products/ADD_PRODUCT');
export const addImage = createAsyncActions('products/ADD_IMAGE');
export const fetchProduct = createAsyncActions('products/FETCH_PRODUCT');
export const fetchUserProducts = createAsyncActions('products/FETCH_USER_PRODUCT');
export const fetchUser = createAsyncActions('products/FETCH_User');
export const saveProduct = createAsyncActions('products/SAVE');
export const unsaveProduct = createAsyncActions('products/UNSAVE');
export const fetchSaved = createAsyncActions('products/FETCH_SAVED');