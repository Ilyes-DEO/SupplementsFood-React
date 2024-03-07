import React, { useState, useEffect } from 'react';

const Basket = () => {
  const [basketItems, setBasketItems] = useState([]);

  useEffect(() => {
    const basketData = JSON.parse(localStorage.getItem('basket') || '[]');
    setBasketItems(basketData);
  }, []);

  if (basketItems.length === 0) {
    return <p>Votre panier est vide.</p>;
  }

  return (
    <div>
      <h2>Votre Panier</h2>
      <ul>
        {basketItems.map((item, index) => (
          <li key={index}>
            {item.name} - Quantité: {item.quantity} - Saveur: {item.flavor} - Prix: {item.price} -QuantityDosage: {item.quantity_dosage}
          </li>
        ))}
      </ul>
      <div>
        
      </div>
    </div>
  );
};

export default Basket;
