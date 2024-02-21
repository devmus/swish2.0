import { $ } from './config.js';
import { getAddress } from './account.js';
import { checkAddressInput } from './checkAddressInput.js';
import { checkAmountInput } from './checkAmountInput.js';

const amountInput = $('#amount');
const recepientInput = $('#recepient');

export const sendTrx = async () => {
  const amountTrx = checkAmountInput(amountInput.value);
  const recepientAdress = checkAddressInput(recepientInput.value);

  amountInput.value = amountTrx;
  recepientInput.value = recepientAdress;

  try {
    const amount = parseFloat(amountTrx) * Math.pow(10, 18);
    const adress = await getAddress();

    let params = [
      {
        from: adress,
        to: recepientAdress,
        value: Number(amount).toString(16),
        gas: Number(21000).toString(16),
        gasPrice: Number(2500000).toString(16),
      },
    ];

    const response = await ethereum.request({
      method: 'eth_sendTransaction',
      params: params,
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};
