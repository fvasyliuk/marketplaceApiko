import { schema } from 'normalizr';

export const User = new schema.Entity('users');

export const Product = new schema.Entity('products', { owner: User });

export const Message = new schema.Entity(
    'messages', 
    undefined, 
    {idAttribute: (entity) => entity.id + '-' + entity.chatId,}
);

export const ProductList = [Product];
export const UserList = [User];

export const Chat = new schema.Entity('chats', {lastMessage: Message, product: Product, participants: UserList});
export const ChatCollection = [Chat];


export const MessageCollection = [Message];

