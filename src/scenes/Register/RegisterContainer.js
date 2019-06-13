import { compose, withProps, withState, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { authOperations } from '../../modules/auth'
import { routes } from '../router';
import RegisterView from './RegisterView';
import * as Yup from 'yup';


const mapStateToProps = (state) => ({
    isLoading: state.auth.register.isLoading,
});

const mapDispatchToProps = {
    register: authOperations.register,
}

const enhancer = compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps ),
    withProps({
        initialValues: {
            email: '',
            fullName: '',
            password: '',
            passwordAgain: '',
        },
        validationSchema: Yup.object().shape({
            email: Yup.string().required('required *').email(),
            fullName: Yup.string().required('required *'),
            password: Yup.string().required('required *').min(8, 'Must be > 8 chars'),     
            passwordAgain: Yup.string().required('required *').oneOf([Yup.ref('password'), null], 'Passwords must match')
        }),
    }),
    withState('submitError', 'setSubmitError', ''),
    withHandlers({
        handleSubmit: (props) => async (body) => { 
            const newBody = {
                email: body.email,
                fullName: body.fullName,
                password: body.password,
            }
            console.log({newBody})
            try {
                await props.register(newBody);            
                props.history.push(routes.home);
            } catch (err) {
                props.setSubmitError('this email is already registered');
            }             
        },
    }),
    
);




export default enhancer(RegisterView);