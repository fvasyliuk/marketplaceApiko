import React from 'react';
import T from 'prop-types';
import { Header, SearchBar } from '../../components';
import s from './Profile.module.scss';


function Profile(){
    return(
        <div className={s.container}>
            <Header>
                <SearchBar />
            </Header>
            Profile
        </div>
    );
}

Profile.propTypes = {

};

export default Profile;