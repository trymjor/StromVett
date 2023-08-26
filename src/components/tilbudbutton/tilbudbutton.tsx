import * as React from 'react';
import Button from '@mui/material/Button';
import './tilbudbutton.css';
import { Link } from 'react-router-dom';

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Sen:wght@500&display=swap" />

const tilbudbutton = () => {
    return (
        <Link to="/skjemaSide">
            <Button variant="contained" sx={{ 
                color: '#40545E', 
                backgroundColor: '#A7D7C5', 
                borderColor: '#A7D7C5', 
                borderRadius: '25px',
                '&:hover':{
                    backgroundColor: '#F9F8EB',
                }, 
                typography: {
                    fontFamily: 'Sen, sans-serif',
                    textTransform: 'none', // Use the Google Font and fallback fonts
            }, 
            }}>Få et tilbud</Button>
        </Link>
    );
};

export default tilbudbutton;