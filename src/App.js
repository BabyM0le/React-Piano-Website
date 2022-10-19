// Components
import Navbar from './components/navbar'
import LandingPage from './components/landingPage'
import Service from './components/service'
import About from './components/about'
import Contact from './components/contact'
import Footer from './components/footer'

// CSS
import './assets/css/App.css'

// Variables
export const name = 'Cecily Betts'

// Main
function App() {
	return (
		<>
			<Navbar/>

			<main>

				<LandingPage/>

				<Service/>

				<About/>

				<Contact/>

			</main>

			<Footer/>
		</>
	);
}

export default App
