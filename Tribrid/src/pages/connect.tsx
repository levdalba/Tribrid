import React, { useState } from 'react'
import { Typography } from '@mui/material'
import './connect.css'
import facebookLogo from '../pics/facebook-logo.png'
import linkedinLogo from '../pics/linkedin-logo.png'
import emailLogo from '../pics/email-logo.webp'
import swal from 'sweetalert'

const Connect = () => {
    const [message, setMessage] = useState('')

    const handleLogoClick = async (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        e.preventDefault()
        const href = e.currentTarget.getAttribute('href') || ''
        try {
            await navigator.clipboard.writeText(href)
            swal('Success', 'Copied to clipboard!', 'success')
        } catch (err) {
            swal('Error', 'Failed to copy text.', 'error')
        }
    }
    return (
        <div className="connect" style={{ height: '100vh' }}>
            <div className="connect-text">
                <Typography
                    variant="h4"
                    component="div"
                    className="title-connect"
                >
                    Connect With Us
                </Typography>
            </div>
            <div style={{ width: '80%', marginTop: '500px' }}>
                <hr style={{ marginBottom: '40px' }} />
                <div className="logo-container">
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <a
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noreferrer"
                            className="link"
                        >
                            <img
                                src={facebookLogo}
                                alt="Facebook"
                                className="logo-link"
                                style={{ marginBottom: '10px' }}
                            />
                        </a>
                        <h2 style={{ color: 'white' }}>
                            Contact Us on Facebook
                        </h2>
                        <h3 style={{ color: 'white' }}>
                            Tribrid Digital Agency
                        </h3>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <a
                            href="https://www.linkedin.com/company/tribridagency"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src={linkedinLogo}
                                alt="LinkedIn"
                                className="logo-link"
                                style={{ marginBottom: '10px' }}
                            />
                        </a>
                        <h2 style={{ color: 'white' }}>
                            Contact Us on Facebook
                        </h2>
                        <h3 style={{ color: 'white' }}>
                            Tribrid Digital Agency
                        </h3>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <a
                            href="levandalbashvili00@gmail.com"
                            className="link"
                            onClick={handleLogoClick}
                        >
                            <img
                                src={emailLogo}
                                alt="Email"
                                className="logo-link"
                                style={{ marginBottom: '10px' }}
                            />
                        </a>
                        <h2 style={{ color: 'white' }}>Contact Us on Email</h2>
                        <h3 style={{ color: 'white' }}>tribrid@agency.com</h3>
                        <p>{message}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Connect
