import React, { useState } from 'react'
import { Typography, Button } from '@mui/material'
import './Service.css'
import social from '../pics/ads.png'
import web from '../pics/web.png'
const Service = () => {
    return (
        <div
            className="service"
            style={{
                height: '100vh',
            }}
        >
            <div className="service-text">
                <img
                    className="socimg"
                    src={social}
                    style={{ width: '600px', height: '600px' }}
                    alt=""
                />
                <Typography
                    variant="h2"
                    component="div"
                    className="title-social"
                    sx={{ width: '500px' }}
                >
                    Social Media Advertising
                </Typography>
            </div>

            <div className="service-text">
                <Typography variant="h2" component="div" className="title-dev">
                    Web Development
                </Typography>
                <img
                    className="webimg"
                    src={web}
                    style={{ width: '600px', height: '600px' }}
                    alt=""
                />
            </div>
        </div>
    )
}

export default Service
