import React from 'react';
import T from 'prop-types';
import { Link } from 'react-router-dom';
import s from './Logo.module.scss';

function Logo({ light ,to, ...props}){
    const src = !light          
        ?"https://intense-earth-67837.herokuapp.com/img/Logofull.png"
        :"https://intense-earth-67837.herokuapp.com/img/LogofullLight.png";
    return(
        <Link to={to} {...props} >
            <img src={src} alt="Logo" />
        </Link>
    );
}

Logo.propTypes = {

};

export default Logo;