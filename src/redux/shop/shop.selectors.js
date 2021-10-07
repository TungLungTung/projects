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

// Tại sao phải có cái này, vì thực tế ở trang shop
// Thì đường dẫn không có params. do đó nó duyệt hết collections với routename trùng với cái trong database thôi
// Này giống như dạng all-products. mình hay làm
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
    