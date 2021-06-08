import React, { useState } from 'react';
import "./App.css";

function SellStarForm({ accounts, app }) {
  const [price, setPrice] = useState(0);
  const [starID, setStarID] = useState(0);

  const handlePutStarUpForSale= async (event)=> {
    event.preventDefault();
    await app.putStarUpForSale(starID, price).send({from: accounts[0] }).then(res=> console.log(res)).catch(err=> console.log(err))
  }

    return (
        <form onSubmit={handlePutStarUpForSale}>
        <h2>Sell Your Star</h2>
          <label>
            Star Price
            <input type="number" name="Star Price" value={price} onChange={(event)=> setPrice(event.target.value)} />
          </label>
          <label>
            Star ID
            <input type="number" name="Star id" value={starID} onChange={(event)=> setStarID(event.target.value)}  />
          </label>
          <button type="submit" disabled={!starID}>Sell Star</button>
        </form>
    );
}

export default SellStarForm;