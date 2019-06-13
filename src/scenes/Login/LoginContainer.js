import { compose, withHandlers, withProps, withState } from 'recompose';
import { connect } from 'react-redux';
import LoginView from './LoginView';
import { withRouter } from 'react-router-dom';
import { authOperations } from '../../modules/auth';
import { routes } from '../router';
import * as Yup from 'yup';


function mapStateToProps(state) {
    return {
        isLoading: state.auth.login.isLoading,
    }
}
const mapDispatchToProps = {
    login: authOperations.login,
}

const enhancer = compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps ),
    withProps({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object().shape({
            email: Yup.string().required('required *').email(),
            password: Yup.string().required('required *').min(8, 'Must be > 8 chars'),            
        }),
    }),
    withState('submitError', 'setSubmitError', ''),
    withHandlers({
        handleSubmit: (props) => async (body) => { 
            try {
                await props.login(body);            
                props.history.push(routes.home);
            } catch (err) {
                props.setSubmitError('Don`t valid email or password');
            }             
        },
    }),
    
);

export default enhancer(LoginView);