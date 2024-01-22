import React, { useState, useEffect } from 'react';
import Item from '../Item/Item';
import "./NewCollections.css";

const NewCollections = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const response = await fetch('http://localhost:4000/newcollections');
        const data = await response.json();
        console.log('Data from server:', data);
        setCollections(data);
      
      } catch (error) {
        console.error('Error fetching collections:', error);
      }
    };

    fetchCollections();
  }, []);

  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className='collections'>
        {collections.map((item, i) => (
          <Item key={i} id={item._id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        ))}
      </div>
    </div>
  );
};

export default NewCollections;
