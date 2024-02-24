import React, { useState } from 'react'
import { Typography, Button } from '@mui/material'
import './work.css'

const Work = () => {
    return (
        <div
            className="work"
            style={{
                height: '100vh',
            }}
        >
            <div className="work-text">
                <Typography variant="h4" component="div" className="title">
                    Our Work
                </Typography>
                <Typography variant="h6" component="div" className="title">
                    We have worked with a wide range of clients to help them
                    achieve their digital goals.
                </Typography>
            </div>
        </div>
    )
}

export default Work
