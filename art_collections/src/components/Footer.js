import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <>
            <footer className="gallery-container-footer">
				<h2>Sign up</h2>
				<Link to='/signup'>
                    <button>Sign Up</button>
                </Link>
			</footer>
        </>
    )
}

export default Footer