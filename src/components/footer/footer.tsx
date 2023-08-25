import './footer.css';
// @ts-ignore
import { Link } from 'react-scroll';

const footer = () => {  
    return (
        <div className="footer" id='footer'>
            <div className='footer_container'>
                <div className='footer_left_container'>
                    <h2>Oversikt</h2>
                    <ul>
                        <li>
                            <Link to="hero" spy={true} smooth={true} offset={0} duration={500}>
                                Hjem
                            </Link>
                        </li>
                        <li>
                            <Link to="about" spy={true} smooth={true} duration={500}>
                                Om Oss
                            </Link>
                        </li>
                        <li>
                            <Link to="avtaler" spy={true} smooth={true}duration={500}>
                                Strømavtaler
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='footer_center_container'>
                    <h2>StrømVett</h2>
                    <ul>
                        <li><a href="#footer">Få et tilbud</a></li>
                    </ul>
                </div>
                <div className='footer_right_container'>
                    <h2>Kontakt</h2>
                    <ul>
                        <li><p>+47 99 88 77 66</p></li>
                        <li><p>Org.nr 913843539583</p></li>
                        <li><p>Strømvett Allé 47, <br/> 0166 Oslo, Norge </p></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default footer;