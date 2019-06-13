import React from 'react';
import T from 'prop-types';
import s from './Icon.module.scss';

function Icon({ name, ...props }){
    return(          
        <img src={`https://intense-earth-67837.herokuapp.com/svg/${name}`} {...props} />                                   
    );
}

Icon.propTypes = {

};

export default Icon;