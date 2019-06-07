import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Cut from '../../assets/ic_content_cut.svg';
import Locate from '../../assets/ic_place.svg';
import Schedule from '../../assets/ic_today.svg';
import Winta from '../../assets/winta-linqu-photo.jpg';
import Taryn from '../../assets/Taryn-Li-Photo.png';
import Footer from '../Footer/Footer';
import './about.scss';

export default class About extends Component {
	render () {
		return (
			<section id='about'>
				<div className='container-about'>
					<h1>About Us</h1>
					<p>
						At Linq-U we strive to provide clients the ability to add comfort and convenience to their
						lives.
					</p>
					<p>
						Weather you are always on the go and making your appointments has been difficult, or you don’t
						feel comfortable going to a salon, or if you don’t live downtown Toronto …we’re here for you.
						Linq-U simply offers businesses throughout the GTA that seem so out of reach, the opportunity to
						reach you. We are a platform that links you to the business you trust and love.
					</p>
				</div>
				<div className='container-service'>
					<h2>How does it work?</h2>
					<div className='details'>
						<Card
							style={{
								width: '18rem',
								borderRadius: '12px',
								boxShadow:
									'0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12), 0 2px 4px -1px rgba(0, 0, 0, .20)'
							}}
						>
							<img src={Locate} alt='Location icon' />
							<Card.Body>
								<Card.Title className='card-title'>The GTA</Card.Title>
								<Card.Text>
									Using our app, you can select the business of your choice with our curated list of
									trusted partners.
								</Card.Text>
							</Card.Body>
						</Card>
						<Card
							style={{
								width: '18rem',
								borderRadius: '12px',
								boxShadow:
									'0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12), 0 2px 4px -1px rgba(0, 0, 0, .20)'
							}}
						>
							<img src={Cut} alt='sissors icon' />
							<Card.Body>
								<Card.Title className='card-title'>Services</Card.Title>
								<Card.Text>Select the service you want done in the comfort of your home.</Card.Text>
							</Card.Body>
						</Card>
						<Card
							style={{
								width: '18rem',
								borderRadius: '12px',
								boxShadow:
									'0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12), 0 2px 4px -1px rgba(0, 0, 0, .20)'
							}}
						>
							<img src={Schedule} alt='Calender icon' />
							<Card.Body>
								<Card.Title className='card-title'>Book</Card.Title>
								<Card.Text>
									Select a date and time, confirm your appointment and receieve a confirmation email,
									along with any details you need to know for your appointment.
								</Card.Text>
							</Card.Body>
						</Card>
					</div>
				</div>
				<div className='team'>
					<h1>Meet the team</h1>
					<div id='person-one'>
						<div className='photo'>
							<div id='rectangle-one' />
							<img id='one' src={Winta} alt='Winta Hagos' />
						</div>
						<div id='name-one'>
							<h2>CEO &amp; Founder</h2>
							<h3>Winta Hagos</h3>
							<p>
								I found my passion for innovation in the health and wellness sector as well as the
								beauty industry and never looked back. I founded LINQ-U because I saw a problem in the
								market. I found myself always struggling to make appointments on time or even book
								appointments. It was at that point I thought, what if my favourite businesses could come
								to me. Thus, the journey of developing a platform that provides businesses with the
								opportunity to connect to their clients in the comfort of your own home began.
							</p>
						</div>
					</div>
					<div id='person-two'>
						<div className='photo'>
							<div id='rectangle-two' />
							<img id='two' src={Taryn} alt='Taryn Li' />
						</div>
						<div id='name-two'>
							<h2>Front End Developer</h2>
							<h3>Taryn Li</h3>
							{/* <p>
								As lead developer for LINQ-U I drive the technical vision and product development. I'm
								passionate about helping the everyday person with everyday issues. I love everything
								design and development! When I'm not working you'll find me sailing on Humber Bay, or
								hiking the Bruce Trail with my doggo.
							</p> */}
						</div>
					</div>
				</div>
			</section>
		);
	}
}
