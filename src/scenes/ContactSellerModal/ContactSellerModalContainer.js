import { connect } from 'react-redux';
import { compose, withState, withHandlers, withProps } from 'recompose';
import { withRouter, generatePath } from 'react-router-dom';
import { productsOperations, productsSelectors } from '../../modules/products';
import { chatsOperations } from '../../modules/chats';
import ContactSellerModalView from './ContactSellerModalView';
import { messagesOperations } from '../../modules/messages';
import { routes } from '../router';
import Api from '../../api';



const mapStateToProps = (state, { productId }) => ({
    isLoadingSendMessage: state.messages.sendMessage.isLoading,
    isLoadingCreateChat: state.chats.createChat.isLoading,
    product: productsSelectors.getProduct(state, productId),
    owner: productsSelectors.getProductOwner(state, productId),
});

const mapDispatchToProps = {
    createChat: chatsOperations.createChat, 
    sendMessage: messagesOperations.sendMessage,
}

const enhancer = compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
    withState('text', 'setText', ''),
    withHandlers({
        submit: (props) => async () => {
            let chatId;
            if (!props.product.chatId) {
                chatId = await props.createChat(props.product.id); 
                await Api.Chats.fetch();               
            }
          
            const id = props.product.chatId
                ? props.product.chatId
                : chatId;
            await props.sendMessage(id, props.text);
            
            props.history.push(generatePath(routes.chat, { id }));                   
        },
    }),
    withProps((props) => ({
        disabled: props.text.trim().length === 0,
    }))
);

export default enhancer(ContactSellerModalView)