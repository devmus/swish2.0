export const setURL = (network) => {
  let url;
  switch (network) {
    case 'netEth':
      url = 'https://mainnet.infura.io/v3/2a00b6c60feb4574af79a5daf93c9c58';
      return url;
    case 'netSeph':
      url = 'https://sepolia.infura.io/v3/2a00b6c60feb4574af79a5daf93c9c58';
      return url;
    case 'netGoer':
      url = 'https://goerli.infura.io/v3/2a00b6c60feb4574af79a5daf93c9c58';
      return url;
  }
};
