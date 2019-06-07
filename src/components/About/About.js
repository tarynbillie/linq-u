import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Cut from '../../assets/ic_content_cut.svg';
import Locate from '../../assets/ic_place.svg';
import Schedule from '../../assets/ic_today.svg';
import Winta from '../../assets/winta-linqu-photo.jpg';
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
					<h2>How does it work?</h2>
				</div>
				<div className='container-service'>
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
					<img src={Winta} alt='Winta Hagos' />
				</div>
			</section>
		);
	}
}
