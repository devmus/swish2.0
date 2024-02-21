export const checkAmountInput = (amount) => {
  if (amount.includes(',')) {
    amount = amount.replace(',', '.');
  }

  if (isNaN(Number(amount))) {
    return 'Beloppet får bara bestå utav siffror.';
  }

  return amount;
};
