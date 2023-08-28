import CarouselComponent from './components/CarouselComponent';
import './deals.css';

const Deals = () => {
    return (
        <div>
            <div className="deals" id="deals">
                <div className='deals_container'>
                    <div className='title_container'>
                        <h1>Strømavtaler</h1>
                    </div>
                    <CarouselComponent/>
                </div>
            </div>
        </div>
    )
};

export default Deals;