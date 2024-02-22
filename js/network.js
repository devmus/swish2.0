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
    preSection.innerHTML = `<div class="form-control"><h2>Du behöver <a href="https://metamask.io/" class="metamask">installera en wallet</a> först...</h2><div></section>`;
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

  const eth = '0x1';
  const seph = '0xaa36a7';
  const goer = '0x5';

  switch (network) {
    case 'ethereummainnet':
      if (chainId !== eth) change(eth);
      return;
    case 'sepholiatestnet':
      if (chainId !== seph) change(seph);
      return;
    case 'goerlitestnet':
      if (chainId !== goer) change(goer);
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
