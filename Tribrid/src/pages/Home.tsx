import React, { useRef, useEffect } from 'react'
import { Typography, Button } from '@mui/material'
import logo from '../pics/logo.jpg'
import './Home.css'
import Service from './service'
import Connect from './connect'
import Work from './work'
import About from './About'
import Navbar from '../Navbar'
const Home = () => {
    return (
        <div>
            <div
                className="welcome"
                style={{
                    height: '100vh',
                }}
            >
                <div className="welcome-text">
                    <Typography variant="h4" component="div" className="title">
                        Welcome to TriBrid Digital Agency, where we are
                        committed to revolutionizing the digital landscape for
                        businesses worldwide.
                    </Typography>
                </div>
                <div className="welcome-image">
                    <img className="image" src={logo} alt="" />
                </div>
            </div>
            <div id="service">
                <Service />
            </div>
            <div id="work">
                <Work />
            </div>
            <div id="about">
                <About />
            </div>
            <div id="connect">
                <Connect />
            </div>
        </div>
    )
}

export default Home
