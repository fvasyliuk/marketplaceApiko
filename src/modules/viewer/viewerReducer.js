import { handleActions, combineActions } from '@letapp/redux-actions';
import * as actions from './viewerActions';
import { authActions } from '../auth';

const INITIAL_STATE = {
    fetchViewer: {
        isLoading: false,
        isError: false,
        error: null,
    },
    user: null,
}

export default handleActions({
    [actions.fetchViewer.start]: (state) => ({
        ...state,
        fetchViewer: {
            ...state.fetchViewer,
            isLoading: true,
            error: null,
            isError: false,
        }              
    }),
    [combineActions(
        actions.fetchViewer.success, 
        authActions.login.success, 
        authActions.register.success)
    ]: (state, actions) => ({
        ...state,
        fetchViewer: {
            ...state.fetchViewer,
            isLoading: false,
        },
        user: actions.payload,        
    }),
    [actions.fetchViewer.error]: (state, actions) => ({
        ...state,
        fetchViewer: {
            ...state.fetchViewer,
            isLoading: false,
            error: actions.payload,
            isError: true,
        }        
    }),
    [authActions.logout.start]: (state) => ({
        ...state,          
    }),
    [authActions.logout.success]: (state) => ({
        ...state,     
        user:null,       
    }),
    [actions.fetchViewer.error]: (state, actions) => ({
        ...state,            
    }),
}, INITIAL_STATE);