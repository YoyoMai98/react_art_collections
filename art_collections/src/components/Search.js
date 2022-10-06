import { useState } from "react"

const Search = ({filterCollections}) => {
    const [term, setTerm] = useState("")

    const handleChange = e => {
        setTerm(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        filterCollections(term)
    }

    return (
        <>
        <form className="search-bar" onSubmit={handleSubmit}>
            <input type="search" placeholder="Search for artist or title" id="search__input" onChange={handleChange}></input>
            <input type="submit" value="Search" className="search__submit"/>
        </form>
        </>
    )
}

export default Search