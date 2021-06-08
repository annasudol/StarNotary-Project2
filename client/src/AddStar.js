import React, { useState } from 'react';

function AddStar({ accounts, app }) {
  const [starName, setStarName] = useState('');
  const [starID, setStarID] = useState(0);

  const handleSubmitAddStar= async (event)=> {
    event.preventDefault();
    await app.createStar(starName, starID).send({from: accounts[0] });
  }
    return (
      <form onSubmit={handleSubmitAddStar}>
        <h2>Create new Star</h2>
          <label>
            Star Name
            <input type="text" name="Star Name" value={starName} onChange={(event)=> setStarName(event.target.value)} />
          </label>
          <label>
            Star ID
            <input type="number" name="Star id" value={starID} onChange={(event)=> setStarID(event.target.value)}  />
          </label>
          <button type="submit" disabled={!starName || !starID}>Create Star</button>
      </form>
    );
}

export default AddStar;
