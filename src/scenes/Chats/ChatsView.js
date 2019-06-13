import React from 'react';
import T from 'prop-types';
import { Link, generatePath, Route } from 'react-router-dom';
import s from './Chats.module.scss';
import Api from '../../api';
import { HeaderChat, ChatMessage } from './components';
import { routes } from '../router';

function Chats({ items, sendMessage, setText, text, user }){ 
    if (!user) {
        return 'Loading ...'
    }
    
    return(
        <div className={s.container}>   
            <HeaderChat user={user}/>         
            {items.map(it =><ChatMessage 
                text={it.text} 
                myMessage={user.id === it.ownerId ? false : true}
            />)}        
            <div className={s.sendContainer}> 
                <input 
                    value={text} 
                    onChange={evt => setText(evt.target.value)} 
                    className={s.sendInput}
                    placeholder="Type your message here.."
                />
                <button onClick={sendMessage} type="button" className={s.sendButton} >Send</button>
            </div>
        </div>
    );
}

Chats.propTypes = {

};

export default Chats;