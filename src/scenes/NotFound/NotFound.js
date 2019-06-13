import React from 'react';
import T from 'prop-types';
import s from './NotFound.module.scss';

function NotFound(){
    return(
        <div className={s.container}>404 Not Found</div>
    );
}

NotFound.propTypes = {

};

export default NotFound;