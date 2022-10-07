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

    const handleClick = () => {
        setTerm("")
        filterCollections("")
    }

    return (
        <>
        <form className="search-bar" onSubmit={handleSubmit}>
            <input
                type="search"
                placeholder="Search for artist or title"
                id="search__input"
                onChange={handleChange}
                value={term}
            />
            <span className={term? "clear-btn" : "hidden"}>
                <img onClick={handleClick} src="https://www.nationalgallery.org.uk/v2/img/icons/close-thin.svg" alt="clear" />
            </span>
            <input type="submit" value="Search" className="search__submit"/>
        </form>
        </>
    )
}

export default Search