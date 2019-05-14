import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './nav.scss';

export default class Nav extends Component {
	render () {
		// const nav = document.querySelector('#main');
		// const topOfNav = nav.offsetTop;

		// function fixNav() {
		//     if (window.scrollY >= topOfNav) {
		//         document.body.style.paddingTop = nav.offsetHeight + 'px';
		//         document.body.classList.add('fixed-nav')
		//     } else {
		//         document.body.style.paddingTop = 0;
		//         document.body.classList.remove('fixed-nav')

		//     }
		// }
		// window.addEventListener('scroll', fixNav)

		return (
			<nav id='main'>
				<h1 className='logo'>LINQ-U</h1>
				<div id='nav'>
					<Link to={'/home'} className='link'>
						<h3>Home</h3>
					</Link>
					<Link to={'/about'} className='link'>
						<h3>About</h3>
					</Link>
					<Link to={'/contact'} className='link'>
						<h3>Contact</h3>
					</Link>
					<button className='signin'>Sign In</button>

					<button className='cta'>Book now</button>
				</div>
			</nav>
		);
	}
}
