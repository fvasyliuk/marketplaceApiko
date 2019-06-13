import React from 'react';
import T from 'prop-types';
import s from './Icon.module.scss';

function Icon({ name, ...props }){
    return(          
        <img src={`http://localhost:3000/svg/${name}`} {...props} />                                   
    );
}

Icon.propTypes = {

};

export default Icon;