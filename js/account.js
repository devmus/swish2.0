import { $ } from './config.js';
import { getHistory } from './history.js';
import { resetAccountInfo, displayBalance } from './dom.js';

const displayAccount = $('#account-number');
const amountSection = $('.amount-section');
const historySection = $('.history-section');

export const checkBalance = async () => {
  resetAccountInfo();
  const accountAdress = await getAddress();
  const balance = await getBalance(accountAdress);

  const parsedBalance = parseInt(balance) / Math.pow(10, 18);
  displayBalance(parsedBalance);

  amountSection.style.display = 'block';
  historySection.style.display = 'block';
  getHistory(accountAdress);
};

export const getAddress = async () => {
  try {
    const accountAdressArray = await window.ethereum.request({
      method: 'eth_accounts',
      params: [],
    });
    const accountAdress = accountAdressArray[0];
    displayAccount.innerText = accountAdress;
    return accountAdress;
  } catch (error) {
    console.log(error);
  }
};

const getBalance = async (address) => {
  try {
    const response = await window.ethereum.request({
      method: 'eth_getBalance',
      params: [address, 'latest'],
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
