import React, { Component } from 'react';
import { MDBInput } from 'mdbreact';
import './contact.scss';
// import Footer from '../Footer/Footer';

export default class Contact extends Component {
	handleKeyPress (e) {
		if (e.which === 13) {
			this.setState({ value: this.props.predicted });
		}
	}

	render () {
		// Form Validation
		function validateForm () {
			var name = document.getElementById('name').value;
			if (name === '') {
				document.getElementById('status').innerHTML = 'Name cannot be empty';
				return false;
			}
			var email = document.getElementById('email').value;
			if (email === '') {
				document.getElementById('status').innerHTML = 'Email cannot be empty';
				return false;
			}
			else {
				var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				if (!re.test(email)) {
					document.getElementById('status').innerHTML = 'Email format invalid';
					return false;
				}
			}
			var subject = document.getElementById('subject').value;
			if (subject === '') {
				document.getElementById('status').innerHTML = 'Subject cannot be empty';
				return false;
			}
			var message = document.getElementById('message').value;
			if (message === '') {
				document.getElementById('status').innerHTML = 'Message cannot be empty';
				return false;
			}
			document.getElementById('status').innerHTML = 'Sending...';
			document.getElementById('contact-form').submit();
		}

		return (
			<div>
				<section id='contact'>
					<h1>Get in touch</h1>
					<div className='row'>
						<div className='col-md-9 mb-md-0 mb-5'>
							<form id='contact-form' name='contact-form' action='mail.php' method='POST'>
								<div className='row'>
									<div className='col-md-6'>
										<MDBInput id='name' label='Name' type='text' />
									</div>

									<div className='col-md-6'>
										<MDBInput id='email' label='Email' type='email' />
									</div>
								</div>

								<div className='row'>
									<div className='col-md-12'>
										<MDBInput
											for='subject'
											id='subject'
											name='subject'
											label='Subject'
											type='text'
										/>
									</div>
								</div>

								<div classNameName='row'>
									<div classNameName='col-md-12'>
										<div className='md-form'>
											<textarea
												type='text'
												id='message'
												name='message'
												rows='2'
												className='form-control md-textarea'
											/>
											<label for='message'>Message</label>
										</div>
									</div>
								</div>
							</form>

							<div className='text-center text-md-left'>
								<button className='btn btn-primary' onclick={validateForm}>
									Send
								</button>
							</div>
							<div className='status' />
						</div>

						{/* <div className='col-md-3 text-center'>
						<ul className='list-unstyled mb-0'>
							<li>
								<i className='fas fa-map-marker-alt fa-2x' />
								<p>Toronto, ON, Canada</p>
							</li>

							<li>
								<i className='fas fa-phone mt-4 fa-2x' />
								<p>+ 1-647-207-5206</p>
							</li>

							<li>
								<i className='fas fa-envelope mt-4 fa-2x' />
								<p>winta.hagos@gmail.com</p>
							</li>
						</ul>
					</div> */}
					</div>
				</section>
				{/* <Footer /> */}
			</div>
		);
	}
}
