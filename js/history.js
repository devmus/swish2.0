import { getChainId, getURL } from './config.js';
import { displayTrxCount, displayLatestBlock } from './dom.js';
import { getTransactions } from './etherscan.js';

export const getHistory = async (accountAddress) => {
  const chainId = await getChainId();
  const regularURL = await getURL(chainId, 'regular');
  const web3 = new Web3(regularURL);

  const trxCount = await web3.eth.getTransactionCount(accountAddress);
  const block = await web3.eth.getBlockNumber();

  displayTrxCount(trxCount);
  displayLatestBlock(block);
  getTransactions(accountAddress);
};

export const historicBalance = async (address, block) => {
  const chainId = await getChainId();
  const regularURL = await getURL(chainId, 'regular');
  const web3 = new Web3(regularURL);

  const balance = await web3.eth.getBalance(address, block);
  return balance;
};
