import { displayNetwork } from './js/dom.js';

const $ = document.querySelector.bind(document);
const chooseNetwork = $('#network');

const initApp = () => {
  chooseNetwork.selectedIndex = 0;
};

document.addEventListener('DOMContentLoaded', initApp);
chooseNetwork.addEventListener('change', () => {
  const chosenNetwork = chooseNetwork.options[chooseNetwork.selectedIndex].text;
  displayNetwork(chosenNetwork);
});
