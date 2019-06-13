import { connect } from 'react-redux';
import { compose, withState, withHandlers } from 'recompose'
import { withRouter, generatePath } from 'react-router-dom';
import { viewerSelectors } from '../../../../modules/viewer';
import { routes } from '../../../../scenes/router';
import Api from '../../../../api';
import Avatar from './AvatarView';
import { authOperations } from '../../../../modules/auth';



Avatar.propTypes = {

};

const mapStateToProps = (state) => ({
    user: viewerSelectors.getUser(state),
});

const mapDispatchToProps = {
    logout: authOperations.logout,
}

const enhancer = compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
    withState('hidden', 'setHidden', true),    
    withHandlers({
        handleLogout: props => async () =>{            
            await props.logout();
            props.history.push(routes.home);
        },
        handleCharsName: (props) => (fullName) => fullName.split(' ').reduce((acc, it)=>acc+it[0],''),
        handleProfile: (props) => () => {
            props.history.push(generatePath(routes.users, {id: props.user.id}));
        }
    })
);

export default enhancer(Avatar);