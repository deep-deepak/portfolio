import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
    },
}));

export default function Header() {
    const classes = useStyles();
    const navigate = useNavigate();


    return (
        <AppBar position="sticky" className='header_section' style={{ backgroundColor: "#23242E" ,boxShadow: "0 0px 7px 2px #D79848"}}>
            <Toolbar>
                <Typography variant="h6" className={classes.title} onClick={()=>navigate('/')}>
                    <span>D</span>eepa<span>K</span>
                </Typography>
                <Button color="inherit" className={window.location.pathname==="/about" ? "active_nav" : ""} onClick={()=>navigate('/about')}>About</Button>
                <Button color="inherit" className={window.location.pathname==="/resume" ? "active_nav" : ""} onClick={()=>navigate('/resume')}>Resume</Button>
                <Button color="inherit" className={window.location.pathname==="/portfolio" ? "active_nav" : ""} onClick={()=>navigate('/portfolio')}>Portfolio</Button>
                <Button color="inherit" className={window.location.pathname==="/contact" ? "active_nav" : ""} onClick={()=>navigate('/contact')}>Contact</Button>
            </Toolbar>
        </AppBar>
    )
}
