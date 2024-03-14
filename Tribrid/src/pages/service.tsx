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
                >
                    <p style={{ color: 'white' }}>Soci</p>al&nbsp;
                    <p style={{ color: 'white' }}>Me</p>dia&nbsp;
                    <p style={{ color: 'white' }}>Adv</p>ert
                    <p style={{ color: 'white' }}>isi</p>ng
                </Typography>
            </div>

            <div className="service-text">
                <Typography variant="h2" component="div" className="title-dev">
                    <p style={{ color: 'white' }}>We</p>bsi
                    <p style={{ color: 'white' }}>te</p>&nbsp;De
                    <p style={{ color: 'white' }}>vel</p>opm
                    <p style={{ color: 'white' }}>en</p>t
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
