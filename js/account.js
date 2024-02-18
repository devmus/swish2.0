import { $ } from './config.js';
import { getHistory } from './history.js';
import { resetAccountInfo } from './dom.js';

const displayAccount = $('#account-number');
const displayBalance = $('#balance');
const amountSection = $('.amount-section');
const historySection = $('.history-section');

export const checkBalance = async () => {
  resetAccountInfo();
  const accountAdress = await getAddress();
  const balance = await window.ethereum.request({
    method: 'eth_getBalance',
    params: [accountAdress, 'latest'],
  });
  const parsedBalance = parseInt(balance) / Math.pow(10, 18);
  displayBalance.innerText = `${parsedBalance} ETH`;

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
