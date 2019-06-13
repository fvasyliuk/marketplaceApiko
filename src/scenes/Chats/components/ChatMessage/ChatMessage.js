import React from 'react';
import T from 'prop-types';
import s from './ChatMessage.module.scss';



function ChatMessage({ text, myMessage }) {  
  
  return (
      <div className={myMessage ? s.myContainer : s.container}>
        
        { !myMessage && <div className={s.pointer}> </div>}
        <div className={myMessage ? s.myMessage : s.message}>
          { text }
        </div>    
        {  myMessage && <div className={s.myPointer}> </div> }    
      </div>
  )
}

ChatMessage.propTypes = {

};

export default ChatMessage;