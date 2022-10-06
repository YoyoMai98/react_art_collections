import Collection from "./Collection"

const CollectionList = ({collections}) => {

    const collectionComponents = collections.map(collection => {
        return <Collection
                key={collection.id}
                collection={collection}
                />
    })

    return (
        <>
            {collections ? (
                collectionComponents
            ) : <p>Loading...</p>}
            {/* {collectionComponents} */}
        </>
    )
}

export default CollectionList