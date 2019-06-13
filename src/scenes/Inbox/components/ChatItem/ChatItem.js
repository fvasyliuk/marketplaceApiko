import React from 'react';
import T from 'prop-types';
import s from './ChatItem.module.scss';


function ChatItem({ title, lastMessage, data }) { 
   return (
       <div className={s.container}>
           <div className={s.top}> 
                <div className={s.title}>{title}</div>
                <div className={s.lastMessage}>{lastMessage}</div>
           </div>
            <div className={s.bottom}>
                {data}
            </div>
       </div>
   )
}

ChatItem.propTypes = {

};

export default ChatItem;