import { useEffect, useState } from "react"
import CollectionList from "../components/CollectionList"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Search from "../components/Search"

const CollectionContainer = () => {

    const [collectionsId, setCollectionsId] = useState([])
    const [totalNumber, setTotalNumber] = useState(0)
    const [collections, setCollections] = useState([])
    const [filteredCollections, setFilteredCollections] = useState([])

    const fetchCollectionsNumber = async () => {
        const response = await fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects")
        const data = await response.json()
        setCollectionsId(data.objectIDs.sort(function(a, b){return a - b}))
        setTotalNumber(data.total)
    }

    const fetchCollection = async id => {
        const response = await fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/" + id)
        const data = await response.json()
        return data
    }

    const fetchAllCollections = async () => {
        let newCollections = []
        for(let i = 12017; i < 12117; i++){
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

    useEffect(() => {
        fetchCollectionsNumber()
    }, [])

    useEffect(() => {
        if(collectionsId.length === totalNumber && totalNumber > 0) fetchAllCollections()
    }, [collectionsId, totalNumber])

    return (
        <>
            <Header />
            <Search filterCollections={filterCollections} />
            <CollectionList collections={filteredCollections.length > 0 ? filteredCollections : collections} />
            <Footer />
        </>
    )
}

export default CollectionContainer