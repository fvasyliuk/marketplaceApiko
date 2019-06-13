import React from 'react';
import T from 'prop-types';
import { Avatar } from '../../../../components'
import s from './HeaderChat.module.scss';



function HeaderChat({ user }) { 
  
  return (
      <div className={s.container}>
        <div className={s.left}>
          <Avatar src={user.avatar} name={user.fullName} size="45" />
          <div className={s.text}>
            {user.fullName}
          </div>          
        </div>
        <div className={s.right}>
          <div className={s.dots}></div>
          :
        </div>
      </div>
  )
}

HeaderChat.propTypes = {

};

export default HeaderChat;