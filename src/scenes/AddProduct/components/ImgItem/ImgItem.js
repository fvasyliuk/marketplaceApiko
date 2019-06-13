import React from 'react';
import T from 'prop-types';
import s from './ImgItem.module.scss';


function ImgItem({ src, ...props }){
    return(
        <div  className={s.container}>
            <img {...props}  src={src}  />
        </div>
        
    );
}

ImgItem.propTypes = {

};

export default ImgItem;