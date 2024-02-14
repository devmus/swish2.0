const displayNetworkContainer = document.querySelector('.display-network');

export const displayNetwork = (text) => {
  displayNetworkContainer.textContent = text;
  const container = displayNetworkContainer.parentElement;
  const containerId = text.replace(/ /g, '').toLowerCase();
  container.setAttribute('id', containerId);
};
