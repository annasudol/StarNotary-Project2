import React, { useState } from 'react';

function StarInfo1({ accounts, app }) {
  const [starInfoResponse, setStarInfoResponse] = useState(null);
  const [starID, setStarID] = useState('');

  const handleSubmitStarInfo= async (event)=> {
    event.preventDefault();
    await app.lookUptokenIdToStarInfo(starID).send({from: accounts[0] }).then(res=> setStarInfoResponse({blockHash: res.blockHash}));
  }
    return (
       <>
        <form onSubmit={handleSubmitStarInfo}>
          <h2>Get Star Info</h2>
          <label>
              Star ID
              <input type="text" name="Star id" value={starID} onChange={(event)=> setStarID(event.target.value)}  />
            </label>
          <button disabled={!starID} type="submit">Star Info</button>
        </form>
        {starInfoResponse && (
        <div className="box">
            <h3 className="title">Block Hash:</h3>
            <p className="title-info">{starInfoResponse.blockHash}</p>
        </div>
        )}
       </>
    );
}

export default StarInfo1;
