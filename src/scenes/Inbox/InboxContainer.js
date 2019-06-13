import { connect } from 'react-redux';
import { compose, withHandlers, lifecycle } from 'recompose';
import { chatsOperations, chatsSelectors } from '../../modules/chats';
import InboxView from './InboxView';


const mapStateToProps = (state) => ({
    isLoading: state.chats.fetchChats.isLoading,
    items: chatsSelectors.getChatsWithLastMessage(state),
    products: chatsSelectors.getTitleChats(state),
});

const mapDispatchToProps = {
    fetchChats: chatsOperations.fetchChats,
};

const enhancer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withHandlers({}),
    lifecycle({
        componentDidMount() {
            this.props.fetchChats();
        }
    })
);

export default enhancer(InboxView)