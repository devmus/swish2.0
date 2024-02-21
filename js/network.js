import { $, getChainId } from './config.js';
import { displayNetwork, resetAccountInfo } from './dom.js';

const preSection = $('.pre-section');
const mainSection = $('.balance-section');

export const chosenNetwork = (network) => {
  resetAccountInfo();
  if (typeof ethereum !== 'undefined') {
    preSection.style.display = 'none';
    mainSection.style.display = 'block';

    const networkOption = network.options[network.selectedIndex].text;
    const formattedNetwork = displayNetwork(networkOption);
    connect(formattedNetwork);
  } else {
    preSection.innerHTML = `<div class="form-control"><h2>Du behöver <a href="https://metamask.io/" class="metamask">installera en wallet</a> först...</h2><s<div></section>`;
  }
};

const connect = async (network) => {
  const chainId = await getChainId();
  try {
    await window.ethereum.request({
      method: 'eth_requestAccounts',
      params: [],
    });
  } catch (error) {
    console.log(error);
  }

  switch (network) {
    case 'ethereummainnet':
      if (chainId !== '0x1') change('0x1');
      return;
    case 'sepholiatestnet':
      if (chainId !== '0xaa36a7') change('0xaa36a7');
      return;
    case 'goerlitestnet':
      if (chainId !== '0x5') change('0x5');
      return;
  }
};

const change = async (change) => {
  try {
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [
        {
          chainId: change,
        },
      ],
    });
  } catch (error) {
    console.log(error);
  }
};
