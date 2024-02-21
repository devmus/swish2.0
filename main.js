import { $ } from './js/config.js';
import { chosenNetwork } from './js/network.js';
import { checkBalance } from './js/account.js';
import { sendTrx } from './js/transfer.js';

const networkChoice = $('#network');
const checkBalanceButton = $('#check-balance');
const sendTrxButton = $('#send-trx');
networkChoice.selectedIndex = 0;

const initApp = () => {
  networkChoice.addEventListener('change', () => chosenNetwork(networkChoice));
  checkBalanceButton.addEventListener('click', () => checkBalance());
  sendTrxButton.addEventListener('click', () => sendTrx());
};

document.addEventListener('DOMContentLoaded', initApp);
