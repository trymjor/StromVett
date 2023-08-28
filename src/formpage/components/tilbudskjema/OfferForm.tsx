import { TextField } from "@mui/material";
import './offerform.css'

const OfferForm = () => {
    return (
        <div className="form_container">
            <form>
                <div className="input_field">
                <p>Postnummer:</p>
                    <TextField type="number" size="small" sx={{
                            width: {sm: 300},
                            color: '#40545E', 
                            backgroundColor: '#F4F9F4',
                            borderColor: '#A7D7C5',
                        }}/>
                </div>
                <div className="input_field">
                <p>Gjennomsnittlig månedlig strømforbruk:</p>
                    <TextField type="number" size="small" sx={{
                            width: {sm: 300},
                            color: '#40545E', 
                            backgroundColor: '#F4F9F4',
                            borderColor: '#A7D7C5',
                        }} InputProps={{endAdornment: 'kWh'}}/>
                </div>
            </form>
        </div>
    );
};

export default OfferForm;