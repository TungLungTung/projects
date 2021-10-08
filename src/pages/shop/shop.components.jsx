import React from "react";
import {Route} from 'react-router-dom'

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from '../collection/collection.component'

// Do su dung fetch data ở đây nên convert sang class component
import {firestore,convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils'
import {collection,onSnapshot} from 'firebase/firestore'
class ShopPage extends React.Component {
    unsubcribeFromSnapshop = null;

    componentDidMount() {
        // Lấy Collection Rè từ firestore
        const collectionRef = collection(firestore,'collections');

        onSnapshot(collectionRef, (querySnapshot) => {

            const collectionsMap = convertCollectionsSnapshotToMap(querySnapshot);
            console.log(collectionsMap)

            // // Sử dụng cái này để ghi ra dữ liệu là ok rồi
            // querySnapshot.forEach((doc) => {
            //     console.log(doc.id);
            // });  
        })
         
    }

    render() {
        const {match} = this.props;
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionsOverview} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
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

export default ShopPage;