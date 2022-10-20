// CSS
import '../assets/css/navbar.css'

// Main
const Navbar = () => {
    return <nav class="navbar">
        <ul>
            <li><button><a>Service</a></button></li>
            <li><button><a>About</a></button></li>
            <li><button><a>My Story</a></button></li>
            <li><button><a>Contact</a></button></li>
        </ul>
    </nav>
}

export default Navbar