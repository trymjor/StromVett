import './pricingbar.css'

interface PricingBarProps{
    maxprice: number
    price: number
}

const PricingBar = (props: PricingBarProps) => {
    const percentage = (props.price/props.maxprice)*100
    return (
        <div className="pricingbar">
            <div className="outer_bar">
            </div>
            <div className="inner_bar" style={{height: `${percentage}%`}}>
            </div>
        </div>
    );
};

export default PricingBar;