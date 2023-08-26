import { TextField } from "@mui/material";
import './tilbudskjema.css'

const TilbudSkjema = () => {
    return (
        <div className="skjema" id="skjema">
            <div className="container">
                <form>
                    <div className="input_field">
                    <p>Postnummer:</p>
                        <TextField type="number" size="small" sx={{
                                width: {sm: 150},
                                color: '#40545E', 
                                backgroundColor: '#F4F9F4',
                                borderColor: '#A7D7C5',
                            }}/>
                    </div>
                    <div className="input_field">
                    <p>Gjennomsnittlig månedlig strømforbruk:</p>
                        <TextField type="number" size="small" sx={{
                                width: {sm: 150},
                                color: '#40545E', 
                                backgroundColor: '#F4F9F4',
                                borderColor: '#A7D7C5',
                            }} InputProps={{endAdornment: 'kWh'}}/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TilbudSkjema;