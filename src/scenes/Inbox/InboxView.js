import React from 'react';
import T from 'prop-types';
import { Link, generatePath, Route } from 'react-router-dom';
import s from './Inbox.module.scss';
import Api from '../../api';
import Chat from '../Chats/ChatsContainer';
import { Header } from '../../components';
import { ChatItem } from './components';
import { routes } from '../router';

function Inbox({ items, products }){ 
    if (!items) {
        return 'Loading ...'
    }
   
    return(
        <>
            <Header />
            <div className={s.container}>
                <aside className={s.aside}>
                    {items.map(it =>( 
                        <Link 
                            to={generatePath(routes.chat, { id: it.id })}
                            key={it.id}
                        >
                            <ChatItem 
                                title={products[it.productId].title}
                                lastMessage={it.lastMessage && it.lastMessage.text? it.lastMessage.text : null}
                                data={"10"}
                            />
                        </Link >
                    ))}
                </aside>
                <div className={s.main}> 
                    <Route 
                        path={routes.chat} 
                        render={(props) => 
                            <Chat {...props} />
                        } 
                        exact
                    />
                </div>
            </div>
        </>
    );
}

Inbox.propTypes = {

};

export default Inbox;