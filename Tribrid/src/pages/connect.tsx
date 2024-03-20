import React from 'react'
import { Typography } from '@mui/material'
import './connect.css'
import facebookLogo from '../pics/facebook-logo.png'
import linkedinLogo from '../pics/linkedin-logo.png'
import emailLogo from '../pics/email-logo.webp'
const Connect = () => {
    return (
        <div className="connect" style={{ height: '70vh' }}>
            <div className="connect-text">
                <Typography
                    variant="h4"
                    component="div"
                    className="title-connect"
                >
                    Connect With Us
                </Typography>
            </div>
            <div style={{ width: '80%' }}>
                <hr />
                <div className="logo-container">
                    <a
                        href="https://www.facebook.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Send us a message on Facebook
                        <img
                            src={facebookLogo}
                            alt="Facebook"
                            className="logo-link"
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Send us a message on LinkedIn
                        <img
                            src={linkedinLogo}
                            alt="LinkedIn"
                            className="logo-link"
                        />
                    </a>
                    <a href="levandalbashvili00@gmail.com">
                        <img
                            src={emailLogo}
                            alt="Email"
                            className="logo-link"
                        />
                        Send us an email
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Connect
