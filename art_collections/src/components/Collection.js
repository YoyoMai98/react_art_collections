const Collection = ({collection}) => {
    return (
        <div className="collection">
            <img src={collection.primaryImageSmall} alt={collection.title} />
            <br />
            <a href={collection.objectURL}>{collection.title}</a>
            {collection.artistDisplayName? <p>Artist: {collection.artistDisplayName}</p> : <p></p>}
            <p>{collection.objectDate}</p>
        </div>
    )
}

export default Collection