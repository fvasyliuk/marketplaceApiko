import * as actions from './messagesActions';
import Api from '../../api';
import { viewerOperations, viewerSelectors } from '../viewer';
import { normalize } from 'normalizr';
import { MessageCollection, Message } from '../../api/schemas';
import { createMessage } from './messagesCreators';

export function sendMessage(chatId, text) {
    return async function sendMessageThunk(dispatch, getState) {
        const user = viewerSelectors.getUser(getState());

        const message = createMessage({ chatId, text, ownerId: user.id });
        const normalizedMessage = normalize(message, Message)

        try {
            dispatch(actions.sendMessage.start({chatId, ...normalizedMessage}));

            const res = await Api.Messages.sendMessage(chatId, text); 

            const { result, entities } = normalize(res.data, Message);
            
            dispatch(actions.sendMessage.success({ 
                chatId, 
                result, 
                entities,
                oldMessageId: normalizedMessage.result, 
            }));
        } catch (err) {
            console.log(err);
            dispatch(actions.sendMessage.error({ message: err.message }))
        }
    }
};

export function fetchMessages(chatId) {
    return async function fetchMessagesThunk(dispatch) {
        try {
            dispatch(actions.fetchMessages.start());

            const res = await Api.Messages.fetchMessages(chatId);
            
            const { result, entities } = normalize(res.data, MessageCollection);
           
            dispatch(actions.fetchMessages.success({ chatId, result, entities }));
        } catch (err) {
            console.log(err);
            dispatch(actions.fetchMessages.error({ message: err.message }))
        }
    }
};

export function handleMessageRealtime(evt) {
    return async function handleMessageRealtimeThunk(dispatch) {
        if (evt.type === 'ADD') {
            dispatch(addMessage(evt.message))
        }
    }
};

export function addMessage(message) {
    return async function addMessageThunk(dispatch) {
              
        dispatch(
            actions.sendMessage.start({
                chatId: message.chatId,
                ...normalize(message, Message),
            })
        );         
    }
};