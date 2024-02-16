import { $ } from './config.js';
import { getHistory } from './history.js';

const displayAccount = $('#account-number');
const displayBalance = $('#balance');
const amountSection = $('.amount-section');
const historySection = $('.history-section');

export const checkBalance = async () => {
  const accountAdress = await getAdress();

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

export const getAdress = async () => {
  const accountAdressArray = await window.ethereum.request({
    method: 'eth_accounts',
    params: [],
  });
  const accountAdress = accountAdressArray.toString();
  displayAccount.innerText = accountAdress;

  return accountAdress;
};
