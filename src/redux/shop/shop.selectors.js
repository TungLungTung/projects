import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

// Convert Object to Array
export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    // Get all keys of objects
    collections => Object.keys(collections).map(key => {
        return collections[key]
    })
)

// Select Collection ID
// Function return a function
// export const selectCollection = collectionUrlParam => {
//     return (
//         createSelector(
//             [selectCollections],
//             collections => collections[collectionUrlParam]
//         )
//     )
// }

export const selectCollection = collectionUrlParam =>
  createSelector([selectCollections], collections => {
    return collections.find(collection => {
      return collection.routeName === collectionUrlParam
    })
  });

// export const selectCollection = memoize(collectionUrlParam => {
//     return createSelector(
//         [selectCollections],
//         collections => collections[collectionUrlParam]
//     )
// })
    