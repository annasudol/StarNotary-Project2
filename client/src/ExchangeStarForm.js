import React, { useState } from 'react';
import "./App.css";

function SellStarForm({ accounts, app }) {
    const [starID1, setStarID1] = useState(0);
    const [starID2, setStarID2] = useState(0);

  const handleExchangeStars= async (event)=> {
    event.preventDefault();
    await app.exchangeStars(starID1, starID2).send({from: accounts[0] });
  }

    return (
        <form onSubmit={handleExchangeStars}>
        <h2>Exchange Star</h2>
          <label>
            Your Star ID
            <input type="number" name="Star id" value={starID1} onChange={(event)=> setStarID1(event.target.value)}  />
          </label>
          <label>
            Star ID to exchange
            <input type="number" name="Star id to exchange" value={starID2} onChange={(event)=> setStarID2(event.target.value)}  />
          </label>
          <button type="submit" disabled={!starID1 || !starID1}>Exchange Star</button>
        </form>
    );
}

export default SellStarForm;

