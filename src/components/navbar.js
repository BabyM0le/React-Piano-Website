// CSS
import '../assets/css/navbar.css'

// IMG
import menu from '../assets/img/icon.png'

// Main
const Navbar = () => {
    return <nav class="navbar">

        <div class='navbar-icon'>
            <img alt='navbar-icon'></img>
        </div>

        <div class='navbar-links'>
            <ul>
                <li><button><a>Service</a></button></li>
                <li><button><a>About</a></button></li>
                <li><button><a>My Story</a></button></li>
                <li><button><a>Contact</a></button></li>
            </ul>
        </div>

        <div class='navbar-menu'>
            <img alt='menu' src={menu}></img>
        </div>

    </nav>
}

export default Navbar