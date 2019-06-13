import React from 'react';
import T from 'prop-types';
import s from './Shape.module.scss';
import { Link } from 'react-router-dom';
import { routes } from '../../../../scenes/router';

function Shape({light, ...props}){
    const src = !light                     
                    ?"http://localhost:3000/svg/Shape.svg"
                    :"http://localhost:3000/svg/ShapeLight.svg" ;
    return(        
        <Link to={routes.saved} className={s.container}>            
            <img className={s.shape} src={src} alt="Shape" />
        </Link>
    );
}

Shape.propTypes = {

};

export default Shape;