import React from 'react';
import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';
import CollectionTitle from '../collection-title/collection-title.component';

const CollectionPreview = ({title,items,...otherProps}) => {
    return (
        <div className="collection-preview">
            <CollectionTitle
                value={title.toUpperCase()}
                {...otherProps}
            ></CollectionTitle>
            {/* <h1 className="title">{title.toUpperCase()}</h1> */}
            <div className="preview">
                {
                    // Chon ra 4 item
                    items
                        .filter((item,idx) => idx < 4)
                        .map((item) => {
                        return(
                            <CollectionItem key={item.id} item={item} />
                        )
                    })
                }
            </div>
        </div>    
    );
}
 
export default CollectionPreview;