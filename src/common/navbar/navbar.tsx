import React, { useEffect, useState } from 'react';
import Tilbudbutton from '../offerbutton/OfferButton';
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
                            {
                                isHomePage ? (<ScrollLink to="about" spy={true} smooth={true} duration={500}>Om Oss</ScrollLink>) : 
                                (<Link to='/' style={{ textDecoration: 'none' }}>Om Oss</Link>)
                            }
                        </li>
                        <li className='nav-item'>
                            {
                                isHomePage ? (<ScrollLink to="deals" spy={true} smooth={true} duration={500}>Strømavtaler</ScrollLink>) :
                                (<Link to='/' style={{ textDecoration: 'none' }}>Strømavtaler</Link>)
                            }
                        </li>
                        <li className='nav-item'>
                            {
                                isHomePage ? (<ScrollLink to="footer" spy={true} smooth={true} duration={500}>Kontakt</ScrollLink>) :
                                (<Link to='/' style={{ textDecoration: 'none' }}>Kontakt</Link>)
                            }
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