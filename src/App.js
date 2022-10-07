import './App.css'
import landingpageCirclePerson from './img/landingpage-circle-person.png'

const name = 'Cecily Betts'

function App() {
      return (
      <>
      <nav class='navbar'>
            <ul>
                  <a href='#service'><li>Service</li></a>
                  <a href='#book-a-lesson'><li>Book a Lesson</li></a>
                  <a href='#my-story'><li>My Story</li></a>
                  <a href='#contact-me'><li>Contact Me</li></a>
            </ul>
      </nav>
      
      <main>
            <section class='landing-page'>
                  <div class="double-row">
                        <div class="double-column">
                              <div class="center-vertical">
                                    <img alt={name + ' Photo'} class="landing-page-photo" src={landingpageCirclePerson}></img>
                              </div>
                        </div>
                        <div class="double-column landing-page-column">
                              <div class="landing-page-text">
                                    <h1 class="title">{name}</h1>
                                    <h1 class="title">Piano Tuition</h1>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                              </div>
                        </div>
                  </div>
            </section>

            <section class='service' id='service'>
                  <h1 class='title'>Service</h1>

                  <div class="triple-row">
                        <div class="triple-column">
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>

                        <div class="triple-column">
                              <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC</p>
                        </div>

                        <div class="triple-column">
                              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered</p>
                        </div>
                  </div>
            </section>

            <section class='book-a-lesson' id='book-a-lesson'>
                  <div class="double-row">

                        <div class="double-column">
                              <div class="center-vertical">
                                    <h1>ANIMATED PIANO</h1>
                              </div>
                        </div>

                        <div class="double-column">
                              <div class="contact-form center-vertical">
                                    <h1>Contact</h1>
                                    <form>
                                          <input placeholder='Enter your name' type='text'></input>

                                          <input placeholder='Enter your email' type='email'></input>

                                          <input placeholder='Enter your number' type='number'></input>

                                          <button>Submit</button>
                                    </form>
                              </div>
                        </div>

                  </div>
            </section>
      </main>

      <div class="filler"></div>
      </>
      )
}

export default App
