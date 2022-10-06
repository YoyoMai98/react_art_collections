import { useEffect, useState } from "react"
import CollectionList from "../components/CollectionList"
import Header from "../components/Header"
import Search from "../components/Search"

const CollectionContainer = () => {

    const [collectionsId, setCollectionsId] = useState([])
    const [collections, setCollections] = useState([])
    const [filteredCollections, setFilteredCollections] = useState([])

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
        for(let i = 12000; i < 12050; i++){
            await fetchCollection(collectionsId[i]).then(collection => {
                newCollections.push(collection)
                setCollections(newCollections)
            })
        }
    }

    const filterCollections = term => {
        const filtered = collections.filter(collection => {
            return collection.title.toLowerCase().includes(term.toLowerCase()) || collection.artistDisplayName.toLowerCase().includes(term.toLowerCase())
        })
        setFilteredCollections(filtered)
    }

    console.log(collections);
    console.log(filteredCollections)
    console.log("---");

    useEffect(() => {
        fetchCollectionsNumber()
    }, [])

    useEffect(() => {
        if(collectionsId.length > 0) fetchAllCollections()
    }, [collectionsId])

    return (
        <>
            <Header />
            <Search filterCollections={filterCollections} />
            <CollectionList collections={filteredCollections.length > 0 ? filteredCollections : collections} />
        </>
    )
}

export default CollectionContainer