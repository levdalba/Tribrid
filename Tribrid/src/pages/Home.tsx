import React, { useState } from 'react'
import { Typography, Button } from '@mui/material'
import bg from '../pics/bg.jpg'
import './Home.css'
const Home = () => {
    return (
        <div
            className="welcome"
            style={{
                backgroundImage: `url(${bg})`,
                height: '714.4px',
                filter: 'blur(1.5px)',
            }}
        ></div>
    )
}

export default Home
