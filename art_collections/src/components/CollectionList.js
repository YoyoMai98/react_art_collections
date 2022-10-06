import Collection from "./Collection"

const CollectionList = ({collections}) => {
console.log(collections)
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
            {/* {collectionComponents} */}
        </div>
    )
}

export default CollectionList