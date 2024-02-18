import { $ } from './js/config.js';
import { chosenNetwork } from './js/network.js';
import { checkBalance } from './js/account.js';
import { sendTrx } from './js/transfer.js';

const networkChoice = $('#network');

const initApp = async () => {
  networkChoice.selectedIndex = 0;
  networkChoice.addEventListener('change', () => chosenNetwork(networkChoice));

  const checkBalanceButton = $('#check-balance');
  checkBalanceButton.addEventListener('click', () => checkBalance());

  const sendTrxButton = $('#send-trx');
  sendTrxButton.addEventListener('click', () => sendTrx());
};

document.addEventListener('DOMContentLoaded', initApp);
