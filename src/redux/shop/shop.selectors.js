import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

// Convert Object to Array
export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []

)

export const selectCollection = collectionUrlParam => {
    return (
        createSelector(
            [selectCollections],
            collections =>
            (collections ? collections[collectionUrlParam] : null)
        )
    )
}

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
)

export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
) 
