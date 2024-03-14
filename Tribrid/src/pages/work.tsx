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
                    What we do
                </Typography>
                <Typography variant="h2" component="div" className="title">
                    Check out our work
                </Typography>
            </div>
            <div className=""></div>
        </div>
    )
}

export default Work
