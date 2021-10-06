import {createSelector} from 'reselect'

// Lay state tu redux
const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
    [selectUser],
    (user) => user.currentUser
)