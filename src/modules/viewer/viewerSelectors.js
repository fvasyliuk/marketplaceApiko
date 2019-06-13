import { createSelector } from 'reselect';

export const getUser = createSelector(
    (state) => state.viewer.user,
    (user) => user,
);