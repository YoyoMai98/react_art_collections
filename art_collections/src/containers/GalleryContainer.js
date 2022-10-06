const GalleryContainer = () => {
   return (
    <>
			<header className="gallery-container-header">
					<h1>Art Gallery</h1>
					<h3>Collection</h3>
			</header>
			<main>
				<section className="welcome-section">
					<p>Welcome, feel free to dive yourself to the art world!</p>
				</section>
				<section className="collection-section">
					<h3>Collections</h3>
					<button>See All Collections</button>
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