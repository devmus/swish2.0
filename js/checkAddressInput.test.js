import { expect, it } from 'vitest';
import { describe } from 'node:test';

import { checkAddressInput } from './checkAddressInput.js';

describe('check address input value', () => {
  it('should return error and return undefined if the length of address is not 42 char ', () => {
    const address = 'abc';
    const result = checkAddressInput(address);
    expect(result).toBeUndefined;
    expect(result).toBe(
      'Addressen är inte giltig, den måste innehålla 42 tecken.'
    );
  });

  it('should return address if it starts with "0x"', () => {
    const address = '123456789012345678901234567890123456789012';
    const result = checkAddressInput(address);
    expect(result).toBeUndefined;
    expect(result).toBe('Addressen är inte giltig, den måste börja med "0x".');
  });

  it('should return address', () => {
    const address = '0x3456789012345678901234567890123456789012';
    const result = checkAddressInput(address);
    expect(result).toBe(address);
  });
});
