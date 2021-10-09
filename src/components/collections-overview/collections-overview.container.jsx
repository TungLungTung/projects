import {connect} from 'react-redux' // Can truy cap selector
import { createStructuredSelector } from 'reselect'
import {compose} from 'redux'

import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors'
import withSpinner from '../with-spinner/with-spinner.component';
import CollectionsOverview from './collections-overview.component';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});

// Right to Left
const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    withSpinner
)(CollectionsOverview)

export default CollectionsOverviewContainer;
