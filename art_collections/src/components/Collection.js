const Collection = ({collection}) => {
    return (
        <div className="collection">
            <a href={collection.objectURL}>{collection.title}</a>
            <p>Department: {collection.department}</p>
            {collection.artistDisplayName? <p>Artist: {collection.artistDisplayName}</p> : <p></p>}
        </div>
    )
}

export default Collection