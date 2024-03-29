import { getAddress } from './account.js';
import { $, getChainId, getURL } from './config.js';
import { historicBalance } from './history.js';
import { shortenAddress } from './address.js';

const displayNetworkContainer = $('.display-network');
const historySection = $('.history-section');
const displayAccount = $('#account-number');
const balanceHtml = $('#balance');
const historyInfo = $('.history-info');

export const displayNetwork = (text) => {
  if (text !== 'Nätverkslista') {
    displayNetworkContainer.textContent = text;
    const container = displayNetworkContainer.parentElement;
    const containerId = text.replace(/ /g, '').toLowerCase();
    container.setAttribute('id', containerId);
    return containerId;
  }
};

export const displayBalance = (balance) => {
  balanceHtml.innerText = `${balance} ETH`;
};

export const displayTrxCount = (trxCount) => {
  const createDiv = document.createElement('div');
  createDiv.innerText = `Antal utgående överföringar: ${trxCount}`;
  createDiv.setAttribute('id', 'trx-count');
  historySection.appendChild(createDiv);
};

export const displayLatestBlock = (block) => {
  const createDiv = document.createElement('div');
  createDiv.innerText = `Senaste blocknummret på kedjan: ${block}`;
  createDiv.setAttribute('id', 'block-latest');
  historySection.appendChild(createDiv);
};

export const resetAccountInfo = () => {
  displayAccount.innerText = 'Din kontoadress';
  balanceHtml.innerText = 'Din kontobalans';
  if (document.querySelector('#trx-count')) {
    document.querySelector('#trx-count').remove();
  }
  if (document.querySelector('#block-latest')) {
    document.querySelector('#block-latest').remove();
  }
  if (document.querySelector('.trx-history-details')) {
    document.querySelector('.history-info').innerHTML = '';
  }
};

export const displayTrx = async (trx) => {
  const chainId = await getChainId();

  const createDiv = document.createElement('div');
  createDiv.classList.add('trx-history-details');
  const spanReciever = document.createElement('span');
  const createLink = document.createElement('a');
  const spanValue = document.createElement('span');
  const spanBlock = document.createElement('span');

  const parsedValue = parseInt(trx.value) / Math.pow(10, 18);
  const shortenedAddress = shortenAddress(trx.to);
  const historyURL = await getURL(chainId, 'history');
  const currentAddress = await getAddress();

  let balance;
  if (currentAddress === trx.to || currentAddress === trx.from) {
    balance = await historicBalance(currentAddress, trx.blockHash);
  }

  const parsedBalance = parseInt(balance) / Math.pow(10, 18);

  const link = `${historyURL}${trx.hash}`;
  createLink.setAttribute('href', link);
  createLink.setAttribute('target', '_blank');

  spanReciever.innerText = shortenedAddress;
  spanValue.innerText = parsedValue;
  spanBlock.innerText = parsedBalance.toFixed(5);

  createLink.appendChild(spanReciever);
  createDiv.appendChild(createLink);
  createDiv.appendChild(spanValue);
  createDiv.appendChild(spanBlock);
  historyInfo.appendChild(createDiv);
};
