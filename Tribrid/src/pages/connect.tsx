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
                <Typography
                    variant="h3"
                    component="div"
                    className="title-connect"
                >
                    Connect with us
                </Typography>
            </div>
        </div>
    )
}

export default Connect
