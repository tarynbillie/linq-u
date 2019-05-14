import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Card from 'react-bootstrap/Card';
import Cut from '../../assets/ic_content_cut.svg';
import Locate from '../../assets/ic_place.svg';
import Schedule from '../../assets/ic_today.svg';
import './about.scss';

export default class About extends Component {
	render () {
		return (
			<div>
				<Nav />
				<section id='about'>
					<div className='container-about'>
						<h1>About Us</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
							voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum quis
							nostrud exercitation ullamco.
						</p>
					</div>
					<div className='container-service'>
						<h2>Our Services</h2>
						<div className='details'>
							<Card
								style={{
									width: '18rem',
									boxShadow:
										'0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12), 0 2px 4px -1px rgba(0, 0, 0, .20)'
								}}
							>
								<img src={Locate} alt='Location icon' />
								<Card.Body>
									<Card.Title>Card Title</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the bulk of the
										card's content.
									</Card.Text>
								</Card.Body>
							</Card>
							<Card
								style={{
									width: '18rem',
									boxShadow:
										'0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12), 0 2px 4px -1px rgba(0, 0, 0, .20)'
								}}
							>
								<img src={Schedule} alt='Calender icon' />
								<Card.Body>
									<Card.Title>Card Title</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the bulk of the
										card's content.
									</Card.Text>
								</Card.Body>
							</Card>
							<Card
								style={{
									width: '18rem',
									boxShadow:
										'0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12), 0 2px 4px -1px rgba(0, 0, 0, .20)'
								}}
							>
								<img src={Cut} alt='sissors icon' />
								<Card.Body>
									<Card.Title>Card Title</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the bulk of the
										card's content.
									</Card.Text>
								</Card.Body>
							</Card>
						</div>
					</div>
				</section>
			</div>
		);
	}
}
