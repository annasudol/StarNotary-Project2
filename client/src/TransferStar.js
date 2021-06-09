import React, { useState } from 'react';

function TransferStar({ accounts, app }) {
    const [starID, setStarID] = useState('');
    const [address, setAddress] = useState('');

  const handleTransferStars= async (event)=> {
    event.preventDefault();
    await app.transferStar(address, starID).send({from: accounts[0] });
  }

    return (
        <form onSubmit={handleTransferStars}>
        <h2>Transfer Star</h2>
          <label>
            Star ID
            <input type="text" name="Star id" value={starID} onChange={(event)=> setStarID(event.target.value)}  />
          </label>
          <label>
            Address
            <input type="text" name="address" value={address} onChange={(event)=> setAddress(event.target.value)}  />
          </label>
          <button type="submit" disabled={!starID || !address}>Transfer Star</button>
        </form>
    );
}

export default TransferStar;
