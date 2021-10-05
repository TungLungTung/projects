import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({title,items}) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    // Chon ra 4 item
                    items
                        .filter((item,idx) => idx < 4)
                        .map(({id, ...otherItemProps}) => {
                        return(
                            <CollectionItem key={id} {...otherItemProps} />
                        )
                    })
                }
            </div>
        </div>    
    );
}
 
export default CollectionPreview;