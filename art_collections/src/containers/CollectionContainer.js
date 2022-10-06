import { useEffect, useState } from "react"
import CollectionList from "../components/CollectionList"

const CollectionContainer = () => {

    const [collectionsId, setCollectionsId] = useState([])
    const [collections, setCollections] = useState([])

    const fetchCollectionsNumber = async () => {
        const response = await fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects")
        const data = await response.json()
        setCollectionsId(data.objectIDs)
    }

    const fetchCollection = async id => {
        const response = await fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/" + id)
        const data = await response.json()
        return data
    }

    const fetchAllCollections = async () => {
        let newCollections = []
        for(let i = 12000; i < 12200; i++){
            await fetchCollection(collectionsId[i]).then(collection => {
                newCollections.push(collection)
                setCollections(newCollections)
            })
        }
    }

    useEffect(() => {
        fetchCollectionsNumber()
    }, [])

    useEffect(() => {
        if(collectionsId.length > 0) fetchAllCollections()
    }, [collectionsId])

    return (
        <>
            <CollectionList collections={collections} />
        </>
    )
}

export default CollectionContainer