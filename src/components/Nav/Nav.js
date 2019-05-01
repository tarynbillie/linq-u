import React, { Component } from 'react'
import './nav.scss'

export default class Nav extends Component {


    render() {

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
                <ul role="navigation">
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Login</li>
                    <li>
                        <button className='cta'>
                            Book now
                        </button>
                    </li>
                </ul>
            </nav>
        )
    }
}
