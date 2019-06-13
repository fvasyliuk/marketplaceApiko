import React from 'react';
import T from 'prop-types';
import { Header, SearchBar } from '../../components';
import s from './Listings.module.scss';


function Listings() {
    return(
        <div className={s.container}>
            <Header>
                <SearchBar />
            </Header>
            Listings
        </div>
    );
}

Listings.propTypes = {

};

export default Listings;