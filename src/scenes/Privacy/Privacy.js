import React from 'react';
import T from 'prop-types';
import { Header } from '../../components';
import s from './Privacy.module.scss';


function Privacy(){
    return(
        <div className={s.container}>
            <Header light />   
            Privacy                
        </div>
    );
}

Privacy.propTypes = {

};

export default Privacy;