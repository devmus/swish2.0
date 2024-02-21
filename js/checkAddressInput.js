export const checkAddressInput = (address) => {
  if (address.length !== 42) {
    return 'Addressen är inte giltig, den måste innehålla 42 tecken.';
  } else if (!address.startsWith('0x')) {
    return 'Addressen är inte giltig, den måste börja med "0x".';
  }

  return address;
};
