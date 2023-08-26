import React from 'react';
import './about.css';
import Tilbudbutton from '../../../common/tilbudbutton/tilbudbutton';
import save_money from '../../../assets/images/save-money.png';
import solution from '../../../assets/images/solution.png';


const about = () => {
    return (
        <div>
            <div className="about" id="about">
                <div className='about_container'>
                    <div className='title_container'>
                        <h1>Om StrømVett</h1>
                    </div>
                    <div className='about_content'>
                        <div className='upper_container'>
                            <div className='text_container'>
                                <p>Velkommen til StrømVett - Det ultimate verktøy for å få oversikt over de beste strømleverandørene. </p>

                                <p>I 2023 startet vi vårt prosjekt med et distinkt mål: å hjelpe familier og enkeltpersoner med å finne de mest gunstige tilbudene der ute.</p>
                            </div>
                            <img src={save_money} alt='Spar mer'/>
                        </div>
                        <div className='lower_container'>
                            <img src={solution} alt='Vi har løsningene'/>
                            <div className='text_container'>
                                <p>Vi tror på kraften av å små ting kan føre til store forskjeller.</p>
                                <p>Ved å gi deg innsikt i de beste tilbudene og en oversikt over de forskjellige mulighetene, ønsker vi å gjøre det enkelt for deg å velge riktig.</p>
                                <p>Se hvilke tilbud du kan få her:  </p>
                                <Tilbudbutton/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default about;