'use strict'

const Web3 = require('web3')
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))

//console.log(web3.eth.accounts)
var coinbase = web3.eth.coinbase;
var balance = web3.eth.getBalance(coinbase);
console.log(coinbase)

module.exports = App
