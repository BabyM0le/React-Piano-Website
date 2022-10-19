// CSS
import '../assets/css/navbar.css'

// Main
const Navbar = () => {
    return <nav class="navbar">
        <ul>
            <a href="#service">
                <li>Service</li>
            </a>
            <a href="#book-a-lesson">
                <li>Book a Lesson</li>
            </a>
            <a href="#my-story">
                <li>My Story</li>
            </a>
            <a href="#contact">
                <li>Contact Me</li>
            </a>
        </ul>
    </nav>
}

export default Navbar