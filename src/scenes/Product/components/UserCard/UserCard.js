import React from 'react';
import T from 'prop-types';
import { Link, generatePath } from 'react-router-dom';
import { Avatar } from '../../../../components';
import s from './UserCard.module.scss';
import { routes } from '../../../router';



function UserCard({ user }) {
    return (
        <div className={s.container}>
            <div className={s.top}></div>
            <div className={s.avatar}> 
                <Avatar src={user.avatar} name={user.fullName} size='72' />
            </div>
            <div className={s.bottom}>
                <div className={s.fullName}>
                    <Link to={generatePath(routes.users, { id: user.id })}>{user.fullName}</Link>                    
                </div>                
                <div className={s.email}>{user.location? user.location : null}</div>
            </div>
                          
        </div>
    );
}

UserCard.propTypes = {

};


export default UserCard;