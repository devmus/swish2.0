import { $ } from './config.js';

const displayAccount = $('#account-number');
const displayBalance = $('#balance');
const amountSection = $('.amount-section');

export const checkBalance = async () => {
  const accountAdress = await getAdress();

  const balance = await window.ethereum.request({
    method: 'eth_getBalance',
    params: [accountAdress, 'latest'],
  });
  const parsedBalance = parseInt(balance) / Math.pow(10, 18);
  displayBalance.innerText = parsedBalance;

  amountSection.style.display = 'block';
};

export const getAdress = async () => {
  const accountAdressArray = await window.ethereum.request({
    method: 'eth_accounts',
    params: [],
  });
  const accountAdress = accountAdressArray.toString();
  displayAccount.innerText = accountAdress;
  console.log(accountAdress);

  return accountAdress;
};
