import React, { Component } from 'react';
import './footer.scss';

export default class Footer extends Component {
	render () {
		return (
			<div id='footer'>
				<section className='block'>
					<div className='block__left'>
						<h1 className='logo'>LINQ-U</h1>
					</div>
					<div className='block__center'>
						<div className='detail'>
							<h3>COMPANY</h3>
							<h5>About</h5>
							<h5>Careers</h5>
						</div>
						<div className='detail'>
							<h3>PRODUCT</h3>
							<h5>Business Partners</h5>
							<h5>Investors</h5>
						</div>
						<div className='detail'>
							<h3>SUPPORT</h3>
							<h5>Contact</h5>
							<h5>How it works</h5>
							<h5>FAQs</h5>
						</div>
					</div>
					<div className='block__right'>
						<h2>Stay in the loop</h2>
						<div className='social-media'>
							<a target='_blank' rel='noopener noreferrer'>
								<svg
									width='24px'
									height='24px'
									viewBox='0 0 28 28'
									version='1.1'
									xmlns='http://www.w3.org/2000/svg'
									xlink='http://www.w3.org/1999/xlink'
								>
									<title>LinkedIn</title>
									<desc>Please visit our LinkedIn page.</desc>
									<path
										d='M22.75,0 L5.25,0 C2.35156277,0 0,2.35156277 0,5.25 L0,22.75 C0,25.6484372 2.35156277,28 5.25,28 L22.75,28 C25.6484372,28 28,25.6484372 28,22.75 L28,5.25 C28,2.35156277 25.6484372,0 22.75,0 Z M8.65745246,23.7680294 L4.30769231,23.7680294 L4.28245246,10.7439909 L8.63221154,10.7439909 L8.65745246,23.7680294 Z M6.37319738,9.04026415 L6.34795646,9.04026415 C4.926082,9.04026415 4.00901415,8.06009615 4.00901415,6.84014477 C4.00901415,5.59074492 4.95552938,4.64423077 6.40264477,4.64423077 C7.84976015,4.64423077 8.73737954,5.59074492 8.76682692,6.84014477 C8.76682692,8.06009615 7.84555262,9.04026415 6.37319738,9.04026415 Z M23.738582,23.7680294 L19.3509615,23.7680294 L19.3509615,16.6923077 C19.3509615,14.980168 18.8966346,13.8149038 17.3653846,13.8149038 C16.195914,13.8149038 15.5649038,14.6015628 15.2620192,15.3629808 C15.1484372,15.636418 15.1189909,16.0108178 15.1189909,16.3936295 L15.1189909,23.7680294 L10.7103371,23.7680294 L10.6850962,10.7439909 L15.09375,10.7439909 L15.1189909,12.582332 C15.6826923,11.7115385 16.6207935,10.4789666 18.8671872,10.4789666 C21.6520435,10.4789666 23.7343755,12.2962743 23.7343755,16.2043269 L23.7343755,23.7680294 L23.738582,23.7680294 Z'
										id='Shape'
									/>
								</svg>
							</a>
							<a href='https://www.instagram.com/linq_u/' target='_blank' rel='noopener noreferrer'>
								<svg
									width='24px'
									height='24px'
									viewBox='0 0 48 48'
									version='1.1'
									xmlns='http://www.w3.org/2000/svg'
								>
									<title>Instagram</title>
									<desc>Please visit our Instagram page.</desc>
									<g id='Icons' stroke='none' stroke-width='1' fill-rule='evenodd'>
										<g id='Black' transform='translate(-500.000000, -160.000000)' fill='#000000'>
											<path
												d='M524.000048,160 C517.481991,160 516.664686,160.027628 514.104831,160.144427 C511.550311,160.260939 509.805665,160.666687 508.279088,161.260017 C506.700876,161.873258 505.362454,162.693897 504.028128,164.028128 C502.693897,165.362454 501.873258,166.700876 501.260017,168.279088 C500.666687,169.805665 500.260939,171.550311 500.144427,174.104831 C500.027628,176.664686 500,177.481991 500,184.000048 C500,190.518009 500.027628,191.335314 500.144427,193.895169 C500.260939,196.449689 500.666687,198.194335 501.260017,199.720912 C501.873258,201.299124 502.693897,202.637546 504.028128,203.971872 C505.362454,205.306103 506.700876,206.126742 508.279088,206.740079 C509.805665,207.333313 511.550311,207.739061 514.104831,207.855573 C516.664686,207.972372 517.481991,208 524.000048,208 C530.518009,208 531.335314,207.972372 533.895169,207.855573 C536.449689,207.739061 538.194335,207.333313 539.720912,206.740079 C541.299124,206.126742 542.637546,205.306103 543.971872,203.971872 C545.306103,202.637546 546.126742,201.299124 546.740079,199.720912 C547.333313,198.194335 547.739061,196.449689 547.855573,193.895169 C547.972372,191.335314 548,190.518009 548,184.000048 C548,177.481991 547.972372,176.664686 547.855573,174.104831 C547.739061,171.550311 547.333313,169.805665 546.740079,168.279088 C546.126742,166.700876 545.306103,165.362454 543.971872,164.028128 C542.637546,162.693897 541.299124,161.873258 539.720912,161.260017 C538.194335,160.666687 536.449689,160.260939 533.895169,160.144427 C531.335314,160.027628 530.518009,160 524.000048,160 Z M524.000048,164.324317 C530.40826,164.324317 531.167356,164.348801 533.69806,164.464266 C536.038036,164.570966 537.308818,164.961946 538.154513,165.290621 C539.274771,165.725997 540.074262,166.246066 540.91405,167.08595 C541.753934,167.925738 542.274003,168.725229 542.709379,169.845487 C543.038054,170.691182 543.429034,171.961964 543.535734,174.30194 C543.651199,176.832644 543.675683,177.59174 543.675683,184.000048 C543.675683,190.40826 543.651199,191.167356 543.535734,193.69806 C543.429034,196.038036 543.038054,197.308818 542.709379,198.154513 C542.274003,199.274771 541.753934,200.074262 540.91405,200.91405 C540.074262,201.753934 539.274771,202.274003 538.154513,202.709379 C537.308818,203.038054 536.038036,203.429034 533.69806,203.535734 C531.167737,203.651199 530.408736,203.675683 524.000048,203.675683 C517.591264,203.675683 516.832358,203.651199 514.30194,203.535734 C511.961964,203.429034 510.691182,203.038054 509.845487,202.709379 C508.725229,202.274003 507.925738,201.753934 507.08595,200.91405 C506.246161,200.074262 505.725997,199.274771 505.290621,198.154513 C504.961946,197.308818 504.570966,196.038036 504.464266,193.69806 C504.348801,191.167356 504.324317,190.40826 504.324317,184.000048 C504.324317,177.59174 504.348801,176.832644 504.464266,174.30194 C504.570966,171.961964 504.961946,170.691182 505.290621,169.845487 C505.725997,168.725229 506.246066,167.925738 507.08595,167.08595 C507.925738,166.246066 508.725229,165.725997 509.845487,165.290621 C510.691182,164.961946 511.961964,164.570966 514.30194,164.464266 C516.832644,164.348801 517.59174,164.324317 524.000048,164.324317 Z M524.000048,171.675683 C517.193424,171.675683 511.675683,177.193424 511.675683,184.000048 C511.675683,190.806576 517.193424,196.324317 524.000048,196.324317 C530.806576,196.324317 536.324317,190.806576 536.324317,184.000048 C536.324317,177.193424 530.806576,171.675683 524.000048,171.675683 Z M524.000048,192 C519.581701,192 516,188.418299 516,184.000048 C516,179.581701 519.581701,176 524.000048,176 C528.418299,176 532,179.581701 532,184.000048 C532,188.418299 528.418299,192 524.000048,192 Z M539.691284,171.188768 C539.691284,172.779365 538.401829,174.068724 536.811232,174.068724 C535.22073,174.068724 533.931276,172.779365 533.931276,171.188768 C533.931276,169.598171 535.22073,168.308716 536.811232,168.308716 C538.401829,168.308716 539.691284,169.598171 539.691284,171.188768 Z'
												id='Instagram'
											/>
										</g>
									</g>
								</svg>
							</a>
							<a target='_blank' rel='noopener noreferrer'>
								<svg
									width='24px'
									height='24px'
									viewBox='0 0 48 48'
									version='1.1'
									xmlns='http://www.w3.org/2000/svg'
								>
									<title>Facebook</title>
									<desc>Please visit our Facebook page.</desc>
									<g id='Icons' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
										<g id='Black' transform='translate(-200.000000, -160.000000)' fill='#000000'>
											<path
												d='M225.638355,208 L202.649232,208 C201.185673,208 200,206.813592 200,205.350603 L200,162.649211 C200,161.18585 201.185859,160 202.649232,160 L245.350955,160 C246.813955,160 248,161.18585 248,162.649211 L248,205.350603 C248,206.813778 246.813769,208 245.350955,208 L233.119305,208 L233.119305,189.411755 L239.358521,189.411755 L240.292755,182.167586 L233.119305,182.167586 L233.119305,177.542641 C233.119305,175.445287 233.701712,174.01601 236.70929,174.01601 L240.545311,174.014333 L240.545311,167.535091 C239.881886,167.446808 237.604784,167.24957 234.955552,167.24957 C229.424834,167.24957 225.638355,170.625526 225.638355,176.825209 L225.638355,182.167586 L219.383122,182.167586 L219.383122,189.411755 L225.638355,189.411755 L225.638355,208 L225.638355,208 Z'
												id='Facebook'
											/>
										</g>
									</g>
								</svg>
							</a>
						</div>
					</div>
				</section>
				<div className='terms'>
					<p>Terms and Conditions.</p>
					<small>© {new Date().getFullYear()} | Created by Taryn Li | All rights reserved.</small>
				</div>
			</div>
		);
	}
}
