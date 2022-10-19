// Components
import ContactForm from './contactForm'

// CSS
import '../assets/css/contact.css'

// Main
const Contact = () => {
    return <section class="contact" id="contact">
        <div class="double-row">
            <div class="double-column">
                <div class="center-vertical">
                    <h1>ANIMATED PIANO</h1>
                </div>
            </div>

            <div class="double-column">
                <ContactForm/>
            </div>
        </div>
    </section>
}

export default Contact