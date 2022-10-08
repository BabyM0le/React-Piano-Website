import './App.css';
import landingpageCirclePerson from './img/landingpage-circle-person.png';
import nameIcon from './img/name-icon.png';
import emailIcon from './img/email-icon.png';
import phoneIcon from './img/phone-icon.png';

const name = 'Cecily Betts';

function App() {
	return (
		<>
			<nav class="navbar">
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

			<main>
				<section class="landing-page">
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

				<section class="service" id="service">
					<h1 class="title">Service</h1>

					<div class="triple-row">
						<div class="triple-column">
							<p>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry.
							</p>
						</div>

						<div class="triple-column">
							<p>
								Contrary to popular belief, Lorem Ipsum is not simply random
								text. It has roots in a piece of classical Latin literature from
								45 BC
							</p>
						</div>

						<div class="triple-column">
							<p>
								There are many variations of passages of Lorem Ipsum available,
								but the majority have suffered
							</p>
						</div>
					</div>
				</section>

				<section class="contact" id="contact">
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
									<section>
										<p>Name</p>
										<img alt="Person Icon" src={nameIcon}></img>
										<input placeholder="Enter your name" type="text"></input>
									</section>

									<section>
										<p>Email</p>
										<img alt="Envelope Icon" src={emailIcon}></img>
										<input placeholder="Enter your email" type="email"></input>
									</section>

									<section class="contact-form-number">
										<p>Number</p>
										<img alt="Phone Icon" src={phoneIcon}></img>
										<input
											placeholder="Enter your phone number"
											type="number"
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
						</div>
					</div>
				</section>
			</main>

			<div class="filler"></div>
		</>
	);
}

export default App;
