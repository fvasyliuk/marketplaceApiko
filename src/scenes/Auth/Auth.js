import React from 'react';
import T from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import s from './Auth.module.scss';
import { Header } from '../../components';
import { routes } from '../router';
import { RestorePassword, Login, Register} from '../';
import Api from '../../api';


function Auth({ location }){
    
    return(        
        <div className={s.container}>
            <Header light />                        
            <Switch>               
                <Route exact path={routes.login} component={Login} />
                <Route exact path={routes.register} component={Register} />
                <Route exact path={routes.reset} component={RestorePassword} />
                <Redirect to={routes.login} />
            </Switch>  
        </div>
    );
}

Auth.propTypes = {

};

export default Auth;