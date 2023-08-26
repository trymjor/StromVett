import React from 'react';
import default_logo from '../../assets/images/default_logo.svg';
import Tilbudbutton from '../tilbudbutton/tilbudbutton';
import './navbar.css';
// @ts-ignore
import { Link } from 'react-scroll';

const navbar = () => {
    return (
        <div className="header">
            <div className="navbar">
                <div className="navbar_logo">
                    <Link to="hero" spy={true} smooth={true} offset={0} duration={500}>
                        <p>StrømVett</p>
                    </Link>
                </div>
                <div className="navbar_menu">
                    <ul>
                        <li className='nav-item'>
                            <Link to="about" spy={true} smooth={true} duration={500}>Om Oss</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="avtaler" spy={true} smooth={true}duration={500}>Strømavtaler</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="footer" spy={true} smooth={true} duration={500}>Kontakt</Link>
                        </li>
                        <li className='nav-item'>
                            <Tilbudbutton/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default navbar;