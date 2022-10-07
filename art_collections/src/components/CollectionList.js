import { useState } from "react"
import Collection from "./Collection"

const CollectionList = ({collections}) => {

    const firstCollections = collections.filter((collection, index) => index <= 50)
    const secondCollections = collections.filter((collection, index) => index > 50)

    const [clicked, setClicked] = useState(false)

    const collectionComponents = firstCollections.map(collection => {
        return <Collection
                key={collection.id}
                collection={collection}
                />
    })

    const loadingCommponents = secondCollections.map(collection => {
        return <Collection
                key={collection.id}
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
            <p className="collections-list-text">You've viewed {firstCollections.length} of {collections.length} collections</p>
            <button onClick={handleClick} className={clicked ? "hidden-btn" : "display-btn"}>See more</button>
        </div>
        </>
    )
}

export default CollectionList