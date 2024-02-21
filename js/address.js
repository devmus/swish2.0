export function shortenAddress(address) {
  if (!/^0x[a-fA-F0-9]{40}$/.test(address)) {
    return 'Invalid address format';
  }
  const firstPart = address.slice(0, 5);
  const lastPart = address.slice(-5);
  const shortenedAddress = firstPart + '...' + lastPart;
  return shortenedAddress;
}
