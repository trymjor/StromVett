import './pricingelement.css'
import PricingBar from './PricingBar'

interface PricingElementProps{
  powersupplier: string
  price: number
  maxprice: number
  avtaletype: string
}

const PricingElement = (props: PricingElementProps) => {
  return (
    <div className='pricing_element'>
      <PricingBar maxprice={props.maxprice} price={props.price}/>
      <div className='pricing_element_container'>
        <h2>{props.powersupplier}</h2>
        <p>{props.price * 100} øre/kwh</p>
        <p>{props.avtaletype}</p>
      </div>
    </div>
  );
}

export default PricingElement;