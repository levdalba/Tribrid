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
                    Social Media Advertising
                </Typography>
            </div>
            <div className="service-text">
                <Typography variant="h4" component="div" className="title">
                    Website Development
                </Typography>
            </div>
        </div>
    )
}

export default Service
