import React, { useState } from 'react'
import { Typography, Button } from '@mui/material'
import './About.css'

const About = () => {
    return (
        <div
            className="about"
            style={{
                height: '100vh',
            }}
        >
            <div className="about-text">
                <Typography variant="h4" component="div" className="title">
                    About Us
                </Typography>
                <Typography variant="h6" component="div" className="title">
                    We are committed to revolutionizing the digital landscape
                    for businesses worldwide.
                </Typography>
            </div>
        </div>
    )
}

export default About
