import * as actions from './authActions';
import Api from '../../api';

export function login(body) {
    return async function loginThunk(dispatch) {
        try {
            dispatch(actions.login.start());
            
            const res = await Api.Auth.login(body);
           
            const { user, token } = res.data;
           
            await Api.Auth.setToken(token);
            
            dispatch(actions.login.success(user));
        } catch (err) {console.log('ERROR LOGIN')
            dispatch(actions.login.error({ message: err.message }))
            throw new Error(err);
        }
    }
};

export function register(body) {
    return async function registerThunk(dispatch) {
        try {
            dispatch(actions.register.start());

            const res = await Api.Auth.register(body);

            const { user, token } = res.data;

            Api.Auth.setToken(token);


            dispatch(actions.register.success(user));
        } catch (err) {
            console.log('error',err);
            dispatch(actions.register.error({ message: err.message }))
            throw new Error(err);
        }
    }
};

export function logout() {
    return async function logoutThunk(dispatch) {
        try {
            dispatch(actions.logout.start());
            
            const res = await Api.Auth.logout();                  
            
            dispatch(actions.logout.success());
        } catch (err) {console.log('ERROR logout')
            dispatch(actions.logout.error({ message: err.message }))
        }
    }
};