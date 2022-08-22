require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/M-UZVJingUPAhgqDZlQ4mhA1zfT3ZgkC', 
      accounts: [ '9e65a561b7a52c45ed2be41e3e0d0d66f4032431c929929f162821d7a89e5e97' ]
    }
  }
}