import { $ } from './config.js';

const displayNetworkContainer = $('.display-network');

export const displayNetwork = (text) => {
  if (text !== 'Nätverkslista') {
    displayNetworkContainer.textContent = text;
    const container = displayNetworkContainer.parentElement;
    const containerId = text.replace(/ /g, '').toLowerCase();
    container.setAttribute('id', containerId);
    return containerId;
  }
};
