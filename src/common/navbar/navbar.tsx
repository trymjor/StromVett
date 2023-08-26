import React, { useEffect, useState } from 'react';
import Tilbudbutton from '../tilbudbutton/tilbudbutton';
import './navbar.css';
// @ts-ignore
import { Link as ScrollLink } from 'react-scroll';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const currentPage = useLocation().pathname;
    const [isHomePage, setIsHomePage] = useState(useLocation().pathname === '/');

    useEffect(() => {
        setIsHomePage(currentPage === '/');
        window.scrollTo(0, 0)
    }, [currentPage]);

    return (
        <header className="header">
            <div className="navbar">
                <div className="navbar_logo">
                    {
                        isHomePage ? (
                            <ScrollLink to="hero" spy={true} smooth={true} offset={0} duration={500}>
                                <p>StrømVett</p>
                            </ScrollLink>
                        ) : (
                            <Link to='/' style={{ textDecoration: 'none' }}>
                                <p>StrømVett</p>
                            </Link>
                        )
                    }
                </div>
                <div className="navbar_menu">
                    <ul>
                        <li className='nav-item'>
                            <ScrollLink to="about" spy={true} smooth={true} duration={500}>Om Oss</ScrollLink>
                        </li>
                        <li className='nav-item'>
                            <ScrollLink to="avtaler" spy={true} smooth={true}duration={500}>Strømavtaler</ScrollLink>
                        </li>
                        <li className='nav-item'>
                            <ScrollLink to="footer" spy={true} smooth={true} duration={500}>Kontakt</ScrollLink>
                        </li>
                        <li className='nav-item' style={{borderBottom: 0,}}>
                            <Tilbudbutton/>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Navbar;