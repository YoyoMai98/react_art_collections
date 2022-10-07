const Collection = ({collection}) => {
    return (
        <div className="collection">
            <a href={collection.objectURL}>
                <img src={collection.primaryImageSmall} alt={collection.title} />
            </a>
            <br />
            <a href={collection.objectURL}>{collection.title}</a>
            {collection.artistDisplayName? <p>Artist: {collection.artistDisplayName}</p> : <p></p>}
            <p>{collection.objectDate}</p>
        </div>
    )
}

export default Collection