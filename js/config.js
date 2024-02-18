export const $ = document.querySelector.bind(document);

let chainId;

const getChainId = async () => {
  chainId = await window.ethereum.request({ method: 'eth_chainId' });
  return chainId;
};

// export const handleChainChanged = async () => {};

export const setURL = async () => {
  chainId = await getChainId();

  let url;

  switch (chainId) {
    case '0x1':
      url = 'https://mainnet.infura.io/v3/2a00b6c60feb4574af79a5daf93c9c58';
      return url;
    case '0xaa36a7':
      url = 'https://sepolia.infura.io/v3/2a00b6c60feb4574af79a5daf93c9c58';
      return url;
    case '0x5':
      url = 'https://goerli.infura.io/v3/2a00b6c60feb4574af79a5daf93c9c58';
      return url;
  }
};

export const setScanURL = async () => {
  chainId = await getChainId();

  let url;

  switch (chainId) {
    case '0x1':
      url = 'https://api.etherscan.io/api';
      return url;
    case '0xaa36a7':
      url = 'https://api-sepolia.etherscan.io/api';
      return url;
    case '0x5':
      url = 'https://api-goerli.etherscan.io/api';
      return url;
  }
};

export const setHistoryURL = async () => {
  chainId = await getChainId();

  let url;

  switch (chainId) {
    case '0x1':
      url = 'https://etherscan.io/tx/';
      return url;
    case '0xaa36a7':
      url = 'https://sepolia.etherscan.io/tx/';
      return url;
    case '0x5':
      url = 'https://goerli.etherscan.io/tx/';
      return url;
  }
};

export const settings = {
  API_KEY: '4C8GJMV48WHVC43C9BEUQS9XBM19Z1UZNP',
};

export const transactionsByAdress = {
  query1: '?module=account&action=txlist&address=',
  query2: '&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=',
};
