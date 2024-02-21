export const $ = document.querySelector.bind(document);

export const getChainId = async () => {
  const chain = await window.ethereum.request({ method: 'eth_chainId' });
  return chain;
};

export const getURL = async (chainId, type) => {
  let url;

  switch (chainId) {
    case '0x1':
      url =
        type === 'regular'
          ? 'https://mainnet.infura.io/v3/2a00b6c60feb4574af79a5daf93c9c58'
          : type === 'scan'
          ? 'https://api.etherscan.io/api'
          : 'https://etherscan.io/tx/';
      break;
    case '0xaa36a7':
      url =
        type === 'regular'
          ? 'https://sepolia.infura.io/v3/2a00b6c60feb4574af79a5daf93c9c58'
          : type === 'scan'
          ? 'https://api-sepolia.etherscan.io/api'
          : 'https://sepolia.etherscan.io/tx/';
      break;
    case '0x5':
      url =
        type === 'regular'
          ? 'https://goerli.infura.io/v3/2a00b6c60feb4574af79a5daf93c9c58'
          : type === 'scan'
          ? 'https://api-goerli.etherscan.io/api'
          : 'https://goerli.etherscan.io/tx/';
      break;
    default:
      url = '';
  }

  return url;
};

export const settings = {
  API_KEY: '4C8GJMV48WHVC43C9BEUQS9XBM19Z1UZNP',
};

export const transactionsByAdress = {
  query1: '?module=account&action=txlist&address=',
  query2: '&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=',
};
