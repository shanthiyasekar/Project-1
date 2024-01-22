import React, { useEffect, useState } from 'react'
import "./Popular.css"
import Item from '../Item/Item'

const Popular = () => {
  const [popular,setPopular]=useState([]);

  useEffect(() => {
    const fetchPopularCollections = async () => {
      try {
        const response = await fetch("http://localhost:4000/getpopular");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const data = await response.json();
        console.log(data);
        setPopular(data);
      } catch (error) {
        console.error('Error fetching collections:', error.message);
      }
    };
  
    fetchPopularCollections();
  }, []);
  
  return (
    <div className='popular'>
        <h1>POPULAR IN WOMEN</h1>
        <hr/>
        <div className='popular-item'>
            {popular.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price}
                old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default Popular