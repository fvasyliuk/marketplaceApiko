import React from 'react';
import T from 'prop-types';
import s from './Avatar.module.scss';


function Avatar({ src, size, name }) {
    const char = name.split(' ').reduce((acc, it)=>acc+it[0],'')
    return(   
        <>     
            {src 
                ? <img 
                    className={s.avatar}
                    src={src} 
                    alt="avatar" 
                    style={{height: `${size}px`, width: `${size}px`}}
                />
                : <div className={s.avatarText } style={{height: `${size}px`, width: `${size}px`}}>
                    {char}
                </div>
            }
        </>
    );
}

Avatar.propTypes = {

};

export default Avatar;