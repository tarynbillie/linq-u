import React from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import './home.scss';

function Home () {
	return (
		<div className='home'>
			<Nav />
			<div className='content'>
				<h1>
					Welcome to <span>LINQ-U</span>, where all your beauty and health professions come to <i>you</i>.
				</h1>
				<button>Learn more about our services</button>
			</div>
			<Footer />
		</div>
	);
}

export default Home;
