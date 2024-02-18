import React, { useState } from 'react'
import { Typography, Button } from '@mui/material'
import bg from '../pics/bg.jpg'
const Home = () => {
    return (
        <div>
            <div className="welcome">
                <img
                    className="bg"
                    style={{
                        width: '1536   px',
                        height: '714.4px',
                        filter: 'blur(1.5px)',
                    }}
                    src={bg}
                    alt=""
                />
            </div>
        </div>
    )
}

export default Home
