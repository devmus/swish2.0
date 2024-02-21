import { expect, it } from 'vitest';
import { describe } from 'node:test';

import { checkAmountInput } from './checkAmountInput';

describe('check amount input value', () => {
  it('should replace "," with "." if used and return amount', () => {
    const amount = '0,02';
    const result = checkAmountInput(amount);
    expect(result).toBe('0.02');
  });

  it('should return error if the string cant be truned into a number', () => {
    const amount = 'abc';
    const result = checkAmountInput(amount);
    expect(result).toBe('Beloppet får bara bestå utav siffror.');
  });
});
