import React from 'react';
import T from 'prop-types';
import { Link } from 'react-router-dom';
import s from './Logo.module.scss';

function Logo({ light ,to, ...props}){
    const src = !light          
        ?"http://localhost:3000/img/Logofull.png"
        :"http://localhost:3000/img/LogofullLight.png";
    return(
        <Link to={to} {...props} >
            <img src={src} alt="Logo" />
        </Link>
    );
}

Logo.propTypes = {

};

export default Logo;