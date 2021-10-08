import React from "react";
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'

import {firestore,convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils'
import {collection,onSnapshot} from 'firebase/firestore'

import WithSpinner from "../../components/with-spinner/with-spinner.component";


import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from '../collection/collection.component'

import {updateCollections} from '../../redux/shop/shop.actions'

// HOC
const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends React.Component {
    state = {
        loading: true,
    }
    unsubcribeFromSnapshop = null;
    componentDidMount() {

        const {updateCollections} = this.props

        // Lấy Collection Rè từ firestore
        const collectionRef = collection(firestore,'collections');

        onSnapshot(collectionRef, (querySnapshot) => {
            const collectionsMap = convertCollectionsSnapshotToMap(querySnapshot);
            updateCollections(collectionsMap);
            this.setState({loading: false})
        })
         
    }

    render() {
        const {match} = this.props;
        const {loading} = this.state;
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} />}/>
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
            </div>
        )
    }

}

// const ShopPage = ({match}) => {
//     return (
//         <div className="shop-page">
//             <Route exact path={`${match.path}`} component={CollectionsOverview} />
//             <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
//         </div>
//     )
// }

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null,mapDispatchToProps)(ShopPage);