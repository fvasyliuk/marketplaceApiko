import { createSelector } from 'reselect';
import { ProductList } from '../../api/schemas';
import { normalize } from 'normalizr';

const getChatsEntities = (state) => state.entities.chats;
const getChatEntiti = (state, id) => state.entities.chats[id];
const getMessagesEntities = (state) => state.entities.messages;
const getProductsEntities = (state) => state.entities.products;
const getUsersEntities = (state) => state.entities.users;
const getIds = (state) => state.chats.items;

export const getChats = createSelector(
    [getChatsEntities, getIds],
    (entities, ids) => ids.map((id) => entities[id])
);

export const getUserWithChatId = createSelector(
    [getChatEntiti, getUsersEntities],
    (chat, userEntities) => {
        if ( !chat || !chat.participants) {
            return undefined;
        }
        
        return userEntities[chat.participants[0]]
    }
);

export const getChatsWithLastMessage = createSelector(
    [getChats, getMessagesEntities],
    (items, messages) => items.map( item => ({
        ...item,
        lastMessage: messages[item.lastMessage],
    }))
);

export const getTitleChats = createSelector(
    [getChats, getProductsEntities],
    (chats, productsEntities) => {
        
    const productList = chats.map( chat => productsEntities[chat.productId])
    
    const { entities } = normalize(productList, ProductList)

    return entities.products;
    }
);

// export const getProduct = createSelector(
//     (state, id) => getProductEntities(state)[id],
//     (item) => item
// );

// export const getUser = createSelector(
//     (state, id) => getUserEntities(state)[id],
//     (item) => item
// );

// export const getProductOwner = createSelector(
//     (state, id) => {
//         const users = getUserEntities(state);
//         const products = getProductEntities(state);
//         const product = products[id];
        
//         if (!product) {
//             return undefined;
//         }

//         return users[product.owner || product.ownerId];
//     },
//     (item) => item
// );

// export const getUserProducts = createSelector(
//     (state, id) => {
//         try {
//             const products = getProductEntities(state);
                
//             const userProducts = state.products.usersProducts.users[id];
//             console.log('selector userProducts must be list', userProducts);
//             const UserProductsEntities = userProducts.map(id => products[id])
//             console.log('selector UserProductsEntities must be list', UserProductsEntities);
//             if (!UserProductsEntities) {
//                 return undefined;
//             }

//             return UserProductsEntities;
//         } catch (err) {
//             return undefined;
//         }
        
//     },
//     (item) => item
// )