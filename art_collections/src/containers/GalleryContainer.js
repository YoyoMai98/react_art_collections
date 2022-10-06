import { Link } from "react-router-dom"
import CollectionContainer from "./CollectionContainer"

const GalleryContainer = () => {
   return (
		<>
			<header className="gallery-container-header">
					<Link to="/" id="header-title">Art Gallery</Link>
					<Link to="/collections">Collections</Link>
			</header>
			<main>
				<section className="welcome-section">
					<div className="intro-welcome">
						<h2>Welcome</h2>
						<p>Feel free to dive yourself to the art world!</p>
					</div>
				</section>
				<section className="collection-section">
					<h3>Wanna see some collections?</h3>
					<p className="text">
						<Link to="/collections">
							<button>See All Collections</button>
						</Link>
					</p>
				</section>
			</main>
			<footer className="gallery-container-footer">
				<h2>Sign up</h2>
				<button>Sign Up</button>
			</footer>

		</>
   )
}

export default GalleryContainer