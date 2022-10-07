import { useState } from "react"
import Collection from "./Collection"

const CollectionList = ({collections}) => {

    const halfLength = Math.round(collections.length / 2)

    const firstCollections = collections.filter((collection, index) => index <= halfLength)
    const secondCollections = collections.filter((collection, index) => index > halfLength)

    const [clicked, setClicked] = useState(false)

    const collectionComponents = firstCollections.map(collection => {
        return <Collection
                key={collection.objectID}
                collection={collection}
                />
    })

    const loadingCommponents = secondCollections.map(collection => {
        return <Collection
                key={collection.objectID}
                collection={collection}
                />
    })

    const handleClick = () => {
        setClicked(true)
    }

    return (
        <>
        <div className="collections-list">
            {firstCollections ? (
                collectionComponents
            ) : <p>Loading...</p>}
            {clicked ? (
                loadingCommponents
            ) : <p className="hidden"></p>}
        </div>
        <div className="collections-list-btn">
            <p className="collections-list-text">You've viewed {halfLength} of {collections.length} collections</p>
            <button onClick={handleClick} className={clicked ? "hidden-btn" : "display-btn"}>See more</button>
        </div>
        </>
    )
}

export default CollectionList