// Components
import Cards from './cards'

// ParticlesJS
import Particles from 'react-tsparticles'
import ParticlesConfig from './particlesConfig'

// CSS
import '../assets/css/about.css'

// Main
const About = () => {
    return <section class='about'>

        <div class='about-content'>
            <Cards/>
        </div>

        <div class="particles-js">
            <Particles params={ParticlesConfig}/>
        </div>
        
    </section>
}

export default About