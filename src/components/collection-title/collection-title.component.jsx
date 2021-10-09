import React from "react";
import { withRouter } from "react-router-dom";
import './collection-title.styles'

import { CollectionTitleStyles } from "./collection-title.styles";

const CollectionTitle = ({history,match,routeName,value}) => {
    return (
        <CollectionTitleStyles onClick={() => history.push(`${match.path}/${routeName}`)}>
            {value}
        </CollectionTitleStyles>
    );
}
 
export default withRouter(CollectionTitle);