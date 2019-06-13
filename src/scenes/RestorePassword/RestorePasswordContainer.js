import { compose, withHandlers, withProps, withState } from 'recompose';
import { connect } from 'react-redux';
import RestorePassword from './RestorePasswordView';
import { withRouter } from 'react-router-dom';
import { authOperations } from '../../modules/auth';
import { routes } from '../router';
import * as Yup from 'yup';


function mapStateToProps(state) {
    return {
        isLoading: state.auth.restorePassword.isLoading,
    }
}
const mapDispatchToProps = {
    restorePassword: authOperations.restorePassword,
}

const enhancer = compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps ),
    withProps({
        initialValues: {
            email: '',
        },
        validationSchema: Yup.object().shape({
            email: Yup.string().required('required *').email(),                      
        }),
    }),
    withHandlers({
        handleSubmit: (props) => async (body) => { 
            try {
                //await props.restorePassword(body);           
                alert('повідомлення із інструкціями надіслано на пошту');
                
            } catch (err) {
                console.error(err)
            }             
        },
    }),
    
);

export default enhancer(RestorePassword);