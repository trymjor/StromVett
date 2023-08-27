import React from 'react';
import './hero.css';
import Tilbudbutton from '../../../common/tilbudbutton/tilbudbutton';
import HeroStockPhoto from '../../../assets/images/HeroStockPhoto.jpg';

const hero = () => {
    return (
        <div className="hero" id="hero">
            <div className="hero_container">
                <div className="left_container">
                    <h1>For en rimeligere strømavtale</h1>
                    <h2>- Vi gjør det lettere for deg å finne <br/>
                    din beste strømavtale.</h2>
                    <Tilbudbutton/>
                </div>
                <div className="right_container">
                    <img src={HeroStockPhoto} alt="Woman holding baby with light in the back" className='hero_photo'/>
                </div>
            </div>
        </div>
    );
};

export default hero;