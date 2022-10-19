// CSS
import '../assets/css/landingpage.css'

// IMG
import landingpageCirclePerson from '../assets/img/landingpage-circle-person.png'

// Variables
import {name} from '../App'

// Main
const LandingPage = () => {
    return <section class="landing-page">
        <div class="double-row">
            <div class="double-column">
                <div class="center-vertical">
                    <img
                        alt={name + ' Photo'}
                        class="landing-page-photo"
                        src={landingpageCirclePerson}
                    ></img>
                </div>
            </div>
            <div class="double-column landing-page-column">
                <div class="landing-page-text">
                    <h1 class="title">{name}</h1>
                    <h1 class="title">Piano Tuition</h1>
                    <p>
                        It is a long established fact that a reader will be distracted
                        by the readable content of a page when looking.
                    </p>
                </div>
            </div>
        </div>
    </section>
}

export default LandingPage