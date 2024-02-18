import { setURL } from './config.js';
import { displayTrxCount, displayLatestBlock } from './dom.js';
import { getTransactions } from './etherscan.js';

export const getHistory = async (accountAddress) => {
  const url = await setURL();
  const web3 = new Web3(url);

  const trxCount = await web3.eth.getTransactionCount(accountAddress);
  const block = await web3.eth.getBlockNumber();

  // console.log(web3.eth);

  // const blockHash = Number(block).toString(16);

  // console.log(blockHash);

  // const balance = await historicBalance(accountAddress, blockHash);

  displayTrxCount(trxCount);
  displayLatestBlock(block);
  getTransactions(accountAddress);
};

export const historicBalance = async (address, block) => {
  const url = await setURL();
  const web3 = new Web3(url);

  const balance = web3.eth.getBalance(address, block);
  return balance;
};
