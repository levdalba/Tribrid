import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from './pics/logo.jpg'

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar className="navbar">
                <Button
                    color="inherit"
                    component={Link}
                    to="/"
                    className="links"
                    disableRipple
                >
                    <Typography
                        variant="h6"
                        component="div"
                        className="title"
                        style={{
                            fontFamily: "'Kode Mono', monospace",
                            letterSpacing: '1px',
                        }}
                    >
                        <img className="logo" src={logo} alt="" />
                        TriBrid
                    </Typography>
                </Button>

                <div className="links">
                    <Button
                        component={Link}
                        to="/portfolio"
                        color="inherit"
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
                        Home
                    </Button>
                    <Button
                        component={Link}
                        to="/portfolio"
                        color="inherit"
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
                        Service
                    </Button>
                    <Button
                        component={Link}
                        to="/portfolio"
                        color="inherit"
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
                        Portfolio
                    </Button>
                    <Button
                        component={Link}
                        to="/about"
                        color="inherit"
                        sx={{
                            padding: '7px',
                            marginRight: '7px',
                            '&:hover': {
                                backgroundColor: '#B4D4FF',
                                color: 'white',
                                transition: '0.6s',
                            },
                        }}
                    >
                        About Us
                    </Button>
                </div>

                <Button
                    component={Link}
                    to="/contact"
                    sx={{
                        border: '2px solid #4C9900',
                        color: '#00FF00',
                        borderRadius: '3px',
                        padding: '7px',
                        marginRight: '7px',
                        '&:hover': {
                            backgroundColor: '#3C9B75',
                            color: 'white',
                            transition: '0.6s',
                            border: '2px solid #3C9B75',
                        },
                    }}
                >
                    Let's Connect
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
