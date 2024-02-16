export const $ = document.querySelector.bind(document);

export const setURL = async () => {
  const chainId = await window.ethereum.request({ method: 'eth_chainId' });

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
  const chainId = await window.ethereum.request({ method: 'eth_chainId' });

  let scanUrl;

  switch (chainId) {
    case '0x1':
      scanUrl = 'https://api.etherscan.io/api';
      return scanUrl;
    case '0xaa36a7':
      scanUrl = 'https://api-sepolia.etherscan.io/api';
      return scanUrl;
    case '0x5':
      scanUrl = 'https://api-goerli.etherscan.io/api';
      return scanUrl;
  }
};

export const settings = {
  API_KEY: '4C8GJMV48WHVC43C9BEUQS9XBM19Z1UZNP',
};

export const transactionsByAdress = {
  query1: '?module=account&action=txlist&address=',
  query2: '&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=',
};
