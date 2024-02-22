import React, { useState } from 'react'
import { Typography, Button } from '@mui/material'
import bg from '../pics/bg.jpg'
import './Home.css'
const Home = () => {
    return (
        <div
            className="welcome"
            style={{
                height: '714.4px',
            }}
        >
            <div className="welcome-text">
                <Typography
                    variant="h2"
                    component="div"
                    className="title"
                    style={{
                        fontFamily: "'Kode Mono', monospace",
                        letterSpacing: '1px',
                        color: 'white',
                    }}
                >
                    Welcome to Tribrid
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    sx={{
                        padding: '7px',
                        marginRight: '7px',
                        fontVariant: 'roboto',
                        '&:hover': {
                            backgroundColor: '#B4D4FF',
                            color: 'white',
                            transition: '0.6s',
                        },
                    }}
                >
                    Get Started
                </Button>
            </div>
        </div>
    )
}

export default Home
