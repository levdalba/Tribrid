import { AppBar, Toolbar, Typography, Button } from '@mui/material'

import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from './pics/logo.jpg'
import { styled } from '@mui/system'

const StyledButton = styled(Button)({
    padding: '7px',
    marginRight: '7px',
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
        color: '#B4D4FF',
    },
    '&:hover:before': {
        transform: 'scaleX(1)',
    },
    '&:before': {
        content: '""',
        position: 'absolute',
        width: '100%',
        height: '2px',
        bottom: '0',
        left: '0',
        backgroundColor: '#B4D4FF',
        transform: 'scaleX(0)',
        transition: 'transform 0.4s ease-in-out',
    },
})

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
                        to="/"
                        color="inherit"
                        sx={{
                            padding: '7px',
                            marginRight: '7px',
                            fontVariant: 'roboto',
                            position: 'relative',
                            transition: 'color 2s ease-in-out',
                            '&:before': {
                                content: '""',
                                position: 'absolute',
                                width: '100%',
                                height: '2px',
                                bottom: '0',
                                left: '0',
                                backgroundColor: '#B4D4FF',
                                transform: 'scaleX(0)',
                                transition: 'transform 0.4s ease-in-out',
                            },
                            '&:hover': {
                                color: '#B4D4FF',
                            },
                            '&:hover:before': {
                                transform: 'scaleX(1)',
                            },
                        }}
                    >
                        Home
                    </Button>
                    <Button
                        component="a"
                        href="#service"
                        color="inherit"
                        sx={{
                            padding: '7px',
                            marginRight: '7px',
                            fontVariant: 'roboto',
                            position: 'relative',
                            transition: 'color 2s ease-in-out',
                            '&:before': {
                                content: '""',
                                position: 'absolute',
                                width: '100%',
                                height: '2px',
                                bottom: '0',
                                left: '0',
                                backgroundColor: '#B4D4FF',
                                transform: 'scaleX(0)',
                                transition: 'transform 0.4s ease-in-out',
                            },
                            '&:hover': {
                                color: '#B4D4FF',
                            },
                            '&:hover:before': {
                                transform: 'scaleX(1)',
                            },
                        }}
                    >
                        Service
                    </Button>
                    <Button
                        component="a"
                        href="#work"
                        color="inherit"
                        sx={{
                            padding: '7px',
                            marginRight: '7px',
                            fontVariant: 'roboto',
                            position: 'relative',
                            transition: 'color 2s ease-in-out',
                            '&:before': {
                                content: '""',
                                position: 'absolute',
                                width: '100%',
                                height: '2px',
                                bottom: '0',
                                left: '0',
                                backgroundColor: '#B4D4FF',
                                transform: 'scaleX(0)',
                                transition: 'transform 0.4s ease-in-out',
                            },
                            '&:hover': {
                                color: '#B4D4FF',
                            },
                            '&:hover:before': {
                                transform: 'scaleX(1)',
                            },
                        }}
                    >
                        Work
                    </Button>
                    <Button
                        component={Link}
                        to="/about"
                        color="inherit"
                        sx={{
                            padding: '7px',
                            marginRight: '7px',
                            fontVariant: 'roboto',
                            position: 'relative',
                            transition: 'color 2s ease-in-out',
                            '&:before': {
                                content: '""',
                                position: 'absolute',
                                width: '100%',
                                height: '2px',
                                bottom: '0',
                                left: '0',
                                backgroundColor: '#B4D4FF',
                                transform: 'scaleX(0)',
                                transition: 'transform 0.4s ease-in-out',
                            },
                            '&:hover': {
                                color: '#B4D4FF',
                            },
                            '&:hover:before': {
                                transform: 'scaleX(1)',
                            },
                        }}
                    >
                        About Us
                    </Button>
                </div>

                <Button
                    component="a"
                    href="#connect"
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
