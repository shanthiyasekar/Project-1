import React from 'react'
import './Breadcrums.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'
const Breadcrums = ({product}) => {
  if (!product || !product.category) {
    // Handle the case where data or data.category is undefined
    return null; // or return a loading indicator, error message, etc.
}
  console.log(product);
  return (
    <div className='breadcrum'>
        HOME <img src={arrow_icon}alt=""/> SHOP <img src={arrow_icon} alt=""/> {product.category} <img src={arrow_icon} alt=""/> {product.name}
    </div>
  )
}

export default Breadcrums