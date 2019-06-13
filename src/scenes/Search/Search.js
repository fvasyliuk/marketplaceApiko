import React from 'react';
import T from 'prop-types';
import { Header, SearchBar } from '../../components';
import s from './Search.module.scss';


function Search() {
    return(
        <div className={s.container}>
            <Header>
                <SearchBar />
            </Header>
            Search
        </div>
    );
}

Search.propTypes = {

};

export default Search;