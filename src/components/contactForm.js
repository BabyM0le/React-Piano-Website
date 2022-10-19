// CSS
import '../assets/css/contactForm.css'

// IMG
import nameIcon from '../assets/img/name-icon.png'
import emailIcon from '../assets/img/email-icon.png'
import phoneIcon from '../assets/img/phone-icon.png'

// Main
const ContactForm = () => {
    return <div class="contact-form center-vertical">
        <h1>Contact</h1>
        <form action="http://localhost:8080/thank-you" method="POST">
            <section>
                <p>Name</p>
                <img alt="Person Icon" src={nameIcon}></img>
                <input
                    placeholder="Enter your name"
                    type="text"
                    name='name'
                    required
                ></input>
            </section>

            <section>
                <p>Email</p>
                <img alt="Envelope Icon" src={emailIcon}></img>
                <input 
                placeholder="Enter your email" 
                type="email"
                name='email'
                required
                ></input>
            </section>

            <section class="contact-form-number">
                <p>Number</p>
                <img alt="Phone Icon" src={phoneIcon}></img>
                <input
                    placeholder="Enter your phone number"
                    type="number"
                    name='number'
                ></input>
            </section>

            <p class="contact-form-tooltip">
                When will I get back to you?
                <span class="contact-form-tooltip-text">
                    Once contacted I will try my best to get back to you
                    within 48 hours.
                </span>
            </p>

            <button>Submit</button>
        </form>
    </div>
}

export default ContactForm