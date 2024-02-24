import React, { useState } from 'react'
import { Typography, Button } from '@mui/material'
import './Service.css'
const Service = () => {
    return (
        <div
            className="service"
            style={{
                height: '100vh',
            }}
        >
            <div className="service-text">
                <Typography variant="h4" component="div" className="title">
                    Our Services
                </Typography>
                <Typography variant="h6" component="div" className="title">
                    We offer a wide range of digital services to help businesses
                    grow and thrive in the digital landscape.
                </Typography>
            </div>
        </div>
    )
}

export default Service
