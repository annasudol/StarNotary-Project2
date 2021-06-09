var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "orange apple banana ... ";
module.exports = {
 networks: {
  development: {
    host: "127.0.0.1",     // Localhost (default: none)
    port: 9545,            // Standard Ethereum port (default: none)
    network_id: "*",       // Any network (default: none)
  },
  rinkeby: {
      provider: function() { 
       return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/443eb53cf6f346a3b65cc4d97867a33c");
      },
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000,
  }
 }
};