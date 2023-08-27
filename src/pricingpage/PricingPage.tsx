import './pricingpage.css';

import axios from 'axios';
import React, { ReactElement, useEffect, useState } from 'react';
import PricingElement from './components/PricingElement';

type pricingModel = 'fixed' | 'variable' | 'spot-hourly' | 'spot-monthly'

interface Pricing{
  name: string
  pricingModel: pricingModel
  fixedPrice?: number
  variablePrice?: number
  spotPrice?: number
  monthlyFee: number
}

const PricingPage = () =>{
  const [pricing, setPricing] = useState<Array<Pricing>>([]);
  const [maxprice, setMaxprice] = useState<number>(0);

  const fetch = async () => {
    const {data} = await axios.get('https://future-of-fintech-v2023.vercel.app/api/providers');
    getMaxPrice(data);
    setPricing(data);
    console.log('SortedArray', pricing);
  }

  const getMaxPrice = (pricing: Array<Pricing>) => {
    pricing.forEach((pricing) => {
      if (pricing.pricingModel === 'fixed') {
        if(pricing.fixedPrice! > maxprice){
          setMaxprice(pricing.fixedPrice!);
        }
      }
      else if (pricing.pricingModel === 'variable') {
        if(pricing.variablePrice! > maxprice){
          setMaxprice(pricing.variablePrice!);
        }
      }
      else if (pricing.pricingModel === 'spot-hourly' || pricing.pricingModel === 'spot-monthly') {
        if(pricing.spotPrice! > maxprice){
          setMaxprice(pricing.spotPrice!);
        }
      }
    });
  }

  useEffect(() => {
    fetch();
  }, []);

const renderPricingElement = ():ReactElement => {
  return (
      <>
      {pricing.map((pricing, index) => {
      switch (pricing.pricingModel) {
        case 'fixed':
        return <PricingElement 
        key={index}
        powersupplier={pricing.name} 
        price={pricing.fixedPrice!} 
        maxprice={maxprice} 
        avtaletype='Fastprice'/>;
      case 'variable':
        return <PricingElement
        key={index}
        powersupplier={pricing.name}
        price={pricing.variablePrice!}
        maxprice={maxprice}
        avtaletype='Variable price'/>;
      case 'spot-hourly':
        return <PricingElement
        key={index}
        powersupplier={pricing.name}
        price={pricing.spotPrice!}
        maxprice={maxprice}
        avtaletype='Times spotprice'/>;
      case 'spot-monthly':
        return <PricingElement
        key={index}
        powersupplier={pricing.name}
        price={pricing.spotPrice!}
        maxprice={maxprice}
        avtaletype='Månedlig spotprice'/>;
      }
    })
  }
      </>
    )
}

  return (
    <div className="pricingpage" id="pricingpage">
      <div className="pricing_container">
        <div className='title_container'>
          <h1>Dette var de beste tilbudene:</h1>
        </div>
        <div className=''>
          <div className="description_container">
            <h2>Billigst</h2>
            <div className='description_line'></div>
            <h2>Dyrest</h2>
          </div>
          <div className='pricing_elements'>
            {renderPricingElement()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingPage;
