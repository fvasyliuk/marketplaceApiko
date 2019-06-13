import { createSelector } from 'reselect';

const getProductEntities = (state) => state.entities.products;
const getUserEntities = (state) => state.entities.users;
const getLatestIds = (state) => state.products.latest.items;
const getSavedIds = (state) => state.products.saved.items;

export const getLatest = createSelector(
    [getProductEntities, getLatestIds],
    (entities, ids) => ids.map((id) => entities[id])
);

export const getProduct = createSelector(
    (state, id) => getProductEntities(state)[id],
    (item) => item
);

export const getUser = createSelector(
    (state, id) => getUserEntities(state)[id],
    (item) => item
);

export const getProductOwner = createSelector(
    (state, id) => {
        const users = getUserEntities(state);
        const products = getProductEntities(state);
        const product = products[id];
        
        if (!product) {
            return undefined;
        }

        return users[product.owner || product.ownerId];
    },
    (item) => item
);

export const getUserProducts = createSelector(
    (state, id) => {
        try {
            const products = getProductEntities(state);
                
            const userProducts = state.products.usersProducts.users[id];
            
            const UserProductsEntities = userProducts.map(id => products[id])
            
            if (!UserProductsEntities) {
                return undefined;
            }

            return UserProductsEntities;
        } catch (err) {
            return undefined;
        }
        
    },
    (item) => item
)

export const getSavedProducts = createSelector(
    [getProductEntities, getSavedIds],
    (entities, ids) => ids.map((id) => entities[id])
);