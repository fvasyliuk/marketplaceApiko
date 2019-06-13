import React from 'react';
import T from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import Api from '../../api';
import { routes } from '../../scenes/router';
import s from './PrivateRoute.module.scss';


function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>{
        
        if (rest.isLoggedOut) {
          return(
            !Api.Auth.isLoggedIn ? (
              <Component {...props} />
            ) : (
              <Redirect to={routes.home} />
            )
          )
        }
        return(
          Api.Auth.isLoggedIn ? (
            <Component {...props} />
          ) : (
            <Redirect to={routes.login} />
          )
        )
      }}
    />
  );
}


  
PrivateRoute.propTypes = {

};

export default PrivateRoute;