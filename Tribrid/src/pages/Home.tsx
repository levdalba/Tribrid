import React, { useRef, useEffect } from 'react'
import { Typography, Button } from '@mui/material'
import logo from '../pics/logo.jpg'
import './Home.css'
import Service from './service'
import Connect from './connect'
import Work from './work'
import Navbar from '../Navbar'
const Home = () => {
    const serviceRef = useRef<HTMLDivElement>(null)
    const workRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (window.location.hash === '#service' && serviceRef.current) {
            serviceRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }, [])

    useEffect(() => {
        if (window.location.hash === '#work' && workRef.current) {
            workRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }, [])

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
            <div id="service" ref={serviceRef}>
                <Service />
            </div>
            <div id="work" ref={workRef}>
                <Work />
            </div>
            <div id="connect">
                <Connect />
            </div>
        </div>
    )
}

export default Home
