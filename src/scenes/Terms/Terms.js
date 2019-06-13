import React from 'react';
import T from 'prop-types';
import { Header } from '../../components';
import s from './Terms.module.scss';



function Terms(){
    return(
        <div className={s.container}>
            <Header light />
            Terms
        </div>
    );
}

Terms.propTypes = {

};

export default Terms;