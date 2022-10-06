import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"

const GalleryContainer = () => {
   return (
		<>
			<Header />
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
			<Footer />
		</>
   )
}

export default GalleryContainer