import { handleActions } from '@letapp/redux-actions';
import * as actions from './appActions';

const INITIAL_STATE = {
    isLoading: false,
    isError: false,
    error: null,
}

export default handleActions({
    [actions.initialization.start]: (state) => ({
        ...state,        
        isLoading: true,
        error: null,
        isError: false,
    }),
    [actions.initialization.success]: (state) => ({
        ...state,
        isLoading: false,
    }),
    [actions.initialization.error]: (state, actions) => ({
        ...state,
        isLoading: false,
        error: actions.payload,
        isError: true,
    }),
}, INITIAL_STATE);