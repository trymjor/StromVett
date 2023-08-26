import React from 'react';
import './skjemaside.css';
import Tilbudskjema from './components/tilbudskjema/tilbudskjema';

import Button from '@mui/material/Button';

const SkjemaSide = () =>{
    return (
      <div className="skjemaside" id="skjemaside">
        <div className="skjema_container">
          <div className='title_container'>
            <h1>Få et tilbud</h1>
            <h2>For å gi deg de beste tilbudene i ditt område trenger vi litt informasjon:</h2>
          </div>
          <div className="skjema_container">
            <Tilbudskjema/>
          </div>
          <div className='submit_button_container'>            
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
                textTransform: 'none', 
              }, 
            }}>Se dine tilbud</Button>
          </div>
        </div>
      </div>
    );
  }
  
  export default SkjemaSide;
  