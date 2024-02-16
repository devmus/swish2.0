import { $ } from './config.js';

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
    document.querySelector('#trx-count').innerText = '';
  }
};

export const displayTrx = (trx) => {
  const createDiv = document.createElement('div');
  createDiv.classList.add('trx-history-details');
  const spanReciever = document.createElement('span');
  const spanValue = document.createElement('span');
  const spanBlock = document.createElement('span');

  spanReciever.innerText = trx.to;
  spanValue.innerText = trx.value;
  spanBlock.innerText = trx.blockNumber;

  createDiv.appendChild(spanReciever);
  createDiv.appendChild(spanValue);
  createDiv.appendChild(spanBlock);
  historyInfo.appendChild(createDiv);
};
