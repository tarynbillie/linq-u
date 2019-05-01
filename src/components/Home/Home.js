import React from 'react'
import Nav from '../Nav/Nav'
import './home.scss'

function Home() {
    return (
        <div className='container'>
            <Nav />
            <div className='content'>
                <h1>Welcome to <span>LINQ-U</span>, where all your beauty and health perfessions come to <i>you</i>.</h1>
                <button>Find your local business</button>
            </div>
        </div>
    )
}

export default Home;
