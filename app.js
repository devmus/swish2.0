import { displayNetwork } from './js/dom.js';
import { setURL } from './js/config.js';

const $ = document.querySelector.bind(document);
const chooseNetwork = $('#network');

const initApp = () => {
  chooseNetwork.selectedIndex = 0;
};

const networkChoice = () => {
  const formatedNetwork =
    chooseNetwork.options[chooseNetwork.selectedIndex].text;
  displayNetwork(formatedNetwork);
  const url = setURL(chooseNetwork.value);
  connectNetwork(url);
};

const connectNetwork = (url) => {
  const rpc = new Web3(url);
  console.log(rpc);
};

document.addEventListener('DOMContentLoaded', initApp);
chooseNetwork.addEventListener('change', networkChoice);
