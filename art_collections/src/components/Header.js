import { Link } from "react-router-dom"

const Header = () => {
    return (
        <>
        <header className="gallery-container-header">
			<Link to="/" id="header-title">Art Gallery</Link>
			<div className="header-right">
                <Link to="/collections">Collections</Link>
                <Link to="/account">Account</Link>
            </div>
		</header>
        </>
    )
}

export default Header