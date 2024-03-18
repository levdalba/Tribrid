import React, { useState } from 'react'
import { Typography, Button } from '@mui/material'
import './About.css'
import bot from '../pics/aboutusbot.png'
import mid from '../pics/aboutusmiddle.png'
import top from '../pics/aboutustop.png'

const About = () => {
    return (
        <div
            className="about"
            style={{
                height: '100vh',
            }}
        >
            <div className="about-text">
                <Typography
                    variant="h3"
                    component="div"
                    className="title-t"
                    sx={{ marginTop: '50px' }}
                >
                    About Us
                </Typography>
                <Typography variant="h6" component="div" className="title">
                    <div>
                        <div className="title-t">
                            <div
                                style={{
                                    width: '50%',
                                    fontSize: '25px',
                                    padding: '10px',
                                }}
                            >
                                Welcome to Tribrid, your digital agency for
                                website development and advertising. Since [year
                                founded], we've been dedicated to helping
                                businesses succeed online.
                            </div>
                            <img
                                className="webimg"
                                src={top}
                                style={{
                                    width: '250px',
                                    height: '250px',
                                    rotate: '45deg',
                                }}
                                alt=""
                            />
                        </div>
                        <div className="title-m">
                            <img
                                className="webimg"
                                src={mid}
                                style={{
                                    width: '300px',
                                    height: '300px',
                                    marginTop: '-70px',
                                }}
                                alt=""
                            />
                            <div
                                style={{
                                    width: '45%',
                                    fontSize: '25px',
                                    padding: '10px',
                                }}
                            >
                                At Tribrid, we combine creativity, technology,
                                and strategy to deliver exceptional digital
                                experiences. Our team of experts is here to turn
                                your vision into reality, whether you need a
                                stunning website, digital advertising, or
                                enhanced online presence.
                            </div>
                        </div>
                        <div className="title-b">
                            <div
                                style={{
                                    width: '45%',
                                    fontSize: '25px',
                                    padding: '10px',
                                }}
                            >
                                Choose Tribrid for excellence and innovation.
                                Let's work together to make your business thrive
                                in the digital world.
                            </div>
                            <img
                                className="webimg"
                                src={bot}
                                style={{ width: '300px', height: '230px' }}
                                alt=""
                            />
                        </div>
                    </div>
                </Typography>
            </div>
        </div>
    )
}

export default About
