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

const Logo = () => (
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
)

const NavLink = ({
    to,
    children,
}: {
    to: string
    children: React.ReactNode
}) => (
    <Button
        component="a"
        color="inherit"
        href={to}
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
        {children}
    </Button>
)

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar className="navbar">
                <NavLink to="/">
                    <Logo />
                </NavLink>

                <div className="links">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="#service">Service</NavLink>
                    {/* <NavLink to="#work">Work</NavLink> */}
                    <NavLink to="#about">About Us</NavLink>
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
