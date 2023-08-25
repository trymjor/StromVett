import './footer.css';

const footer = () => {  
    return (
        <div className="footer" id='footer'>
            <div className='footer_container'>
                <div className='footer_left_container'>
                    <h2>Oversikt</h2>
                    <ul>
                        <li><a href="#hero">Hjem</a></li>
                        <li><a href="#about">Om Oss</a></li>
                        <li><a href="#avtaler">Strømavtaler</a></li>
                    </ul>
                </div>
                <div className='footer_center_container'>
                    <h2>StrømVett</h2>
                </div>
                <div className='footer_right_container'>
                    <h2>Kontakt</h2>
                    <ul>
                        <li><a href="#footer">Kontakt</a></li>
                        <li><a href="#footer">Få et tilbud</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default footer;