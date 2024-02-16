import { setURL } from './config.js';
import { displayTrxCount, displayLatestBlock } from './dom.js';
import { getTransactions } from './etherscan.js';

export const getHistory = async (accountAddress) => {
  const url = await setURL();
  const web3 = new Web3(url);

  const trxCount = await web3.eth.getTransactionCount(accountAddress);
  const block = await web3.eth.getBlockNumber();
  displayTrxCount(trxCount);
  displayLatestBlock(block);
  getTransactions(accountAddress);
};
