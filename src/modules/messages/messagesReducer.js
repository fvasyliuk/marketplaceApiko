import { handleActions } from '@letapp/redux-actions';
import * as actions from './messagesActions';

const INITIAL_STATE = {
    items: {
        //[chatId]: [],
    },

    sendMessage: {
        isLoading: false,
        isError: false,
        error: null,
    },

    fetchMessages: {
        isLoading: false,
        isError: false,
        error: null,
    },
}

export default handleActions({
    [actions.sendMessage.start]: (state, {payload: { chatId, result }}) => ({
        ...state,    
        items: {
            ...state.items,
            [chatId]: (state.items[chatId] || []).concat(result), 
        },    
        sendMessage: {
            ...state.sendMessage,
            isLoading: true,
            error: null,
            isError: false,
        },
    }),
    [actions.sendMessage.success]: (
        state, 
        {payload: { chatId, result, oldMessageId }}
    ) => {
        const items = state.items[chatId]
            .filter(i => i !==oldMessageId)
            .concat(result)
        return ({
            ...state,
            items: {
                ...state.items,
                [chatId]: items, 
            },
            sendMessage: {
                ...state.sendMessage,
                isLoading: false,
            },       
        }) 
    },
    [actions.sendMessage.error]: (state, actions) => ({
        ...state,
        sendMessage: {
            ...state.sendMessage,
            isLoading: false,
            error: actions.payload,
            isError: true,
        },        
    }),
    [actions.fetchMessages.start]: (state) => ({
        ...state,        
        fetchMessages: {
            ...state.fetchMessages,
            isLoading: true,
            error: null,
            isError: false,
        },
    }),
    [actions.fetchMessages.success]: (state, {payload: { chatId, result }}) => ({
        ...state,
        items: {
            ...state.items,
            [chatId]: result.reverse(), 
        },
        fetchMessages: {
            ...state.fetchMessages,
            isLoading: false,
        },        
    }),
    [actions.fetchMessages.error]: (state, actions) => ({
        ...state,
        fetchMessages: {
            ...state.fetchMessages,
            isLoading: false,
            error: actions.payload,
            isError: true,
        },        
    }),
}, INITIAL_STATE);