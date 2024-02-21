import {
  getChainId,
  getURL,
  settings,
  transactionsByAdress,
} from './config.js';
import { displayTrx } from './dom.js';

class HttpClient {
  API_KEY = '';
  url = '';

  constructor(url, API_KEY) {
    this.url = url;
    this.API_KEY = API_KEY;
  }

  async get(scanUrl, accountAddress) {
    try {
      this.url = `${scanUrl}${transactionsByAdress.query1}${accountAddress}${transactionsByAdress.query2}${settings.API_KEY}`;
      const response = await fetch(this.url);
      if (response.ok) {
        const result = await response.json();
        return result;
      } else {
        throw new Error(`${response.status} ${response.statusText}`);
      }
    } catch (error) {
      throw new Error(`Ett fel inträffade i get metoden: ${error}`);
    }
  }
}

export const getTransactions = async (accountAddress) => {
  const chainId = await getChainId();
  const scanURL = await getURL(chainId, 'scan');
  const transactionHistoryArray = await new HttpClient().get(
    scanURL,
    accountAddress
  );
  for (let transaction of transactionHistoryArray.result) {
    const regularURL = await getURL(chainId, 'regular');
    const web3 = new Web3(regularURL);
    let trxHash = await web3.eth.getTransaction(transaction.hash);
    displayTrx(trxHash);
  }
};
