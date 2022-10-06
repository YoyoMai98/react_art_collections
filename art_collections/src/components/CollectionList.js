import Collection from "./Collection"

const CollectionList = ({collections}) => {
    const collectionComponents = collections.map(collection => {
        return <Collection
                key={collection.id}
                collection={collection}
                />
    })

    return (
        <div className="collections-list">
            {collections ? (
                collectionComponents
            ) : <p>Loading...</p>}
        </div>
    )
}

export default CollectionList