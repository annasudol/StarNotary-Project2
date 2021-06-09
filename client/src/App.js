import React, { useState, useEffect } from 'react';
import StarNotary from "./contracts/StarNotary.json";

import getWeb3 from "./getWeb3";

import "./App.css";
import AddStar from "./AddStar.js";
import StarInfo from "./StarInfo.js";
import SellStarForm from "./SellStarForm.js";
import ExchangeStarForm from "./ExchangeStarForm.js"
function App() {
  const [app, setApp] = useState({ web3: null, accounts: null, contract: null });
 
  useEffect(() => {
    async function fetchApp() {
      try {
        const web3 = await getWeb3();
        const accounts = await web3.eth.getAccounts();
        const networkId = await web3.eth.net.getId();
        const deployedNetwork = StarNotary.networks[networkId];
        const instance = new web3.eth.Contract(
          StarNotary.abi,
          deployedNetwork && deployedNetwork.address,
        );
        setApp({ web3, accounts, contract: instance.methods });
      } catch (e) {
        alert(
          `Failed to load web3, accounts, or contract. Check console for details.`,
        );
        console.error('Failed to load web3');
      }
    }

    fetchApp()
    
}, []);

useEffect(()=> {
 console.log(app.contract)
}, [app.contract])



    if (!app.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    const { accounts, contract } = app
    return (
      <div className="App">
        <h1>StarNotary DAPP</h1>
        <AddStar accounts={accounts} app={contract}/>
        <StarInfo accounts={accounts} app={contract} />
        <SellStarForm accounts={accounts} app={contract} />
        <ExchangeStarForm accounts={accounts} app={contract} />
      </div>
    );
  
}

export default App;
