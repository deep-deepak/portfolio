import React from 'react';
import { makeStyles } from '@mui/styles';
import { Button, Grid } from "@mui/material"
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom'

const useStyles = makeStyles({
    heroSection: {
        position: 'relative',
        backgroundImage: `url("assets/banner_image.png")`, // Replace with the path to your image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '90vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
    },
    overlayText: {
        position: 'absolute',
        top: '50%',
        left: '30%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        color: "#D79848"
    },
    subtitle: {
        color: "#23242E",
        margin: "0 20% 2% 20%",
        textAlign: 'center',
    },
    paragraphtitle: {
        color: "#AB2D94",
        marginBottom: "20px",
        fontSize: "18px",
        fontWeight: "700",
        textAlign: 'center',
    },
    contactInfo: {
        textAlign: 'center',
        marginTop: '20px',
    },
});


export default function Banner() {
    const classes = useStyles();
    const navigate = useNavigate();

    const handleShowResume = () => {
        navigate('/resume')
    }

    return (
        <div>
            <div className={classes.heroSection}>
                <div className={classes.overlayText}>
                    <h1>Deepak Kumar</h1>
                    <h5 className={classes.subtitle}>Building bridges between the front end and the back end, one line of code at a time. Full-stack developer passionate about crafting seamless user experiences and robust server-side solutions.</h5>
                    <p className={classes.paragraphtitle}>FullStack Developer [ MERN ]</p>
                </div>
                <div className='resume_section'>
                    <Button onClick={handleShowResume}>Print resume</Button>
                    <Grid container spacing={2} justifyContent="center" className={classes.contactInfo}>
                        <Grid item xs={12} sm={6} md={4}>
                            <p><EmailIcon />deepak.deep1911</p>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <p><PhoneAndroidIcon />+91 62802-87747</p>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <p><HomeIcon />#334, Phase 1, Mohali 160055</p>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    )
}
