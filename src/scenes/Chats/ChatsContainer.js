import { connect } from 'react-redux';
import { compose, withHandlers, lifecycle, withState } from 'recompose';
import { withRouter } from 'react-router-dom';
import { messagesOperations, messagesSelectors } from '../../modules/messages';
import ChatsView from './ChatsView';
import { chatsSelectors } from '../../modules/chats';


const mapStateToProps = (state, props) => {

    return {
        isLoading: state.messages.fetchMessages.isLoading,
        items: messagesSelectors.getMessages(state, props.match.params.id),
        user: chatsSelectors.getUserWithChatId(state, props.match.params.id),
    }
};

const mapDispatchToProps = {
    fetchMessages: messagesOperations.fetchMessages,
    sendMessages: messagesOperations.sendMessage,
};

const enhancer = compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
    withState('text', 'setText', ''),
    withHandlers({
        sendMessage: props => () => {
            props.sendMessages(props.match.params.id, props.text);
            props.setText('');
        },
    }),
    lifecycle({
        componentDidMount() {
            this.props.fetchMessages(this.props.match.params.id);
        },
        componentDidUpdate(prevProps) {
            if (this.props.match.params.id !== prevProps.match.params.id) {
                this.props.fetchMessages(this.props.match.params.id);
            }             
        },
    })
);

export default enhancer(ChatsView)