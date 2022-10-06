import { Link } from "react-router-dom"

const Header = () => {
    return (
        <>
        <header className="gallery-container-header">
					<Link to="/" id="header-title">Art Gallery</Link>
					<Link to="/collections">Collections</Link>
		</header>
        </>
    )
}

export default Header