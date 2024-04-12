import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';




export default function Footer() {


    return (
        <div>
            <footer className='footer_section'>
                <Container maxWidth="md">
                    <Typography variant="body1" align="center">
                        © {new Date().getFullYear()} Portfolio  Made ❤️ by <Link href="https://yourwebsite.com">Deepak</Link>
                    </Typography>
                    
                </Container>
            </footer>
        </div>
    )
}
