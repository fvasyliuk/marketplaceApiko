import { handleActions } from '@letapp/redux-actions';
import * as actions from './chatsActions';

const INITIAL_STATE = {
    items: [],

    createChat: {
        isLoading: false,
        isError: false,
        error: null,
    },

    fetchChats: {
        isLoading: false,
        isError: false,
        error: null,
    },
}

export default handleActions({
    [actions.createChat.start]: (state) => ({
        ...state,        
        createChat: {
            ...state.createChat,
            isLoading: true,
            error: null,
            isError: false,
        },
    }),
    [actions.createChat.success]: (state, actions) => ({
        ...state,
        items: [actions.payload.result].concat(state.items),
        createChat: {
            ...state.createChat,
            isLoading: false,
        },        
    }),
    [actions.createChat.error]: (state, actions) => ({
        ...state,
        createChat: {
            ...state.createChat,
            isLoading: false,
            error: actions.payload,
            isError: true,
        },        
    }),
    [actions.fetchChats.start]: (state) => ({
        ...state,        
        fetchChats: {
            ...state.fetchChats,
            isLoading: true,
            error: null,
            isError: false,
        },
    }),
    [actions.fetchChats.success]: (state, actions) => ({
        ...state,
        items: actions.payload.result,
        fetchChats: {
            ...state.fetchChats,
            isLoading: false,
        },        
    }),
    [actions.fetchChats.error]: (state, actions) => ({
        ...state,
        fetchChats: {
            ...state.fetchChats,
            isLoading: false,
            error: actions.payload,
            isError: true,
        },        
    }),
}, INITIAL_STATE);