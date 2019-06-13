import React from 'react';
import T from 'prop-types';
import { Header, SearchBar } from '../../components';
import s from './Bookmarks.module.scss';


function Bookmarks(){
    return(
        <div className={s.container}>
            <Header>
                <SearchBar />
            </Header>
            Bookmarks
        </div>
    );
}

Bookmarks.propTypes = {

};

export default Bookmarks;