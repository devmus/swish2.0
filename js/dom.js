import { $, setHistoryURL } from './config.js';

const displayNetworkContainer = $('.display-network');
const historySection = $('.history-section');

const displayAccount = $('#account-number');
const displayBalance = $('#balance');

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
  displayBalance.innerText = 'Din kontobalans';
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

function shortenAddress(address) {
  if (!/^0x[a-fA-F0-9]{40}$/.test(address)) {
    return 'Invalid address format';
  }
  const firstPart = address.slice(0, 5);
  const lastPart = address.slice(-5);

  const shortenedAddress = firstPart + '...' + lastPart;

  return shortenedAddress;
}

export const displayTrx = async (trx) => {
  const createDiv = document.createElement('div');
  createDiv.classList.add('trx-history-details');
  const spanReciever = document.createElement('span');
  const createLink = document.createElement('a');
  const spanValue = document.createElement('span');
  const spanBlock = document.createElement('span');

  const parsedValue = parseInt(trx.value) / Math.pow(10, 18);
  const shortenedAddress = shortenAddress(trx.to);
  const url = await setHistoryURL();

  const link = `${url}${trx.hash}`;
  createLink.setAttribute('href', link);
  createLink.setAttribute('target', '_blank');

  spanReciever.innerText = shortenedAddress;
  spanValue.innerText = parsedValue;
  spanBlock.innerText = trx.blockNumber;

  createLink.appendChild(spanReciever);
  createDiv.appendChild(createLink);
  createDiv.appendChild(spanValue);
  createDiv.appendChild(spanBlock);
  historyInfo.appendChild(createDiv);
};
