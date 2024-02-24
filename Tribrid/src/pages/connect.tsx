import React, { useState } from 'react'
import { Typography, Button } from '@mui/material'
import './connect.css'

const Connect = () => {
    return (
        <div
            className="connect"
            style={{
                height: '100vh',
            }}
        >
            <div className="connect-text">
                <Typography variant="h4" component="div" className="title">
                    Connect with us
                </Typography>
                <Typography variant="h6" component="div" className="title">
                    We are committed to helping businesses grow and thrive in
                    the digital landscape. Contact us today to learn more about
                    how we can help your business.
                </Typography>
            </div>
        </div>
    )
}

export default Connect
