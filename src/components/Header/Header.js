import React from 'react';
import T from 'prop-types';
import s from './Header.module.scss';
import {routes} from '../../scenes/router';
import { Link } from 'react-router-dom';
import Api from '../../api';
import { LinkSell, Shape, Logo, Avatar } from './components';




function Header({ children, light, isSell }){
    return(
        <header className={!light && s.header}>
            <div className={s.widthParams}>
                <div className={!light ? s.topHeader : s.lightTopHeader}>
                    <div className={s.left}> 
                        <Logo light={light} className={s.Logo} to={routes.home} />
                    </div>
                    <div className={s.right}>                         
                        {!isSell 
                            ? <LinkSell 
                                to={{
                                    pathname: routes.addProduct,                                
                                    state: { modal: true }
                                }} 
                            >
                                Sell
                            </LinkSell >
                            : null 
                        }
                        {Api.Auth.isLoggedIn ? <Avatar /> : (     
                            <Link className={s.login} to={routes.login}>logIn</Link>                                
                        )}                
                        <Shape light={light} />                     
                    </div>
                </div>                
                {children}                  
            </div>
        </header>
    );
}

Header.propTypes = {

};


export default Header;